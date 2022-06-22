<template>
  <div class="nav">
    <a href="../../index.html">
      <div class="brandLogo">
        <img src="../assets/brand.png" alt="brandLogo">
      </div>
    </a>
    <div class="rollButton">
      <img src="../assets/expand.svg" alt="roll" id="openClose">
    </div>
    <div  class="navButtonField">
      <div class="navButton" id="homeButton">
        <span style="--i:1">{{ t('home1') }}</span>
        <span style="--i:2">{{ t('home2') }}</span>
        <span style="--i:3">{{ t('home3') }}</span>
        <span style="--i:4">{{ t('home4') }}</span>
        <span style="--i:5">{{ t('home5') }}</span>
      </div>
      <div class="navButton" id="experienceButton">
        <span style="--i:1">{{ t('exp1') }}</span>
        <span style="--i:2">{{ t('exp2') }}</span>
        <span style="--i:3">{{ t('exp3') }}</span>
        <span style="--i:4">{{ t('exp4') }}</span>
        <span style="--i:5">{{ t('exp5') }}</span>
        <span style="--i:6">{{ t('exp6') }}</span>
        <span style="--i:7">{{ t('exp7') }}</span>
        <span style="--i:8">{{ t('exp8') }}</span>
        <span style="--i:9">{{ t('exp9') }}</span>
        <span style="--i:10">{{ t('exp10') }}</span>
      </div>
      <div class="navButton" id="educationButton">
        <span style="--i:1">{{ t('edu1') }}</span>
        <span style="--i:2">{{ t('edu2') }}</span>
        <span style="--i:3">{{ t('edu3') }}</span>
        <span style="--i:4">{{ t('edu4') }}</span>
        <span style="--i:5">{{ t('edu5') }}</span>
        <span style="--i:6">{{ t('edu6') }}</span>
        <span style="--i:7">{{ t('edu7') }}</span>
        <span style="--i:8">{{ t('edu8') }}</span>
        <span style="--i:9">{{ t('edu9') }}</span>
      </div>
      <div class="navButton" id="skillButton">
        <span style="--i:1">{{ t('skill1') }}</span>
        <span style="--i:2">{{ t('skill2') }}</span>
        <span style="--i:3">{{ t('skill3') }}</span>
        <span style="--i:4">{{ t('skill4') }}</span>
        <span style="--i:5">{{ t('skill5') }}</span>
        <span style="--i:6">{{ t('skill6') }}</span>
      </div>
      <div class="navButton" id="galleryButton">
        <span style="--i:1">{{ t('gallery1') }}</span>
        <span style="--i:2">{{ t('gallery2') }}</span>
        <span style="--i:3">{{ t('gallery3') }}</span>
        <span style="--i:4">{{ t('gallery4') }}</span>
        <span style="--i:5">{{ t('gallery5') }}</span>
        <span style="--i:6">{{ t('gallery6') }}</span>
        <span style="--i:7">{{ t('gallery7') }}</span>
      </div>
      <div class="navButton" id="otherButton">
        <span style="--i:1">{{ t('other1') }}</span>
        <span style="--i:2">{{ t('other2') }}</span>
        <span style="--i:3">{{ t('other3') }}</span>
        <span style="--i:4">{{ t('other4') }}</span>
        <span style="--i:5">{{ t('other5') }}</span>
        <span style="--i:6">{{ t('other6') }}</span>
        <span style="--i:7">{{ t('other7') }}</span>
      </div>
      <div class="navButton" id="languageButton" @click="toggle ? ChangeEN() : ChangeSK()">
        <span id="character1" style="--i:1">{{ t('lang1') }}</span>
        <span id="character2" style="--i:2">{{ t('lang2') }}</span>
      </div>
      <a href="/CV.pdf" download="CV_SK/EN" style="text-decoration: none;">
        <div class="navButton" id="download">
          <span style="--i:1">{{ t('down1') }}</span>
          <span style="--i:2">{{ t('down2') }}</span>
          <span style="--i:3">{{ t('down3') }}</span>
          <span style="--i:4">{{ t('down4') }}</span>
          <span style="--i:5">{{ t('down5') }}</span>
          <span style="--i:6">{{ t('down6') }}</span>
          <span style="--i:7">{{ t('down7') }}</span>
          <span style="--i:8">{{ t('down8') }}</span>
          <span style="--i:9">_</span>
          <span style="--i:10">C</span>
          <span style="--i:11">V</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: "NavBar",
  data(){
    return{
      toggle: true
    }
  },
  setup() {
    const { locale ,t } = useI18n({useScope: "global",})
    locale.value = 'sk'
    return { locale , t }
  },
  methods:{
    ChangeEN: function (){
      setTimeout(() => this.locale = 'en', 500);
      this.toggle = !this.toggle;
    },
    ChangeSK: function (){
      setTimeout(() => this.locale = 'sk', 500);
      this.toggle = !this.toggle;
    }
  },
  mounted() {
    $(document).ready(function (){
      let absoluteWidth = window.screen.width;
      if (absoluteWidth < 1024){
        $(".navButtonField").css("display", "none");
        $("#openClose").attr('src', 'assets/expand.svg');
        menu_toggle = true;
      }else{
        $(".navButtonField").css("display", "flex");
      }
    });

    let language = true;
    $('#languageButton').click( function () {
      $('.loadingGreen').animate({height: 'toggle'});
      $('.loadingGrey').delay(200).animate({height: 'toggle'}, function () {
        language = !language;
      }).ready(function () {
        $('.loadingGrey').delay(1500).animate({height: 'toggle'});
        $('.loadingGreen').delay(1900).animate({height: 'toggle'});
        })
    })

    function value(){
      let height = window.screen.height;
      let absoluteWidth = window.screen.width;
      if (absoluteWidth < 1024){return 10;}
      return height/6;
    }

    $("#homeButton").click(function() {
      let absoluteWidth = window.screen.width;
      if (absoluteWidth < 1024){
        $('html,body').animate({scrollTop: $(".photo").offset().top}, 'slow');
      }else{
        $('html,body').animate({scrollTop: $("#home").offset().top}, 'slow');
      }
    });

    $("#experienceButton").click(function() {
      $('html,body').animate({scrollTop: $("#experience").offset().top - value()}, 'slow');
    });

    $("#educationButton").click(function() {
      $('html,body').animate({scrollTop: $("#education").offset().top - value()}, 'slow');
    });

    $("#skillButton").click(function() {
      $('html,body').animate({scrollTop: $("#skill").offset().top - value()}, 'slow');
    });

    $("#galleryButton").click(function() {
      $('html,body').animate({scrollTop: $("#gallery").offset().top - value()}, 'slow');
    });

    $("#otherButton").click(function() {
      $('html,body').animate({scrollTop: $("#other").offset().top - value()}, 'slow');
    });

    let menu_toggle = true;
    $('.rollButton').click(function () {
      if (menu_toggle){
        menu_toggle = false;
        $(".rollButton").fadeOut('fast', function () {
          $("#openClose").attr('src', 'assets/x.svg').ready(function () {
            $(".navButtonField").animate({height: 'toggle'},function () {
              $(".rollButton").fadeIn('fast',function () {
              });
            })
          })
        });
      }else{
        menu_toggle = true;
        $(".rollButton").fadeOut('fast', function () {
          $("#openClose").attr('src', 'assets/expand.svg').ready(function () {
            $(".navButtonField").animate({height: 'toggle'},function () {
              $(".rollButton").fadeIn('fast',function () {
              });
            });
          });
        });
      }
    });

    $('.navButtonField').click(function () {
      let absoluteWidth = window.screen.width;
      if (absoluteWidth < 1024){
        menu_toggle = true;
        $(".navButtonField").animate({height: 'toggle'},function () {
          $("#openClose").attr('src', 'assets/expand.svg');
        });
      }
    })

    $(window).resize(function (){
      let absoluteWidth = window.screen.width;
      if (absoluteWidth < 1024){
        $(".navButtonField").css("display", "none");
        $("#openClose").attr('src', 'assets/expand.svg');
        menu_toggle = true;
      }else{
        $(".navButtonField").css("display", "flex");
      }
    });

    let homeTop = $('#home').offset().top;
    let homeHeight = $('#home').height() + $('#aboutMeDiv').height() - value() - 50;
    let experienceTop = $('#experience').offset().top - value() - 50;
    let experienceHeight = $('#experience').height() + experienceTop;
    let educationTop = $('#education').offset().top - value() - 50;
    let educationHeight = $('#education').height() + educationTop;
    let skillTop = $('#skill').offset().top - value() - 50;
    // let skillHeight = $('#skill').height() + skillTop;
    let skillHeight = $('#skill').height() + skillTop + $('#circleChart').height();
    let galleryTop = $('#gallery').offset().top - value() - 50;
    let galleryHeight = $('#gallery').height() + galleryTop;
    let otherTop = $('#game').offset().top - value() - 50;
    let otherHeight = $('#game').height() + otherTop + $('#other').height() + $('#contact').height();
    $(window).scroll(function() {
      if ( $(this).scrollTop()  >= homeTop && $(this).scrollTop() < homeHeight) {
        $("#homeButton").css("color", "#3bba9c")
      }else{
        $("#homeButton").css("color", "white")
      }
      if ( $(this).scrollTop()  >= experienceTop && $(this).scrollTop() < experienceHeight) {
        $("#experienceButton").css("color", "#3bba9c")
      }else{
        $("#experienceButton").css("color", "white")
      }
      if ( $(this).scrollTop()  >= educationTop && $(this).scrollTop() < educationHeight) {
        $("#educationButton").css("color", "#3bba9c")
      }else{
        $("#educationButton").css("color", "white")
      }
      if ( $(this).scrollTop()  >= skillTop && $(this).scrollTop() < skillHeight) {
        $("#skillButton").css("color", "#3bba9c")
      }else{
        $("#skillButton").css("color", "white")
      }
      if ( $(this).scrollTop()  >= galleryTop && $(this).scrollTop() < galleryHeight) {
        $("#galleryButton").css("color", "#3bba9c")
      }else{
        $("#galleryButton").css("color", "white")
      }
      if ( $(this).scrollTop()  >= otherTop && $(this).scrollTop() < otherHeight) {
        $("#otherButton").css("color", "#3bba9c")
      }else{
        $("#otherButton").css("color", "white")
      }
    });
  }
}
</script>

<style scoped>
.nav{
  width: auto;
  height: 5em;
  position: fixed;
  top: 5%;
  left: 5%;
  right: 3%;
  background-color: #5A6161;
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  z-index: 3;
}

.brandLogo > img{
  height: 4.5em;
  width: auto;
  cursor: pointer;
  margin-left: 4em;
  display: flex;
  align-items: center;
}

.navButtonField{
  margin-left: auto;
  flex-direction: row;
  display: flex;
  padding-right: 0.5em;
}

.navButton{
  font-family: 'Encode Sans', sans-serif;
  color: white;
  height: 4em;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
}

#download{
  border: 1px solid #3bba9c;
  color: #3bba9c;
  border-radius: 50px;
  cursor: pointer;
}

.rollButton{
  display: none;
}

.navButton:hover > span {
  position: relative;
  display: inline-block;
  animation: wave 0.5s;
  animation-delay: calc(.1s * var(--i));
}

@keyframes wave {
  0%{
    transform: translateY(0);
  }
  40%{
    transform: translateY(-0.8em);
  }
  100%{
    transform: translateY(0);
    color: #3bba9c;
  }
}

@media only screen and (min-width: 1536px){
  .brandLogo > img{
    height: 4.5em;
    width: auto;
    cursor: pointer;
    margin-left: 5em;
    display: flex;
    align-items: center;
  }

  .navButton{
    font-family: 'Encode Sans', sans-serif;
    color: white;
    height: 4em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    display: flex;
    align-items: center;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1280px){
  .brandLogo > img{
    height: 4.5em;
    width: auto;
    cursor: pointer;
    margin-left: 1.5em;
    display: flex;
    align-items: center;
  }

  .navButton{
    font-family: 'Encode Sans', sans-serif;
    color: white;
    height: 4em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    display: flex;
    align-items: center;
  }
}

@media only screen and (max-width: 1023px){
  .nav{
    width: auto;
    height: 4em;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #5A6161;
    border-radius: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    z-index: 2;
  }

  .brandLogo > img{
    height: 3.0em;
    width: auto;
    cursor: pointer;
    margin-left: 1em;
    display: flex;
    align-items: center;
  }

  .rollButton{
    display: flex;
    margin-left: auto;
    margin-right: 1em;
    border: 1px solid black;
    border-radius: 50px;
    filter: invert(99%);
    padding: 0.2em;
  }

  .rollButton > img{
    height: 2.5em;
    width: auto;
  }

  .navButtonField{
    margin-left: 0;
    flex-direction: column;
    display: flex;
    padding-right: 0;
    position: fixed;
    top: 4em;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5A6161;
    border-top: 1px solid #808080;
    overflow: scroll;
    align-items: center;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-x: hidden;
  }

  .navButtonField::-webkit-scrollbar{
    display: none;
  }

  #download{
    margin-bottom: 1em;
  }

  .navButton:hover > span{
    animation: none;
  }
}
</style>

<i18n>
{
  "sk": {
    "home1": "D",
    "home2": "O",
    "home3": "M",
    "home4": "O",
    "home5": "V",
    "exp1": "S",
    "exp2": "K",
    "exp3": "Ú",
    "exp4": "S",
    "exp5": "E",
    "exp6": "N",
    "exp7": "O",
    "exp8": "S",
    "exp9": "T",
    "exp10": "I",
    "edu1": "V",
    "edu2": "Z",
    "edu3": "D",
    "edu4": "E",
    "edu5": "L",
    "edu6": "A",
    "edu7": "N",
    "edu8": "I",
    "edu9": "E",
    "skill1": "J",
    "skill2": "A",
    "skill3": "Z",
    "skill4": "Y",
    "skill5": "K",
    "skill6": "Y",
    "gallery1": "G",
    "gallery2": "A",
    "gallery3": "L",
    "gallery4": "É",
    "gallery5": "R",
    "gallery6": "I",
    "gallery7": "A",
    "other1": "O",
    "other2": "S",
    "other3": "T",
    "other4": "A",
    "other5": "T",
    "other6": "N",
    "other7": "É",
    "lang1": "E",
    "lang2": "N",
    "down1": "S",
    "down2": "T",
    "down3": "I",
    "down4": "A",
    "down5": "H",
    "down6": "N",
    "down7": "U",
    "down8": "Ť"




  },
  "en": {
    "home1": "H",
    "home2": "O",
    "home3": "M",
    "home4": "E",
    "home5": "",
    "exp1": "E",
    "exp2": "X",
    "exp3": "P",
    "exp4": "E",
    "exp5": "R",
    "exp6": "I",
    "exp7": "E",
    "exp8": "N",
    "exp9": "C",
    "exp10": "E",
    "edu1": "E",
    "edu2": "D",
    "edu3": "U",
    "edu4": "C",
    "edu5": "A",
    "edu6": "T",
    "edu7": "I",
    "edu8": "O",
    "edu9": "N",
    "skill1": "S",
    "skill2": "K",
    "skill3": "I",
    "skill4": "L",
    "skill5": "L",
    "skill6": "S",
    "gallery1": "G",
    "gallery2": "A",
    "gallery3": "L",
    "gallery4": "L",
    "gallery5": "E",
    "gallery6": "R",
    "gallery7": "Y",
    "other1": "O",
    "other2": "T",
    "other3": "H",
    "other4": "E",
    "other5": "R",
    "other6": "S",
    "other7": "",
    "lang1": "S",
    "lang2": "K",
    "down1": "D",
    "down2": "O",
    "down3": "W",
    "down4": "N",
    "down5": "L",
    "down6": "O",
    "down7": "A",
    "down8": "D"
  }
}
</i18n>