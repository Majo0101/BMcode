<template>
  <section id="home">
    <div class="prologDiv">
      <div style="margin: 11px 0 11px 0;"></div>
      <div class="textField">
        <div class='console-container'><span id='text'></span>
          <div class='console-underscore' id='console'>&#95;</div>
        </div>
      </div>
      <div style="margin: 11px 0 11px 0;"></div>
      <div class="textField">
        <div class="textQuickW">
          <p>{{t('prolog')}}</p>
        </div>
      </div><br>
      <div class="textField" style="display: flex">
        <div class="button" id="contactMe">{{ t('contactBtn') }}</div>
        <div class="button" id="aboutMe"><span id="buttonBouncing">{{ t('aboutMeBtn') }}</span></div>
      </div>
      <div style="margin: 11px 0 11px 0;"></div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: "Prolog",

  setup() {
    const { t } = useI18n({inheritLocale: true,})
    return { t }
  },

  mounted() {
    function value(){
      let height = window.screen.height;
      let absoluteWidth = window.screen.width;
      if (absoluteWidth <= 980){return 10;}
      return height/6;
    }

    $("#contactMe").click(function() {
      $('html,body').animate({scrollTop: $("#contact").offset().top - value()}, 'slow');
    });

    $("#aboutMe").click(function() {
      $('html,body').animate({scrollTop: $("#aboutMeDiv").offset().top - value()}, 'slow');
    });

    consoleText(['Hello World.', 'I am a programmer.', 'I Did it all in Vue.js.'], 'text');

    function consoleText(words, id, colors) {

      let visible = true;
      const con = document.getElementById('console');
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      const target = document.getElementById(id);

      window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function() {
            const usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
      window.setInterval(function() {
        if (visible === true) {
          con.className = 'console-underscore hidden'
          visible = false;

        } else {
          con.className = 'console-underscore'

          visible = true;
        }
      }, 400)
    }
  }

}
</script>

<style scoped>
section{
  height: 98vh;
  width: 100%;
  position: relative;
}

.prologDiv{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #808080;
  border-top: 1px solid #808080;
}

#contactMe{
  margin-left: 2em;
  padding: 1em 6em;
}

#aboutMe{
  margin-left: 4em;
  padding: 1em 3em;
  color: #3bba9c;
}

#buttonBouncing{
  position: relative;
  animation: example 1s ease infinite alternate;
}

@keyframes example {
  from{ top: 0.4em; }
  to  { top:-0.4em; }
}

.console-container {
  font-family: 'Montserrat', sans-serif;
  font-size: 120%;
  display:block;
  color:#3bba9c;
}

.console-underscore {
  color: white;
  display:inline-block;
  position:relative;
  left: 0.2em;
}

@media only screen and (min-width: 1281px) and (max-width: 1536px){
  #contactMe{
    margin-left: 2em;
    padding: 1em 5em;
  }

  #aboutMe{
    margin-left: 4em;
    padding: 1em 2.5em;
    color: #3bba9c;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1280px){
  section{
    height: 100vh;
    width: 100%;
    position: relative;
  }

  #contactMe{
    margin-left: 1em;
    padding: 1em 4.0em;
  }

  #aboutMe{
    margin-left: 3em;
    padding: 1em 3em;
    color: #3bba9c;
  }
}

@media only screen and (min-width: 780px) and (max-width: 1023px){
  section{
    height: auto;
    width: 100%;
    position: relative;
  }

  .prologDiv{
    position: relative;
    bottom: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #808080;
    border-top: none;
  }

  #contactMe{
    margin-left: 2em;
    padding: 1em 6em;
  }

  #aboutMe{
    margin-left: 4em;
    padding: 1em 3em;
    color: #3bba9c;
  }
}

@media only screen and (min-width: 560px) and (max-width: 780px){
  section{
    height: auto;
    width: 100%;
    position: relative;
  }

  .prologDiv{
    position: relative;
    bottom: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #808080;
    border-top: none;
  }

  #contactMe{
    margin-left: 0.5em;
    padding: 1em 6em;
  }

  #aboutMe{
    margin-left: 3em;
    padding: 1em 3em;
    color: #3bba9c;
  }
}

@media only screen and (min-width: 281px) and (max-width: 560px){
  section{
    height: auto;
    width: 100%;
    position: relative;
  }

  .prologDiv{
    position: relative;
    bottom: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #808080;
    border-top: none;
  }

  #contactMe{
    margin-left: 0.2em;
    padding: 1em 1.5em;
  }

  #aboutMe{
    margin-left: 1em;
    padding: 1em 1.5em;
    color: #3bba9c;
  }
}

@media only screen and (max-width: 280px){
  section{
    height: auto;
    width: 100%;
    position: relative;
  }

  .prologDiv{
    position: relative;
    bottom: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #808080;
    border-top: none;
  }

  #contactMe{
    margin-left: 0.2em;
    padding: 0.5em 0.5em;
  }

  #aboutMe{
    margin-left: 1em;
    padding: 0.5em 0.5em;
    color: #3bba9c;
    text-align: center;
  }
}
</style>

<i18n>
{
  "sk": {
    "prolog": "Ahoj! Moje meno je Marián Bodnár a BMcode je aktuálne môj životopis. Z pracovných skúseností nebude jasné prečo vlastním tento web. Môže za to fakt že sa neustále vzdelávam a robím čo ma baví.",
    "contactBtn": "KONTAKT",
    "aboutMeBtn": "O MNE"

  },
  "en": {
    "prolog": "Hi, My name is Marian Bodnar and BMcode is actually my CV. It will not be clear from work experience why I own this site. This is due to the fact that I am constantly learning and doing what I like.",
    "contactBtn": "CONTACT",
    "aboutMeBtn": "ABOUT ME"
  }
}
</i18n>