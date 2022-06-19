<template>
  <div class="myCircle">
    <div>{{t('firstName')}}</div>
    <div>{{t('lastName')}}</div>
  </div>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: "MyName",

  setup() {
    const { t } = useI18n({inheritLocale: true,})
    return { t }
  }

}
</script>

<style scoped>
.myCircle{
  margin-left: -20vh;
  background-color: #3D4849;
  border-radius: 500px;
  margin-top: 30vh;
  padding-left: 1vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  position: absolute;
  top: 0;
  left: 40%;
  z-index: 1;
}

.myCircle > div{
  color: white;
  font-family: 'Montserrat', sans-serif;
  margin: 0.2em;
  font-size: 7vh;
}

@media only screen and (min-width: 1281px) and (max-width: 1536px){
  .myCircle{
    margin-left: -20vh;
    background-color: #3D4849;
    border-radius: 500px;
    margin-top: 25vh;
    padding-left: 1vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    position: absolute;
    top: 0;
    left: 40%;
    z-index: 1;
  }

  .myCircle > div{
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin: 0.2em;
    font-size: 7vh;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1280px){
  .myCircle{
    margin-left: -20vh;
    background-color: #3D4849;
    border-radius: 500px;
    margin-top: 19vh;
    padding-left: 1vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    position: absolute;
    top: 0;
    left: 40%;
    z-index: 1;
  }

  .myCircle > div{
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin: 0.2em;
    font-size: 7vh;
  }
}

@media only screen and (width: 1024px) and (max-height: 650px){

  .myCircle{
    margin-left: -20vh;
    background-color: #3D4849;
    border-radius: 500px;
    margin-top: 14vh;
    padding-left: 1vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    position: absolute;
    top: 0;
    left: 40%;
    z-index: 1;
  }

  .myCircle > div{
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin: 0.2em;
    font-size: 7vh;
  }
}

@media only screen and (min-width: 780px) and (max-width: 1023px){
  .myCircle{
    background-color: #3D4849;
    border-radius: 1000px 1000px 0 0;
    border-bottom: 1px solid #808080;

    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;

    position: absolute;
    top: 45em;
    left: 0;
    right: 0;
    z-index: 1;
    height: 11em;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .myCircle > div{
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin: 0.2em;
    font-size: 3em;
  }
}

@media only screen and (min-width: 560px) and (max-width: 780px){

  .myCircle{
    background-color: #3D4849;
    border-radius: 1000px 1000px 0 0;
    border-bottom: 1px solid #808080;

    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;

    position: absolute;
    top: 35em;
    left: 0;
    right: 0;
    z-index: 1;
    height: 11em;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .myCircle > div{
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin: 0.2em;
    font-size: 3em;
  }
}

@media only screen and (min-width: 281px) and (max-width: 560px){
  .myCircle{
    background-color: #3D4849;
    border-radius: 1000px 1000px 0 0;
    border-bottom: 1px solid #808080;

    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
    padding-top: 1em;
    padding-bottom: 0;

    position: absolute;
    top: 25em;
    left: 0;
    right: 0;
    z-index: 1;
    height: 11em;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .myCircle > div{
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin: 0.2em;
    font-size: 3em;
  }
}

@media only screen and (max-width: 280px){
  .myCircle{
    background-color: #3D4849;
    border-radius: 1000px 1000px 0 0;
    border-bottom: 1px solid #808080;

    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
    padding-top: 1em;
    padding-bottom: 0;

    position: absolute;
    top: 25em;
    left: 0;
    right: 0;
    z-index: 1;
    height: 11em;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .myCircle > div{
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin: 0.2em;
    font-size: 2.5em;
  }
}
</style>

<i18n>
{
  "sk": {
    "firstName": "MARIÁN",
    "lastName": "BODNÁR"

  },
  "en": {
    "firstName": "MARIAN",
    "lastName": "BODNAR"
  }
}
</i18n>