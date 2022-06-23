<template>
  <section id="circleChart"><br><br>
      <div class="textField">
        <div class="title">
          <p>
            {{ t('circleTitle') }}
          </p>
        </div>
      </div>
      <div class="textField">
        <div class="subTitle">
          <p>
            {{ t('circleSub') }}
          </p>
        </div>
      </div><br><br>
    <waypoint @change="Run">
      <div class="textField">
        <div class="row">
          <div class="col-md-4">
            <div class="row  repair">
              <div class="baseChart">
                <div class="levelGreen" :class="{circleOneGreen : animStart}" style="--angle: 70%">
                  <div class="coverGreen">
                    <div class="levelWhite" :class="{circleOneWhite: animStart}" style="--angleWhite: 69%">
                      <div class="coverWhite" :class="{circleOneGrey: animStart}" style="--angleGrey: 70%">
                        <div class="textChartTop">
                          <div class="textQuickW">
                            {{ circle1 }}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><br>
            <div class="textQuickWBolder repair">
              <p>Windows</p>
              <p>Linux</p>
            </div>
            <div class="textQuickW repair">
              <p>
                {{ t('circleText1') }}
              </p>
            </div><br><br>
          </div>
          <div class="col-md-4">
            <div class="row repair">
              <div class="baseChart">
                <div class="levelGreen" :class="{ circleTwoGreen : animStart }" style="--angle: 56%">
                  <div class="coverGreen">
                    <div class="levelWhite" :class="{circleTwoWhite: animStart}" style="--angleWhite: 55%">
                      <div class="coverWhite" :class="{circleTwoGrey: animStart}" style="--angleGrey: 56%">
                        <div class="textChartTop">
                          <div class="textQuickW">
                            {{ circle2 }}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><br>
            <div class="textQuickWBolder repair">
              <p>Vue.js</p>
              <p>Bootstrap</p>
            </div>
            <div class="textQuickW repair">
              <p>
                {{ t('circleText2') }}
              </p>
            </div><br><br>
          </div>
          <div class="col-md-4">
            <div class="row repair">
              <div class="baseChart">
                <div class="levelGreen" :class="{circleThreeGreen: animStart}" style="--angle: 30%">
                  <div class="coverGreen">
                    <div class="levelWhite" :class="{circleThreeWhite: animStart}" style="--angleWhite: 29%">
                      <div class="coverWhite" :class="{circleThreeGrey: animStart}" style="--angleGrey: 30%">
                        <div class="textChartTop">
                          <div class="textQuickW">
                            {{ circle3 }}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><br>
            <div class="textQuickWBolder repair">
              <p>Django</p>
              <p>Docker</p>
            </div>
            <div class="textQuickW repair">
              <p>
                {{ t('circleText3') }}
              </p>
            </div>
          </div>
        </div><br>
      </div>
    </waypoint>
  </section>
</template>

<script>
import {useI18n} from "vue-i18n";
import { Waypoint } from 'vue-waypoint'

export default {
  name: "CircleCharts",
  components:{
    Waypoint
  },

  created() {
    let check = CSS.supports("( background: paint(something) )")
    if (!check){
      console.log("@property not supported. Replace your browser with a better one.");
    }
  },

  data(){
    return{
      browserSupport: true,
      animStart: false,
      circle1: 70,
      circle2: 55,
      circle3: 30,
    }
  },

  methods:{
    Run: function (waypointState){
      this.animStart = waypointState.going === 'IN';
    }
  },

  setup() {
    const { t } = useI18n({inheritLocale: true,})
    return { t }
  }
}
</script>

<style scoped>
section{
  position: relative;
  width: 100%;
  border-bottom: 1px solid #808080;
}

.repair{
  justify-content: center;
}

.baseChart{
  width: 8em;
  aspect-ratio: 1;
  display: flex;
}

.levelGreen{
  --angle: 0%;
  margin: auto;
  width: 8em;
  aspect-ratio: 1;
  background-image: conic-gradient(#3bba9c var(--angle), #808080 0);
  border-radius: 50%;
  display: flex;
}

.coverGreen{
  margin: auto;
  width: 7.5em;
  aspect-ratio: 1;
  background-color: #3D4849;
  border-radius: 100%;
  display: flex;
}

.levelWhite{
  margin: auto;
  width: 7em;
  aspect-ratio: 1;
  position: relative;
  border-radius: 100%;
  --angleWhite: 1%;
  background-image: conic-gradient(#3D4849 var(--angleWhite), white 2%);
}

.coverWhite{
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  border-radius: 100%;
  display: flex;
  --angleGrey: 0%;
  background-image: conic-gradient(transparent var(--angleGrey), #3D4849 0);
}

.textChartTop{
  margin: auto;
  width: 5.5em;
  aspect-ratio: 1;
  background-color: #3D4849;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/*-----------------------------------------------------Animations-----------------------------------------------------*/
.circleOneGreen{
  animation: rotateOne 1.5s ease-out forwards;
}

@keyframes rotateOne {
  0%{--angle: 1%;}
  100%{--angle: 71%;}
}

.circleTwoGreen{
  animation: rotateTwo 1.5s ease-out forwards;
}

@keyframes rotateTwo {
  0%{--angle: 1%;}
  100%{--angle: 56%;}
}

.circleThreeGreen{
  animation: rotateThree 1.5s ease-out forwards;
}

@keyframes rotateThree {
  0%{--angle: 1%;}
  100%{--angle: 31%;}
}

@property --angle {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}
/*--------------------------------------------------------------------------------------------------------------------*/
.circleOneWhite{
  animation: rotateOneWhite 1.5s ease-out forwards;
}

@keyframes rotateOneWhite {
  0%{--angleWhite: 0%;}
  100%{--angleWhite: 70%;}
}

.circleTwoWhite{
  animation: rotateTwoWhite 1.5s ease-out forwards;
}

@keyframes rotateTwoWhite {
  0%{--angleWhite: 0%;}
  100%{--angleWhite: 55%;}
}

.circleThreeWhite{
  animation: rotateThreeWhite 1.5s ease-out forwards;
}

@keyframes rotateThreeWhite {
  0%{--angleWhite: 0%;}
  100%{--angleWhite: 30%;}
}

@property --angleWhite {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}
/*--------------------------------------------------------------------------------------------------------------------*/
.circleOneGrey{
  animation: rotateOneGrey 1.5s ease-out forwards;
}

@keyframes rotateOneGrey {
  0%{--angleGrey: 1%;}
  100%{--angleGrey: 71%;}
}

.circleTwoGrey{
  animation: rotateTwoGrey 1.5s ease-out forwards;
}

@keyframes rotateTwoGrey {
  0%{--angleGrey: 1%;}
  100%{--angleGrey: 56%;}
}

.circleThreeGrey{
  animation: rotateThreeGrey 1.5s ease-out forwards;
}

@keyframes rotateThreeGrey {
  0%{--angleGrey: 1%;}
  100%{--angleGrey: 31%;}
}

@property --angleGrey {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}
/*--------------------------------------------------------------------------------------------------------------------*/

.repair{
  width: 95%;
  margin: 0 auto;
  text-align: center;
}

</style>

<i18n>
{
  "sk": {
    "circleTitle": "FRAMEWORK",
    "circleSub": "VÝVOJ V",
    "circleText1": "Vývoj v Linuxe alebo Windows. Ovládanie cez konzolu bash && powershell. Obľúbené aplikácie CLion  VS code && PyCharm && Intellij IDEA. Správa softvéru pomocou git systému.",
    "circleText2": "One page webové aplikácie rýchlejšie ako React alebo Angular. Efektívne delenie stránky na komponenty a ich znovu použitie. Bootstrap grid systém pre jednoduchý responzívny dizajn. ",
    "circleText3": "Bezpečný a rýchly Backend napísaný v Pythone, programovacom jazyku, ktorý je čoraz populárnejší. Základné znalosti spúšťania a vytvárania Docker kontajnerov."
  },
  "en": {
    "circleTitle": "FRAMEWORKS",
    "circleSub": "DEVELOPING ON",
    "circleText1": "Development in Linux or Windows. Bash & powershell console control. Favorite applications CLion VS code && PyCharm && Intellij IDEA. Software management using the git system.",
    "circleText2": "One page web applications faster than React or Angular. Efficient page segmentation and reuse. Bootstrap grid system for simple responsive design. Must have for modern web.",
    "circleText3": "Secure and fast Backend written in Python, a programming language that is becoming increasingly popular. Basic knowledge of launching and creating Docker containers."
  }
}
</i18n>