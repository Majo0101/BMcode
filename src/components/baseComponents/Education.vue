<template>
<section id="education"><br><br>
  <div class="textField">
    <div class="title">
      <p>
        {{ t('educationTitle') }}
      </p>
    </div>
  </div>
  <div class="textField">
    <div class="subTitle">
      <p>
        {{ t('educationSub') }}
      </p>
    </div>
  </div><br><br>
  <div class="textField" id="textFieldUpdate">
    <div class="row">
      <div class="col-md-6">
        <div class="row" id="leftTitle">
          <div class="col-2">
            <div class="textMontG">
              <p style="writing-mode: vertical-rl;">
                2021 - NOW
              </p>
            </div>
          </div>
          <div class="col-10">
            <div class="textQuickW">
              <h5 style="font-size: 150%; font-weight: bolder">
                {{ t('educationSchool1') }}
              </h5>
              <p style="font-weight: bolder">
                Bratislava
              </p>
            </div>
          </div>
        </div>
        <div class="row" id="leftSubTitle" style="margin-left: 1em">
          <div class="textQuickW">
            <h6 style="font-weight: bolder">
              {{ t('educationDirection1') }}
            </h6><br>
          </div>
        </div>
        <br>
        <div class="row" id="leftText" style="margin-left: 1em">
          <div class="textQuickW" style="border-left: 1px solid white; padding-left: 0.5em;">
            <p>
              {{ t('educationText1') }}
            </p>
          </div>
        </div>
        <br><br>
      </div>
      <div class="col-md-6">
        <div class="row" id="rightTitle">
          <div class="col-2 ">
            <div class="textMontG">
              <p style="writing-mode: vertical-rl;">2006 - 2010</p>
            </div>
          </div>
          <div class="col-10" >
            <div class="textQuickW">
              <h5 style="font-size: 150%; font-weight: bolder">
                {{ t('educationSchool2') }}
              </h5>
              <p style="font-weight: bolder">
                Tisovec
              </p>
            </div>
          </div>
        </div>
        <div class="row" id="rightSubTitle" style="margin-left: 1em">
          <div class="textQuickW">
            <h6 style="font-weight: bolder">
              {{ t('educationDirection2') }}
            </h6><br>
          </div>
        </div>
        <br>
        <div class="row" id="rightText" style="margin-left: 1em;">
          <div class="textQuickW" style="border-left: 1px solid white; padding-left: 0.5em;">
            <p>
              {{ t('educationText2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div><br><br>
</section>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: "Education",

  data(){
    return{
      pageLocale: this.locale
    }
  },

  setup() {
    const { locale, t } = useI18n({inheritLocale: true,})
    return { locale, t }
  },

  mounted() {
    $(document).ready(function() {
      $("#rightTitle").css("height", $("#leftTitle").height());
      $("#rightSubTitle").css("height", $("#leftSubTitle").height());
    });

    $(window).resize(function () {
      $("#rightTitle").css("height", $("#leftTitle").height());
      $("#rightSubTitle").css("height", $("#leftSubTitle").height());
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

@media only screen and (max-width: 560px){
  #textFieldUpdate{
    margin-left: 0.2em;
  }
}
</style>

<i18n>
{
  "sk": {
    "educationTitle": "VZDELANIE",
    "educationSub": "ŠTÚDIUM",
    "educationSchool1": "Paneurópska vysoká škola - Fakulta informatiky",
    "educationDirection1":"Aplikovaná informatika pre priemysel 4.0",
    "educationText1": "Komplexné znalosti o metódach dolovania dát (data mining) a ich následného využitia v prostredí rozsiahlych dátových skladov (Big Data) generovaných v oblasti priemyslu. Oboznámenie s nástrojmi Business Intelligence.",
    "educationSchool2": "Stredná odborná škola",
    "educationDirection2":"2675 - Elektrotechnika",
    "educationText2": "Široký odborný profil s nevyhnutným všeobecným vzdelaním, dostatočnou adaptabilitou, logickým myslením a schopnosťou aplikovať nadobudnuté vedomosti v procese riešenia problémov samostatne alebo v tíme."
  },
  "en": {
    "educationTitle": "EDUCATION",
    "educationSub": "I STUDY AT",
    "educationSchool1": "Paneurópska vysoká škola - Faculty of Informatics",
    "educationDirection1":"Applied informatics for industry 4.0",
    "educationText1": "Comprehensive knowledge of data mining methods and their subsequent use in the environment large data warehouses (Big Data) generated in the industry. Introduction to tools Business Intelligence.",
    "educationSchool2": "Secondary school",
    "educationDirection2":"2675 - Electrical engineering",
    "educationText2": "Broad professional profile with the necessary general education, sufficient adaptability, logical thinking and the ability to apply the acquired knowledge in the problem-solving process individually or in a team."
  }
}
</i18n>