<template>
  <section id="experience"><br><br>
    <div class="textField">
      <div class="title">
        <p>
          {{ t('experienceTitle') }}
        </p>
      </div>
    </div>
    <div class="textField">
      <div class="subTitle">
        <p>
          {{ t('experienceSub') }}
        </p>
      </div>
    </div><br><br>
    <div class="jobButtonL"><img src="../../assets/left.svg" alt="Left"></div>
    <div class="jobButtonR"><img src="../../assets/right.svg" alt="Right"></div>
    <div class="line"></div>
    <div class="textField" id="frameJob">
      <div id="job1" class="textField" >
        <div class="rowRepair">
          <div class="colDate">
            <div class="textMontG">
              <p style="writing-mode: vertical-lr">2011 - 2016</p>
            </div>
          </div>
          <div class="colName">
            <div class="textQuickW">
              <h5 style="font-size: 150%; font-weight: bolder">
                {{ t('experienceJob1') }}
              </h5>
              <p style="font-weight: bolder">
                {{ t('experiencePlace1') }}
              </p>
            </div>
          </div>
        </div><br>
        <div class="jump">
          <div class="row">
            <div class="textQuickW">
              <h6 style="font-weight: bolder">
                {{ t('experiencePosition1') }}
              </h6><br>
            </div>
          </div><br>
          <div class="row">
            <div class="textQuickW" style="border-left: 1px solid white; padding-left: 0.5em">
              {{ t('experienceText1') }}
            </div>
          </div>
        </div>
      </div>
      <div id="job2" class="textField" >
        <div class="rowRepair">
          <div class="colDate">
            <div class="textMontG">
              <p style="writing-mode: vertical-lr">2016 - 2021</p>
            </div>
          </div>
          <div class="colName">
            <div class="textQuickW">
              <h5 style="font-size: 150%; font-weight: bolder">
                {{ t('experienceJob2') }}
              </h5>
              <p style="font-weight: bolder">
                {{ t('experiencePlace2') }}
              </p>
            </div>
          </div>
        </div><br>
        <div class="jump">
          <div class="row">
            <div class="textQuickW">
              <h6 style="font-weight: bolder">
                {{ t('experiencePosition2') }}
              </h6><br>
            </div>
          </div><br>
          <div class="row">
            <div class="textQuickW" style="border-left: 1px solid white; padding-left: 0.5em">
              {{ t('experienceText2') }}
            </div>
          </div>
        </div>
      </div>
      <div id="job3" class="textField" >
        <div class="rowRepair">
          <div class="colDate">
            <div class="textMontG">
              <p style="writing-mode: vertical-lr">2022 - NOW</p>
            </div>
          </div>
          <div class="colName">
            <div class="textQuickW">
              <h5 style="font-size: 150%; font-weight: bolder">
                {{ t('experienceJob3') }}
              </h5>
              <p style="font-weight: bolder">
                {{ t('experiencePlace3') }}
              </p>
            </div>
          </div>
        </div><br>
        <div class="jump">
          <div class="row">
            <div class="textQuickW">
              <h6 style="font-weight: bolder">
                {{ t('experiencePosition3') }}
              </h6><br>
            </div>
          </div><br>
          <div class="row">
            <div class="textMontW" style="border-left: 1px solid white; padding-left: 0.5em">
              <h1>
                {{ t('experienceText3') }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br><br>
  </section>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: "Experience",

  setup() {
    const { t } = useI18n({inheritLocale: true,})
    return { t }
  },

  mounted() {
    let expCounter = 0;
    $('.jobButtonR').click(function () {
      let a = $('#job1').width();
      $('#frameJob').css("scroll-snap-type", "none").ready(function () {
        if (expCounter === 0){
          expCounter += 1;
          $('#frameJob').animate({scrollLeft: a}, 500, function (){
            $('#frameJob').css("scroll-snap-type", "x mandatory");
          });
        }else if (expCounter === 1){
          a = a + a;
          expCounter += 1;
          $('#frameJob').animate({scrollLeft: a}, 500, function (){
            $('#frameJob').css("scroll-snap-type", "x mandatory");
          });
        }else if(expCounter >= 2){
          a = 0;
          expCounter = 0;
          $('#frameJob').animate({scrollLeft: a}, 500, function (){
            $('#frameJob').css("scroll-snap-type", "x mandatory");
          });
        }
      });
    });

    $('.jobButtonL').click(function () {
      let a = $('#job1').width();
      $('#frameJob').css("scroll-snap-type", "none").ready(function () {
        if (expCounter === 0){
          expCounter = 2;
          a = a + a;
          $('#frameJob').animate({scrollLeft: a}, 500, function (){
            $('#frameJob').css("scroll-snap-type", "x mandatory");
          });
        }else if (expCounter === 1){
          expCounter -= 1;
          a = 0;
          $('#frameJob').animate({scrollLeft: a}, 500, function (){
            $('#frameJob').css("scroll-snap-type", "x mandatory");
          });
        }else if(expCounter >= 2){
          expCounter -= 1;
          $('#frameJob').animate({scrollLeft: a}, 500, function (){
            $('#frameJob').css("scroll-snap-type", "x mandatory");
          });
        }
      });
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

#frameJob{
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  scroll-snap-type: x mandatory;
}

#job1,#job2,#job3{
  border: 0;
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0;
  scroll-snap-align: start;
}

#frameJob::-webkit-scrollbar{
  display: none;
}

.rowRepair{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.colDate{
  width: 8.333333%;
  padding-left: 15px;
  padding-right: 15px;
}

.colName{
  width: 91.666667%;
  padding-left: 15px;
  padding-right: 15px;
}

.jobButtonL,.jobButtonR{
  padding: 0.7em;
  border-radius: 100px;
  border: 1px solid #808080;
  position: absolute;
  background-color: #3D4849;
  z-index: 1;
  cursor: pointer;
}

.jobButtonL{
  top: 3.5em;
  right: 7.5em;
}

.jobButtonR{
  top: 3.5em;
  right: 3em;
}

.jobButtonL:hover{
  border: 1px solid #3bba9c;
}

.jobButtonR:hover{
  border: 1px solid #3bba9c;
}

.jobButtonL > img{
  height: 2em;
  width: auto;
  filter: invert(80%);
}

.jobButtonR > img{
  height: 2em;
  width: auto;
  filter: invert(80%);
}

.line{
  border-bottom: 1px solid #808080;
  position: absolute;
  top: 5.2em;
  right: 0;
  width: 9em;
}

.jump{
  margin-left: 3.5em;
  width: 80%;
}

@media only screen and (min-width: 281px) and (max-width: 560px){
  .jobButtonL,.jobButtonR{
    padding: 0.7em;
    border-radius: 100px;
    border: 1px solid #808080;
    position: absolute;
    background-color: #3D4849;
    z-index: 1;
    cursor: pointer;
    display: none;
  }

  .line{
    border-bottom: 1px solid #808080;
    position: absolute;
    top: 5.2em;
    right: 0;
    width: 9em;
    display: none;
  }

  .jump{
    margin-left: 1em;
    width: 80%;
  }

  .rowRepair{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: -8.333333%;
  }

  .colDate{
    width: 16.666667%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .colName{
    width: 83.333333%;
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media only screen and (max-width: 280px){
  .jobButtonL,.jobButtonR{
    padding: 0.7em;
    border-radius: 100px;
    border: 1px solid #808080;
    position: absolute;
    background-color: #3D4849;
    z-index: 1;
    cursor: pointer;
    display: none;
  }

  .line{
    border-bottom: 1px solid #808080;
    position: absolute;
    top: 5.2em;
    right: 0;
    width: 9em;
    display: none;
  }

  .jump{
    margin-left: 1em;
    width: 80%;
  }

  .rowRepair{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: -14.666667%;
  }

  .colDate{
    width: 16.666667%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .colName{
    width: 83.333333%;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>

<i18n>
{
  "sk": {
    "experienceTitle": "SKÚSENOSTI",
    "experienceSub": "PRÁCA",
    "experienceJob1": "Podnikanie",
    "experiencePlace1": "Revúca",
    "experiencePosition1": "Elektrotechnik",
    "experienceText1": "Bytové a domové inštalácie podľa najnovších noriem. Káblovanie podľa výkresovej dokumentácie alebo bez nej. Výroba bytových/domových rozvádzačov s alebo bez dokumentácie. Opravy rôznych malých porúch a diagnostika. Kamerové systémy a LAN/WAN siete. Opravy PC a elektroniky. Inštalácie počítačov atď.",
    "experienceJob2": "Elektro Baláž",
    "experiencePlace2": "Revúca",
    "experiencePosition2": "Servisný technik",
    "experienceText2": "Servis Bioplynové stanice (Agrikomp technológia). Stavby technologických rozvádzačov, ovládania na mieru, výmena výkonových súčastí (do 1000V) a diagnostika porúch(merania atď.) Znalosť PLC Beckhoff, Siemens, Wago. Opravy rôznych technológií výťahy, kogeneračné jednotky, štiepkové kotle atď. Prekládka VN/NN vedení a kioskov. Revízie a prehliadky. Čítanie schém a výkresov samozrejmosťou. Manažment.",
    "experienceJob3": "Názov firmy",
    "experiencePlace3": "BA a okolie",
    "experiencePosition3": "Frontend-Backend & Development",
    "experienceText3": "VOĽNÉ MIESTO"
  },
  "en": {
    "experienceTitle": "EXPERIENCE",
    "experienceSub": "I WORKED",
    "experienceJob1": "Freelance business",
    "experiencePlace1": "Revúca",
    "experiencePosition1": "Electrician engineer",
    "experienceText1": "Residential and domestic electrical installations. Cabling according to drawing documentation or without it. Manufacture of residential and domestic switchboards with or without documentation. Repairs of various small faults and diagnostics. CCTV systems and LAN home network installation and startup. PC repair, PC removal, Win installation, Linux, etc.",
    "experienceJob2": "Elektro Baláž",
    "experiencePlace2": "Revúca",
    "experiencePosition2": "Service Technician",
    "experienceText2": "Biogas plant service (Agrikomp technology). Construction of technological switchboards, custom control, replacement of power components (Max 1000V) and fault diagnostics (measurements, etc.). Knowledge of PLC Beckhoff, Siemens, Wago. Repairs of various technologies like elevators, cranes, cogeneration units, boilers, etc. Transhipment of HV / LV lines and kiosks. Revisions and inspections. Reading drawings and diagrams of course. Management of employees. A complete automatization solutions.",
    "experienceJob3": "Company",
    "experiencePlace3": "Anywhere",
    "experiencePosition3": "Frontend-Backend & Development",
    "experienceText3": "FREE PLACE"
  }
}
</i18n>