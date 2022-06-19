<template>
  <section id="aboutMeDiv"><br><br>
    <div class="textField">
      <div class="title">
        <p>{{ t('aboutMeTitle') }}</p>
      </div>
    </div>
    <div class="textField">
      <div class="subTitle">
        <p>{{ t('aboutMeSub') }}</p>
      </div>
    </div><br>
    <div class="textField">
      <div class="textQuickW">
        <p>
          {{ t('aboutMeText1') }}
        </p><br>
        <p>
          {{ t('aboutMeText2') }}
        </p>
      </div>
    </div><br><br>
    <div class="textField">
      <div class="rowRepair">
        <div class="col-md-6">
          <div class="rowData">
            <div class="col">
              <div class="textMontG">
                <p>
                  {{ t('aboutMeAge') }}
                </p>
              </div>
            </div>
            <div class="col-md-auto">
              <div class="textQuickW">
                <p>
                  31
                </p>
              </div>
            </div>
          </div>
          <div class="rowData">
            <div class="col">
              <div class="textMontG">
                <p>
                  {{ t('aboutMeAddress') }}
                </p>
              </div>
            </div>
            <div class="col-md-auto">
              <div class="textQuickW">
                <p>
                  Bratislava V
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="rowData">
            <div class="col">
              <div class="textMontG">
                <p>
                  {{ t('aboutMeTel') }}
                </p>
              </div>
            </div>
            <div class="col-md-auto">
              <div class="textQuickW">
                <p>
                  +421 950 596 214
                </p>
              </div>
            </div>
          </div>
          <div class="rowData">
            <div class="col">
              <div class="textMontG">
                <p>
                  EMAIL:
                </p>
              </div>
            </div>
            <div class="col-md-auto">
              <div class="textQuickW">
                <p>
                  bodnar.marian@bmcode.sk
                </p>
              </div>
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
  name: "AboutMe",

  setup() {
    const { t } = useI18n({inheritLocale: true,})
    return { t }
  }

}
</script>

<style scoped>
section{
  height: auto;
  width: 100%;
  border-bottom: 1px solid #808080;
}

.rowRepair{
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: -30px;
}

.rowData{
  display: flex;
  flex-direction: row;
}

@media only screen and (min-width: 1024px) and (max-width: 1280px){
  .rowRepair{
    display: flex;
    flex-direction: row;
  }

  .rowData{
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 560px) and (max-width: 780px){
  .rowRepair{
    display: flex;
    flex-direction: row;
  }

  .rowData{
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 560px){
  .rowRepair{
    display: flex;
    flex-direction: column;
  }

  .rowData{
    display: flex;
    flex-direction: column;
  }
}
</style>

<i18n>
{
  "sk": {
    "aboutMeTitle": "O MNE",
    "aboutMeSub": "MÔJ PRÍBEH",
    "aboutMeText1": "Od základnej školy sa venujem elektrotechnike a prvý program ktorý som napísal bol určený pre mikrokontrolér PIC16F84. Po strednej škole som trochu cestoval, neskôr som sa usadil v rodnom meste a začal som pracovať ako Elektrikár. Po piatich rokoch som vedel že stereotyp v malom meste ma nebaví a zamestnal som sa ako servisný technik. Nové technológie ku ktorým som mal prístup ako technik ma prinútili zamyslieť sa nad tým čo vlastne chcem robiť. V roku 2021 som začal študovať na Fakulte informatiky PEVŠ v Bratislave. Mojím definitívnym cieľom je vypracovať sa na full-stack developera. Pretože v IT je vždy sa čo učiť.",
    "aboutMeText2": "Táto webová stránka bola vytvorená vo frameworku Vue.js(Vite) pomocou komponentov. Využíva upravený Boostrap grid systém, plugin n18i, JQuery a Vanilla JS.",
    "aboutMeAge": "VEK:",
    "aboutMeAddress": "ADRESA:",
    "aboutMeTel": "TELEFÓN:"

  },
  "en": {
    "aboutMeTitle": "ABOUT ME",
    "aboutMeSub": "MY STORY",
    "aboutMeText1": "I have been involved in electrical engineering since primary school. The first program i ever wrote was for the PIC16F84 microcontroller. I traveled a bit after highschool and later on settled in my hometown, where i started working as an electrician. After five years, I figured, that i didn't like the stereotype of a small town, so i've got a job as a service technician. The new technologies I had access to as a technician made me realise what I would really like to do. In 2021 I started studying at the Faculty of Informatics PEVŠ in Bratislava. My ultimate goal is to develop into a full-stack developer. Since there is always something new to learn as IT.",
    "aboutMeText2": "This website was created in framework Vue.js(Vite) by components. It is currently using a modified Bootstrap grid system, plugin n18i, JQuery and Vanilla JS.",
    "aboutMeAge": "AGE:",
    "aboutMeAddress": "ADDRESS:",
    "aboutMeTel": "PHONE:"
  }
}
</i18n>