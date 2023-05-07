<template>
  <section id="gallery"><br><br>
    <div class="galleryPlate">
      <div id="close"><img src="../../assets/galleryX.svg" alt="Close"></div>
      <div class="photoArea" :style="{ backgroundImage: 'url(' + PhotoFrame[position][counter] + ')' }" :class="{fadeOut : DelaySwitch, fadeIn : !DelaySwitch}">
        <img :src="PhotoFrame[position][counter]"  id="invisible" alt="Invisible">
        <div id="left" @click="Left"><img src="../../assets/galleryLeft.svg" alt="Left"></div>
        <div id="right" @click="Right"><img src="../../assets/galleryRight.svg" alt="Right"></div>
        <div class="photoCounter">
          {{ counter + 1 }} - {{PhotoFrame[position].length}}
        </div>
      </div>
    </div>
    <div class="textField">
      <div class="title">
        <p>
          {{ t('galleryTitle') }}
        </p>
      </div>
    </div>
    <div class="textField">
      <div class="subTitle">
        <p>
          {{ t('gallerySub') }}
        </p>
      </div>
    </div><br><br>
    <div class="textField">
      <div class="row">
        <div class="col-md-6">
          <div class="photoFrame" id="photoOne" :style="{ backgroundImage: 'url(' + imageA + ')' }" @click="SetGallery(0)">
            <div class="clone"><img src="../../assets/galleryExpand.svg" alt="Expand">
            </div>
          </div>
          <br>
          <div class="textMontG" style="font-size: 90%;text-align: center">{{ t('galleryPhotoSub1') }}</div>
          <div class="textMontW" style="font-size: 110%; ; text-align: center">{{ t('galleryPhotoTitle1') }}</div>
          <br><br>
        </div>
        <div class="col-md-6">
          <div class="photoFrame" id="photoTwo" :style="{ backgroundImage: 'url(' + imageB + ')' }" @click="SetGallery(1)">
            <div class="clone"><img src="../../assets/galleryExpand.svg" alt="Expand">
            </div>
          </div>
          <br>
          <div class="textMontG" style="font-size: 90%;text-align: center">{{ t('galleryPhotoSub2') }}</div>
          <div class="textMontW" style="font-size: 110%;text-align: center">{{ t('galleryPhotoTitle2') }}</div>
          <br><br>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="photoFrame" id="photoThree" :style="{ backgroundImage: 'url(' + imageC + ')' }" @click="SetGallery(2)">
            <div class="clone"><img src="../../assets/galleryExpand.svg" alt="Expand"></div>
          </div>
          <br>
          <div class="textMontG" style="font-size: 90%;text-align: center">{{ t('galleryPhotoSub3') }}</div>
          <div class="textMontW" style="font-size: 110%;text-align: center">{{ t('galleryPhotoTitle3') }}</div>
          <br><br>
        </div>
        <div class="col-md-6">
          <div class="photoFrame" id="photoFour" :style="{ backgroundImage: 'url(' + imageD + ')' }" @click="SetGallery(3)">
            <div class="clone"><img src="../../assets/galleryExpand.svg" alt="Expand">
            </div>
          </div>
          <br>
          <div class="textMontG" style="font-size: 90%;text-align: center">{{ t('galleryPhotoSub4') }}</div>
          <div class="textMontW" style="font-size: 110%;text-align: center">{{ t('galleryPhotoTitle4') }}</div>
          <br><br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imageA from '../../assets/a.jpeg';
import imageB from '../../assets/b.jpeg';
import imageC from '../../assets/c.jpeg';
import imageD from '../../assets/d.jpeg';

import frameA1 from '../../assets/a1.jpg';
import frameA2 from '../../assets/a2.jpg';
import frameA3 from '../../assets/a3.jpg';
import frameA4 from '../../assets/a4.jpg';
import frameA5 from '../../assets/a5.jpg';

import frameB1 from '../../assets/b1.jpg';
import frameB2 from '../../assets/b2.jpg';

import frameC1 from '../../assets/c1.jpg';
import frameC2 from '../../assets/c2.jpg';
import frameC3 from '../../assets/c3.jpg';
import frameC4 from '../../assets/c4.jpg';
import frameC5 from '../../assets/c5.jpg';
import frameC6 from '../../assets/c6.jpg';
import frameC7 from '../../assets/c7.jpg';

import frameD1 from '../../assets/d1.jpg';
import frameD2 from '../../assets/d2.jpg';
import frameD3 from '../../assets/d3.jpg';
import frameD4 from '../../assets/d4.jpg';


import {useI18n} from "vue-i18n";

export default {
  name: "Gallery",

  setup() {
    const { t } = useI18n({inheritLocale: true,})
    return { t }
  },

  data(){
    return{
      counter: 0,
      position: 1,
      DelaySwitch: false,

      imageA: imageA,
      imageB: imageB,
      imageC: imageC,
      imageD: imageD,

      PhotoFrame: [
          [frameA1, frameA2, frameA3, frameA4, frameA5],
          [frameB1, frameB2],
          [frameC1, frameC2, frameC3, frameC4, frameC5, frameC6, frameC7],
          [frameD1, frameD2, frameD3, frameD4]
      ]
    }
  },

  methods: {
    LeftCounter: function () {
      this.counter--;
      if (this.counter < 0 ){
        this.counter = this.PhotoFrame[this.position].length - 1;
      }
    },

    Left: function() {
      this.DelaySwitch = true;
      setTimeout(() => this.LeftCounter(), 200);
      setTimeout(() => this.DelaySwitch = false, 300);
    },

    RightCounter: function () {
      this.counter++
      if (this.counter > this.PhotoFrame[this.position].length - 1){
        this.counter = 0;
      }
    },

    Right: function (){
      this.DelaySwitch = true;
      setTimeout(() => this.RightCounter(), 200);
      setTimeout(() => this.DelaySwitch = false, 300);
    },

    SetGallery: function (number) {
      this.counter = 0;
      this.position = number;
    }
  },

  mounted() {
    $(".galleryPlate").fadeOut('fast');

    $("#close").click(function(){
      $(".galleryPlate").fadeOut('slow');
    });

    $(".photoFrame").click(function(){
          $(".galleryPlate").fadeIn('slow');
    });
  }
}
</script>

<style scoped>
section{
  position: relative;
  width: 100%;
  border-bottom: 1px solid #808080;
}

.photoCounter{
  color: white;
  position: absolute;
  font-family: 'Quicksand', sans-serif;
}

.fadeOut{
  opacity: 0;
  transition: opacity 0.2s;
}

.fadeIn{
  opacity: 1;
  transition: opacity 0.2s;
}

.galleryPlate{
  width: 100%;
  height: 100vh;
  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(38,37,37,0.9);
  justify-content: center;
  align-items: center;
}

#close{
  position: absolute;
  top: 5%;
  right: 5%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}

#close > img{
  filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  width: 100%;
}

#close > img:hover{
  filter: invert(100%) saturate(614%) brightness(100%) contrast(100%);
  width: 100%;
}

#close > img:active{
  filter: invert(66%) sepia(13%) saturate(1801%) hue-rotate(116deg) brightness(93%) contrast(89%);
  width: 100%;
}

#right{
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

#left{
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}

#right > img{
  position: absolute;
  height: 3rem;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
}

#left > img{
  position: absolute;
  height: 3rem;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
}

#right > img:hover{
  filter: invert(100%) saturate(614%) brightness(100%) contrast(100%);
}

#left > img:hover{
  filter: invert(100%) saturate(614%) brightness(100%) contrast(100%);
}

#right > img:active{
  filter: invert(66%) sepia(13%) saturate(1801%) hue-rotate(116deg) brightness(93%) contrast(89%);
}

#left > img:active{
  filter: invert(66%) sepia(13%) saturate(1801%) hue-rotate(116deg) brightness(93%) contrast(89%);
}

.photoFrame{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}


#photoOne{
  background-size: cover;
  background-position: center;
  aspect-ratio: 1 / 1;
  width: 100%;
}

#photoTwo{
  background-size: cover;
  background-position: center;
  aspect-ratio: 1 / 1;
  width: 100%;
}

#photoThree{
  background-size: cover;
  background-position: center;
  aspect-ratio: 1 / 1;;
  width: 100%;
}

#photoFour{
  background-size: cover;
  background-position: center;
  aspect-ratio: 1 / 1;
  width: 100%;
}

.clone{
  width: 0;
  height: 0;
  background-color: #3bba9c;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.2s ease-out 100ms, width 0.2s ease-out 100ms;
}

.photoFrame:hover > .clone{
  height: 90%;
  width: 90%;
}

.clone > img{
  height: 10%;
  filter: invert(100%)
}

.photoArea{
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
  width: auto;
  position: absolute;
  max-height: 80%;
  max-width: 80%;
}

#invisible{
  visibility: hidden;
  max-width: 80vw;
  max-height: 70vh;
}

@media only screen and (min-width: 780px) and (max-width: 1023px){
  #right > img{
    position: absolute;
    height: 2rem;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  }

  #left > img{
    position: absolute;
    height: 2rem;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  }
}

@media only screen and (max-width: 560px) and (max-width: 780px){
  #right > img{
    position: absolute;
    height: 2rem;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  }

  #left > img{
    position: absolute;
    height: 2rem;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  }
}

@media only screen and (min-width: 281px) and (max-width: 560px){
  #right > img{
    position: absolute;
    height: 2rem;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  }

  #left > img{
    position: absolute;
    height: 2rem;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  }
}

@media only screen and (max-width: 280px){
  #right > img{
    position: absolute;
    height: 1rem;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  }

  #left > img{
    position: absolute;
    height: 1rem;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    filter: invert(50%) saturate(614%) brightness(100%) contrast(100%);
  }
}
</style>

<i18n>
{
  "sk": {
    "galleryTitle": "GALÉRIA",
    "gallerySub": "FOTO",
    "galleryPhotoTitle1": "EMBEDDED",
    "galleryPhotoSub1": "ALBUM",
    "galleryPhotoTitle2": "STARÁ PRÁCA",
    "galleryPhotoSub2": "ALBUM",
    "galleryPhotoTitle3": "CESTOVANIE",
    "galleryPhotoSub3": "ALBUM",
    "galleryPhotoTitle4": "OBĽÚBENÉ",
    "galleryPhotoSub4": "ALBUM"
  },
  "en": {
    "galleryTitle": "GALLERY",
    "gallerySub": "SOME PHOTOS",
    "galleryPhotoTitle1": "EMBEDDED",
    "galleryPhotoSub1": "PHOTO FRAME",
    "galleryPhotoTitle2": "OLD JOBS",
    "galleryPhotoSub2": "PHOTO FRAME",
    "galleryPhotoTitle3": "TRAVEL",
    "galleryPhotoSub3": "PHOTO FRAME",
    "galleryPhotoTitle4": "FAVORITES",
    "galleryPhotoSub4": "PHOTO FRAME"
  }
}
</i18n>