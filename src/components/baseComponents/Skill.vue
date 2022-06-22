<template>
    <section id="skill"><br><br>
      <div class="textField">
        <div class="title">
          <p>
            {{ t('skillTitle') }}
          </p>
        </div>
      </div>
      <div>
        <div class="textField">
          <div class="subTitle">
            <p>
              {{ t('skillSub') }}
            </p>
          </div>
        </div>
      </div><br><br>
      <waypoint @change="Run">
        <div class="textField">
          <div class="row">
            <div class="col-md-4">
              <div class="rowRepair">
                <div class="col-1">
                  <div class="bar">
                    <div class="barLevel" :class="{one : animStart}"><div class="lol"></div></div>
                  </div>
                </div>
                <div class="col-10">
                  <div class="textQuickWBolder">
                    <p>HTML</p>
                    <p>CSS</p>
                  </div>
                </div>
              </div>
              <div class="textQuickW" style="width: 80%">
                <p>
                  {{ t('skillBar1') }}
                </p>
              </div>
              <br>
            </div>
            <div class="col-md-4">
              <div class="rowRepair">
                <div class="col-1">
                  <div class="bar">
                    <div class="barLevel" :class="{two : animStart}"><div class="lol"></div></div>
                  </div>
                </div>
                <div class="col-10">
                  <div class="textQuickWBolder">
                    <p>JQ</p>
                    <p>JS</p>
                  </div>
                </div>
              </div>
              <div class="textQuickW" style="width: 80%">
                <p>
                  {{ t('skillBar2') }}
                </p>
              </div>
              <br>
            </div>
            <div class="col-md-4">
              <div class="rowRepair">
                <div class="col-1">
                  <div class="bar">
                    <div class="barLevel" :class="{three : animStart}"><div class="lol"></div></div>
                  </div>
                </div>
                <div class="col-10">
                  <div class="textQuickWBolder">
                    <p>C</p>
                    <p>C++</p>
                  </div>
                </div>
              </div>
              <div class="textQuickW" style="width: 80%">
                <p>
                  {{ t('skillBar3') }}
                </p>
              </div>
              <br>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="rowRepair">
                <div class="col-1">
                  <div class="bar">
                    <div class="barLevel" :class="{four : animStart}"><div class="lol"></div></div>
                  </div>
                </div>
                <div class="col-10">
                  <div class="textQuickWBolder">
                    <p>Python</p>
                    <p>PHP</p>
                  </div>
                </div>
              </div>
              <div class="textQuickW" style="width: 80%">
                <p>
                  {{ t('skillBar4') }}
                </p>
              </div>
              <br>
            </div>
            <div class="col-md-4">
              <div class="rowRepair">
                <div class="col-1">
                  <div class="bar">
                    <div class="barLevel" :class="{five : animStart}"><div class="lol"></div></div>
                  </div>
                </div>
                <div class="col-10">
                  <div class="textQuickWBolder">
                    <p>Siemens</p>
                    <p>LOGO</p>
                  </div>
                </div>
              </div>
              <div class="textQuickW" style="width: 80%">
                <p>
                  {{ t('skillBar5') }}
                </p>
              </div>
              <br>
            </div>
            <div class="col-md-4">
              <div class="rowRepair">
                <div class="col-1">
                  <div class="bar">
                    <div class="barLevel" :class="{six : animStart}"><div class="lol"></div></div>
                  </div>
                </div>
                <div class="col-10">
                  <div class="textQuickWBolder">
                    <p>MYSQL</p>
                    <p>JAVA</p>
                  </div>
                </div>
              </div>
              <div class="textQuickW" style="width: 80%">
                <p>
                  {{ t('skillBar6') }}
                </p>
              </div>
              <br>
            </div>
          </div>
        </div><br><br>
      </waypoint>
    </section>
</template>

<script>
import {useI18n} from "vue-i18n";
import { Waypoint } from 'vue-waypoint'

export default {
  name: "Skill",
  components:{
    Waypoint
  },

  data(){
    return{
      animStart: false
    }
  },

  setup() {
    const { t } = useI18n({inheritLocale: true,})
    return { t }
  },

  methods:{
    Run: function (waypointState){
      this.animStart = waypointState.going === 'IN';
    }
  }
}
</script>

<style scoped>
section{
  position: relative;
  width: 100%;
  border-bottom: 1px solid #808080;
}

.bar{
  width: 0.5em;
  height: 5.2em;
  background-color: #808080;
  position: relative;
}

.barLevel{
  width: 100%;
  background-color: #3bba9c;
  position: absolute;
  bottom: 0;
}

.rowRepair{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.one{
  animation: animOne 2s ease-out forwards;
}

@keyframes animOne {
  0%{height: 0}
  100%{height: 3.64em}
}

.two{
  animation: animTwo 2s ease-out forwards;
}

@keyframes animTwo {
  0%{height: 0}
  100%{height: 3.12em}
}

.three{
  animation: animThree 2s ease-out forwards;
}

@keyframes animThree {
  0%{height: 0}
  100%{height: 4.16em}
}

.four{
  animation: animFour 2s ease-out forwards;
}

@keyframes animFour {
  0%{height: 0}
  100%{height: 2.08em}
}

.five{
  animation: animFive 2s ease-out forwards;
}

@keyframes animFive {
  0%{height: 0}
  100%{height: 4.16em}
}

.six{
  animation: animSix 2s ease-out forwards;
}

@keyframes animSix {
  0%{height: 0}
  100%{height: 2.34em}
}

.lol{
  position: absolute;
  top: 0;
  right: -0.7em;
  border-top: 2px solid white;
  width: 0.5em;
}

</style>

<i18n>
{
  "sk": {
    "skillTitle": "JAZYKY",
    "skillSub": "PROGRAMOVANIE",
    "skillBar1": "Táto stránka odzrkadľuje môj level v čase jej programovania.",
    "skillBar2": "Rozširovanie funkčnosti webstránok a webové aplikácie.",
    "skillBar3": "Schopnosť navrhnúť a vyrobiť funkčné embedded zariadenia.",
    "skillBar4": "Malé appky. BMcode využíva PHP mail() a kontroluje Captcha.",
    "skillBar5": "Výroba ovládania na mieru spolu s elektrickou časťou.",
    "skillBar6": "Teoretické vedomosti a jednoduché aplikácie."
  },
  "en": {
    "skillTitle": "CODING SKILLS",
    "skillSub": "LET'S CODE",
    "skillBar1": "This page reflects my level at the time of its programming.",
    "skillBar2": "Extending the functionality of websites and web applications.",
    "skillBar3": "Ability to design and manufacture functional embedded devices.",
    "skillBar4": "Small apps. BMcode uses PHP mail () and checks Captcha.",
    "skillBar5": "Production of custom controls together with the electrical part.",
    "skillBar6": "Theoretical knowledge and simple applications."
  }
}
</i18n>