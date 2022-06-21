<template>
  <waypoint @change="Run">
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
      <div class="textField">
        <div class="row">
          <div class="col-md-4">
            <div class="row  repair">
              <div class="baseChart">
                <div class="level" :class="{circleOne: animStart}">
                  <div class="coverChart">
                    <div class="textQuickW">
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="textQuickW">
                <p>
                  {{ t('circleText1') }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row repair">
              <div class="baseChart">
                <div class="level" :class="{ circleTwo : animStart }">
                  <div class="coverChart">
                    <div class="textQuickW">
                      --angle
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="textQuickW">
                <p>
                  {{ t('circleText2') }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row repair">
              <div class="baseChart">
                <div class="level" :class="{circleThree: animStart}">
                  <div class="coverChart">
                    <div class="textQuickW">
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="textQuickW">
                <p>
                  {{ t('circleText3') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div><br><br>
  </section>
  </waypoint>
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
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ) {this.browser = "opera";}
    else if(navigator.userAgent.indexOf("Edg") !== -1 ) {this.browser = "edge";}
    else if(navigator.userAgent.indexOf("Chrome") !== -1 ) {this.browser = "chrome";}
    else if(navigator.userAgent.indexOf("Safari") !== -1) {this.browser = "safari";}
    else if(navigator.userAgent.indexOf("Firefox") !== -1 ) {this.browser = "firefox";}
    else {this.browser = "none";}


      },

  data(){
    return{
      browser: '',
      animStart: false,
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

.level{
  --angle: 0%;
  margin: auto;
  width: 8em;
  aspect-ratio: 1;
  background-image: conic-gradient(#3bba9c var(--angle), #808080 0);
  border-radius: 50%;
  display: flex;
}

.coverChart{
  margin: auto;
  width: 7.5em;
  aspect-ratio: 1;
  background-color: #3D4849;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circleOne{
  animation: rotateOne 1.5s linear forwards;
}

@keyframes rotateOne {
  0%{--angle: 0%;}
  100%{--angle: 80%;}
}

.circleTwo{
  animation: rotateTwo 1.5s linear forwards;
}

@keyframes rotateTwo {
  0%{--angle: 0%;}
  100%{--angle: 50%;}
}

.circleThree{
  animation: rotateThree 1.5s linear forwards;
}

@keyframes rotateThree {
  0%{--angle: 0%;}
  100%{--angle: 30%;}
}

@property --angle {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}


</style>

<i18n>
{
  "sk": {
    "circleTitle": "FRAMEWORKY",
    "circleSub": "VÝVOJ V",
    "circleText1": "",
    "circleText2": "",
    "circleText3": ""
  },
  "en": {
    "circleTitle": "FRAMEWORKS",
    "circleSub": "DEVELOPING ON",
    "circleText1": "",
    "circleText2": "",
    "circleText3": ""
  }
}
</i18n>