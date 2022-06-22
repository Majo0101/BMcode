<template>
    <section id="other"><br><br>
      <div class="textField">
        <div class="title">
          <p>
            {{ t('otherTitle') }}
          </p>
        </div>
      </div>
      <div class="textField">
        <div class="subTitle">
          <p>
            {{ t('otherSub') }}
          </p>
        </div>
      </div><br><br>
      <waypoint @change="Run">
      <div class="textField">
        <div class="textQuickWBolder">
          <p>
            {{ t('otherLang') }}
          </p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-2">
                <div class="textMontG">
                  <p style="writing-mode: vertical-lr;">
                    ENGLISH
                  </p>
                </div>
              </div>
              <div class="col-10">
                <div class="textQuickW">
                  <p style="font-weight: bolder">
                    {{ t('otherEN') }}
                  </p>
                </div>
                <div class="barHorizontal">
                  <div class="barHorizontalLevel" :class="{one : animStart}"><div class="lol"></div></div>
                </div>
              </div>
            </div>
            <br>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-2">
                <div class="textMontG">
                  <p style="writing-mode: vertical-lr">
                    SLOVAK
                  </p>
                </div>
              </div>
              <div class="col-10">
                <div class="textQuickW">
                  <p style="font-weight: bolder">
                    {{ t('otherSK') }}
                  </p>
                </div>
                <div class="barHorizontal">
                  <div class="barHorizontalLevel" :class="{two : animStart}"><div class="lol"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="textQuickWBolder">
          <p>
            {{ t('otherCertificate') }}
          </p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="row"  id="licenceTitle">
              <div class="col-2">
                <div class="textMontG">
                  <p style="writing-mode: vertical-lr">
                    2021
                  </p>
                </div>
              </div>
              <div class="col-10">
                <div class="textQuickW">
                  <p style="font-weight: bolder">
                    {{ t('otherCerTitle1') }}
                  </p>
                </div>
                <div class="textQuickG">
                  <p>
                    {{ t('otherCerSub1') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="textQuickW" id="licence">
                <p>
                  {{ t('otherCerText1') }}
                </p>
              </div>
            </div>
            <br>
          </div>
          <div class="col-md-6">
            <div class="row" id="driverTitle">
              <div class="col-2">
                <div class="textMontG">
                  <p style="writing-mode: vertical-lr;">2010</p>
                </div>
              </div>
              <div class="col-10">
                <div class="textQuickW">
                  <p style="font-weight: bolder">
                    {{ t('otherCerTitle2') }}
                  </p>
                </div>
                <div class="textQuickG">
                  <p>
                    {{ t('otherCerSub2') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="textQuickW" id="driverLicence">
                <p style="font-size: 150%">
                  <span style="background-color: #3bba9c; border-radius: 500px; padding: 0 0.4em">A</span>
                  <span style="background-color: #3bba9c; border-radius: 500px; padding: 0 0.4em; margin-left: 0.5em ">B</span>
                  <span style="background-color: #3bba9c; border-radius: 500px; padding: 0 0.4em; margin-left: 0.5em ">C</span>
                  <span style="background-color: #3bba9c; border-radius: 500px; padding: 0 0.4em; margin-left: 0.5em ">T</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <div class="textQuickWBolder">
          <p>
            {{ t('otherHobby') }}
          </p>
        </div>
        <div class="row">
          <div class="col-2">
            <div class="textMontG">
              <p style="writing-mode: vertical-rl;">
                {{ t('otherHobbyTitle') }}
              </p>
            </div>
          </div>
          <div class="col-10" id="colRepair">
            <div class="textQuickW">
              <p>
                {{ t('otherHobbyText') }}
              </p>
            </div>
          </div>
        </div>
      </div><br><br><br>
      </waypoint>
    </section>
</template>

<script>
import {useI18n} from "vue-i18n";
import { Waypoint } from 'vue-waypoint';

export default {
  name: "Other",
  components:{
    Waypoint
  },

  data(){
    return{
      animStart: false,
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
  },

  mounted() {
    $(document).ready(function() {
      $("#driverTitle").css("height", $("#licenceTitle").height());
    });

    $(window).resize(function () {
      $("#driverTitle").css("height", $("#licenceTitle").height());
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

.barHorizontal{
  width: 12em;
  position: relative;
  height: 0.5rem;
  background-color: #808080;
}

.barHorizontalLevel{
  height: 0.5rem;
  background-color: #3bba9c;
  position: absolute;
  left: 0;
}

#driverLicence, #licence{
  border-left: 1px solid white;
  padding-left: 0.5em;
  margin-left: 2.5em;
}

#colRepair{
  margin-left: -8.333333%;
}

.lol{
  position: absolute;
  height: 0.5em;
  border-left: 2px solid white;
  right: 0;
  bottom: -0.7em;
}

.one{
  animation: animOne 1.5s ease-out forwards;
}

@keyframes animOne {
  0%{width: 0}
  100%{width: 7em}
}

.two{
  animation: animTwo 1.5s ease-out forwards;
}

@keyframes animTwo {
  0%{width: 0}
  100%{width: 11em}
}

@media only screen and (min-width: 281px) and (max-width: 560px){
  #colRepair{
    margin-left: 0;
  }
}

@media only screen and (max-width: 280px){
  #colRepair{
    margin-left: 0;
  }
}
</style>

<i18n>
{
  "sk": {
    "otherTitle": "OSTATNÉ",
    "otherSub": "INFO",
    "otherLang": "JAZYKY",
    "otherEN": "B1(pokročilý)",
    "otherSK": "Natívny",
    "otherCertificate": "Certifikát",
    "otherCerTitle1": "§23 Elektrotechnická spôsobilosť",
    "otherCerSub1": "Juraj Komačka Rozkvet",
    "otherCerText1": "Riadenie prevádzky a činností do 1000V bez výbuchu.",
    "otherCerTitle2": "Vodičský preukaz",
    "otherCerSub2": "400 000km+",
    "otherCerText2": "",
    "otherHobby": "Záujmy",
    "otherHobbyTitle": "Voľný čas",
    "otherHobbyText": "Vo voľnom čase sa venujem najmä škole a cvičeniam. Pred školou som sa viac venoval výrobe IoT projektov hardware aj software. Mám rád tiež lezenie a adrenalínové športy. Cestovanie je samozrejmosťou."
  },
  "en": {
    "otherTitle": "OTHER",
    "otherSub": "SOME INFO",
    "otherLang": "Languages",
    "otherEN": "B1(intermediate)",
    "otherSK": "Native",
    "otherCertificate": "Certificates",
    "otherCerTitle1": "§23 Electrician certificate",
    "otherCerSub1": "Juraj Komačka Rozkvet",
    "otherCerText1": "Electrician managment / Max 1000V without explosion",
    "otherCerTitle2": "Driver license",
    "otherCerSub2": "400 000km+",
    "otherCerText2": "",
    "otherHobby": "Hobbies",
    "otherHobbyTitle": "Free time",
    "otherHobbyText": "In my free time, I focus mainly on school and exercises. Before school, I was focused more on the production of IoT hardware and software projects. I also like climbing and adrenaline sports. Travel is a matter of course."
  }
}
</i18n>