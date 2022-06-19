<template>
  <section id="contact"><br><br>
    <div class="textField">
      <div class="title">
        <p>
          {{ t('contactTitle') }}
        </p>
      </div>
    </div>
    <div class="textField">
      <div class="subTitle">
        <p>
          {{ t('contactSub') }}
        </p>
      </div>
    </div><br><br>
    <div class="textField">
      <div class="row">
        <div class="col-md-6">
          <div class="leftHeight">
            <form id="contact-form" name="contact-form" method="post" action="mail.php">
              <div class="form">
                <label for="name">&nbsp;{{ t('contactFormName') }}&nbsp;<span
                    style="color: #3bba9c;">_&nbsp;</span></label><br>
                <input type="text" id="name" name="name" value=""><br>
              </div><br>
              <div class="form">
                <label for="email">&nbsp;{{ t('contactFormEmail') }}&nbsp;<span style="color: #3bba9c">_&nbsp;</span></label><br>
                <input type="text" id="email" name="email" value=""><br>
              </div><br>
              <div class="form">
                <label id="labelMessage" for="message">&nbsp;{{ t('contactFormMess') }}&nbsp;<span style="color: #3bba9c">_&nbsp;</span></label><br>
                <textarea id="message" name="message" maxlength="6000" placeholder=""></textarea>
              </div><br>
              <div class="form">
                <label for="captcha">&nbsp;<span id="captchaLabel">{{ Captcha }}</span>&nbsp;<span
                    style="color: #3bba9c;">_&nbsp;</span></label><br>
                <input type="text" id="captcha" name="captcha" value=""><br>
              </div>
            </form><br><br>
            <div class="submit">
              <button id="submit" type="submit" value="submit" @click="Check()" >{{ t('contactFormSubmit') }}</button>
            </div>
          </div><br><br>
        </div>
        <div class="col-md-6"><br>
            <div class="textField" id="contactText"><br>
              <div class="textMontW">
                <p style="font-size: 150%">Marian Bodnar</p>
              </div>
              <div class="textMontG">
                <p>BMCODE</p>
              </div>
              <br>
              <div class="textQuickW">
                <p><span class="textQuickG" id="vek">{{ t('contactAge') }}</span>&nbsp;&nbsp;&nbsp;31</p>
                <p><span class="textQuickG">{{ t('contactResident') }}</span>&nbsp;&nbsp;&nbsp;Slovensko</p>
                <p><span class="textQuickG">Freelance:</span>&nbsp;&nbsp;&nbsp;yes</p>
                <p><span class="textQuickG">{{ t('contactAddress') }}</span>&nbsp;&nbsp;&nbsp;Bratislava V</p>
                <p><span class="textQuickG">{{ t('contactPhone') }}</span>&nbsp;&nbsp;&nbsp;+421 950 596 214</p>
                <p style="word-break: break-all"><span class="textQuickG">Email:</span>&nbsp;&nbsp;&nbsp;bodnar.marian@bmcode.sk</p>
              </div>
              <br>
              <div class="textField" style="justify-content: center; width: 100%">
                <div class="signature">
                  <img src="../../assets/brandSignature.png" alt="signature" style="width: 90%">
                </div>
              </div>
              <br>
            </div>
        </div>
      </div>
    </div>
    <br><br>
  </section>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: "Contact",

  data(){
    return{
      number: '',
      pageLocale: ''
    }
  },

  setup() {
    const { locale, t } = useI18n({inheritLocale: true,})
    return { locale, t }
  },

  computed: {
    Captcha: function () {
      let pageLocale = this.locale
      this.number = Math.floor(10 * Math.random());
      this.pageLocale = pageLocale;
      const arrSK = ["1. mesiac slovom:", "Hlavné mesto SR:", "2. mesiac slovom:", "Hlavné mesto DE:", "3. mesiac slovom:", "Hlavné mesto AT:", "4. mesiac slovom:", "Hlavné mesto HU:", "5. mesiac slovom:", "Hlavné mesto PL:", "6. mesiac slovom:"];
      const arrEN = ["1. month (word):", "The capital of EN:", "2. month (word):", "The capital of DE:", "3. month (word):", "The capital of FI:", "8. month (word):", "The capital of ES:", "9. month (word):", "The capital of NO:", "10. month (word):"];
      if (pageLocale === 'sk'){
        return arrSK[this.number];
      }else{
        return arrEN[this.number];
      }
    }
  },

  methods:{
    Check: function (){

      let switcherLang = true;
      switcherLang = this.pageLocale === 'sk';

      const name = document.getElementById("name").value;
      if ("" === name){
        return document.getElementById("name").style.borderColor = "red";
      }else{
        document.getElementById("name").style.borderColor = "#808080";
      }

      const email = document.getElementById("email").value;
      if ("" === email){
        return document.getElementById("email").style.borderColor = "red";
      }else{
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
          return document.getElementById("email").style.borderColor = "red";
        }
        document.getElementById("email").style.borderColor = "#808080";
      }

      const message = document.getElementById("message").value;
      if ("" === message){
        return document.getElementById("message").style.borderColor = "red";
      }else{
        document.getElementById("message").style.borderColor = "#808080";
      }

      if("" === document.getElementById("captcha").value){
        return document.getElementById("captcha").style.borderColor = "red";
      }

      const arrSK = ["januar", "bratislava", "februar", "berlin", "marec", "vieden", "april", "budapest", "maj", "varsava", "jun"];
      const arrEN = ["january", "london", "february", "berlin", "march", "helsinki", "august", "madrid", "september", "oslo", "october"];
      let captcha = document.getElementById("captcha").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (switcherLang){
        if (captcha === arrSK[this.number]){
          document.getElementById("captcha").style.borderColor = "#808080";
        }else{
          return document.getElementById("captcha").style.borderColor = "red";
        }
      }else{
        if (captcha === arrEN[this.number]){
          document.getElementById("captcha").style.borderColor = "#808080";
        }else{
           return document.getElementById("captcha").style.borderColor = "red";
        }
      }

      document.getElementById("submit").innerHTML = "Sending...";
      this.number = Math.floor(10 * Math.random());

      let formData = {
            name: name,
            email: email,
            subject: captcha,
            message: message
          }

      $.ajax({
        url: "mail.php",
        type: "POST",
        data: formData,
        success: function(e, t, a) {
          if (switcherLang){
            document.getElementById("submit").innerHTML = "Odoslané";
          }else{
            document.getElementById("submit").innerHTML = "Sent!";
          }
          document.getElementById("contact-form").reset();
        },
        error: function(e, t, a) {
          if (switcherLang){
            document.getElementById("submit").innerHTML = "Chyba!";
          }else{
            document.getElementById("submit").innerHTML = "Error!";
          }
        }
      });
    }
  },

  mounted() {
    $(document).ready(function() {
      $("#contactText").css("height", ($(".leftHeight").height() - 21));
    });

    $(window).resize(function () {
      $("#contactText").css("height", ($(".leftHeight").height() - 21));
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

.form{
  width: 90%;
  margin: 0 auto;
  position: relative;
}

label{
  position: absolute;
  top: 10%;
  left: 15%;
  color: white;
  background-color: #3D4849;
  font-family: 'Quicksand', sans-serif;
}

input{
  background: none;
  border-radius: 50px;
  height: 3.5em;
  width: 100%;
  border: 1px solid #808080;
  color: white;
}

input[type=text]{
  box-sizing: border-box;
  padding-left: 5%;
  outline: none;
}

input[type=text]:focus{
  border: 1px solid #3bba9c;
  background-color: #3D4849;
}

#message{
  height: 15em;
  width: 100%;
  background-color: #3D4849;
  border-radius: 50px;
  border: 1px solid #808080;
  overflow: auto;
  resize: none;
  padding: 20px;
}

#message:focus{
  outline: none;
  border: 1px solid #3bba9c;
  background-color: #3D4849;
  color: white;
}

#labelMessage{
  position: absolute;
  top: 3%;
  left: 15%;
  color: white;
  background-color: #3D4849;
}

#submit{
  border-radius: 50px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid #808080;
  height: 3.5em;
  background: none;
  width: 90%;
}

#submit:active{
  border: 1px solid #3bba9c;
  color: #3bba9c;
}

.submit{
  width: 100%;
  display: flex;
  justify-content: center;
}

.signature{
  width: 80%;
  margin: 0 auto;
}

#contactText{
  border-radius: 50px;
  border: 1px solid #808080;
  width: 90%;
  margin: 0 auto;
  padding: 0.8em;
}

.leftHeight{
  height: auto;
}
</style>

<i18n>
{
  "sk": {
    "contactTitle": "KONTAKT",
    "contactSub": "NAPÍŠ MI",
    "contactFormName": "Celé meno:",
    "contactFormEmail": "Email:",
    "contactFormMess": "Správa:",
    "contactFormSubmit": "ODOSLAŤ",
    "contactAge": "Vek:",
    "contactResident": "Rezident:",
    "contactAddress": "Adresa:",
    "contactPhone": "Telefón:"
  },
  "en": {
    "contactTitle": "CONTACT",
    "contactSub": "LET'S TALK",
    "contactFormName": "Full name:",
    "contactFormEmail": "Email:",
    "contactFormMess": "Message:",
    "contactFormSubmit": "SEND",
    "contactAge": "Age:",
    "contactResident": "Resident:",
    "contactAddress": "Address:",
    "contactPhone": "Phone:"
  }
}
</i18n>