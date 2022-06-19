<template>
  <section><br><br>
    <div class="textField">
      <div class="title">
        <p>
          {{ t('gameTitle') }}
        </p>
      </div>
    </div>
    <div class="textField">
      <div class="subTitle">
        <p>
          {{ t('gameSub') }}
        </p>
      </div>
    </div><br><br>
    <div class="textField">
      <div class="game" id="gameWindow">
        <div class="sky"><img src="../../assets/cloud.svg" alt="cloud"></div>
        <div class="ground"><img src="../../assets/ground.svg" alt="ground"></div>
        <div class="play" style="font-family: 'Quicksand', sans-serif;font-weight: bolder; font-size: 170%; text-align: center; color: white;">Click for play</div>
        <div id="piggy"><img src="../../assets/piggy.svg" width="100%" id="pig" style="transform: scaleX(1);" alt="piggy"></div>
        <div id="coin"><img src="../../assets/coin.svg" width="70%" alt="coin"></div>
        <div class="score"><p style="color: white; font-family: 'Quicksand', sans-serif;font-size: 120%">Score:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="counter"></span></p></div>
      </div><br>
      <div class="manual">
        <img src="../../assets/gameLeft.svg" alt="Left">
        <div class="textQuickW">
          <p>
            {{ t('gameInstru') }}
          </p>
        </div>
        <img src="../../assets/gameRight.svg" alt="Right">
      </div>
    </div>
    <br><br>
  </section>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: "Game",

  setup() {
    const { t } = useI18n({inheritLocale: true,})
    return { t }
  },

  mounted() {
    let gameDiv = $('#gameWindow'), pigDiv = $('#piggy'), coin = $('#coin'), pig = $('#pig'), play = $('.play'),
        width = gameDiv.width() - pigDiv.width(),
        height = gameDiv.height() - coin.height(),
        keyPressed = {},
        pixelJump = 6,
        timer = null,
        coinFall = 0,
        counterGame = 0,
        coinPosition = gameDiv.width()/2,
        offClick = true;

    function mainFunction(v,a,b) {

      let n = parseInt(v, 10) - (keyPressed[a] ? pixelJump : 0) + (keyPressed[b] ? pixelJump : 0);

      keyPressed[a] ? pig.css('transform', 'scaleX(-1)') : 0;
      keyPressed[b] ? pig.css('transform', 'scaleX(1)') : 0;

      if (coinFall > (height - (coin.height()/2)) && n >= (coinPosition - coin.width()) && n <= (coinPosition + coin.width()) ){
        counterGame += 1;
        coinPosition = Math.floor((Math.random() * (width-coin.width()) + coin.width()));
        coinFall = 0;
        coin.css('left', coinPosition);
      }

      coin.css('top', coinFall); coinFall += 6;

      if (coinFall > height){
        coinFall = 0;
        clearInterval(timer);
        play.text('Game Over');
        offClick = true;
      }

      $('#counter').text(counterGame);
      return n < 0 ? 0 : n > width ? width : n;
    }

    $(window).keydown(function(e) { keyPressed[e.which] = true; });
    $(window).keyup(function(e) { keyPressed[e.which] = false; });

    $('.game').click(function () {
      play.text('');
      if (offClick){
        timer = setInterval(function() {
          pigDiv.css({left: function(i,v){return mainFunction(v, 37, 39);},});
        }, 20);
      }
      offClick = false;
      counterGame = 0;
    })
  }
}
</script>

<style scoped>
section{
  position: relative;
  width: 100%;
  border-bottom: 1px solid #808080;
}

#gameWindow {
  position: relative;
  width: 90%;
  aspect-ratio: 1;
  background-color: #3D4849;

}

#piggy {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 10%;
  height: 10%;
  filter: invert(100%);
}

#coin{
  position: absolute;
  top: 0;
  left: 50%;
  width: 10%;
  height: 10%;
  filter: invert(100%);
}

#counter{
  position: absolute;
  right: 0;
  top: 0;
  height: 1rem;
  width: auto;
}

.sky{
  position: absolute;
  width: auto;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.sky>img{
  height: 100%;
  width: 100%;
}

.ground{
  position: absolute;
  width: auto;
  height: auto;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.ground > img{
  height: 100%;
  width: 100%;
}

.score{
  position: absolute;
  top: 20%;
  left: 2%
}

.play{
  position: absolute;
  top: 40%;
  width: 100%;
}

.manual{
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
}

.manual > img{
  height: 2em;
  filter: invert(80%);
  margin: 0 1em;
}

@media only screen and (min-width: 1281px) and (max-width: 1536px){
  #gameWindow {
    position: relative;
    width: 80%;
    aspect-ratio: 1;
    background-color: #3D4849;
  }

  .manual{
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1280px){
  #gameWindow {
    position: relative;
    width: 70%;
    aspect-ratio: 1;
    background-color: #3D4849;
  }

  .manual{
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: center;
  }
}

@media only screen and (max-width: 1023px){
  section{
    position: relative;
    width: 100%;
    border-bottom: 1px solid #808080;
    display: none;
  }
}
</style>

<i18n>
{
  "sk": {
    "gameTitle": "ZÁBAVA",
    "gameSub": "JAVASCRIPT",
    "gameScore": "Skóre:",
    "gameMessage": "Klikni pre spustenie",
    "gameInstru": "Chytaj mince pomocou klávesnice."
  },
  "en": {
    "gameTitle": "A LITTLE FUN",
    "gameSub": "JAVASCRIPT",
    "gameScore": "Score:",
    "gameMessage": "Click for play",
    "gameInstru": "Grab coins with the keyboard."
  }
}
</i18n>