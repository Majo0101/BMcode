<template>
  <div class="baseContainer">
    <Prolog/>
    <AboutMe/>
    <Experience/>
    <Education/>
    <Skill/>
    <CircleCharts/>
    <Gallery/>
    <Game/>
    <Other/>
    <Contact/>
    <Copyright/>
  </div>
</template>

<script>
import Prolog from "./baseComponents/Prolog.vue";
import AboutMe from "./baseComponents/AboutMe.vue";
import Experience from "./baseComponents/Experience.vue";
import Education from "./baseComponents/Education.vue";
import Skill from "./baseComponents/Skill.vue";
import Gallery from "./baseComponents/Gallery.vue";
import Game from "./baseComponents/Game.vue";
import Other from "./baseComponents/Other.vue";
import Contact from "./baseComponents/Contact.vue";
import Copyright from "./baseComponents/Copyright.vue";
import CircleCharts from "./baseComponents/CircleCharts.vue";

export default {
  name: "Base",
  components: {
    Prolog,
    AboutMe,
    Experience,
    Education,
    Skill,
    CircleCharts,
    Gallery,
    Game,
    Other,
    Contact,
    Copyright
  }
}
</script>

<style scoped>
.baseContainer{
  position: absolute;
  height: auto;
  right: 5em;
  left: 40%;
  top: 0;
  background-color: #3D4849;
}

@media only screen and (min-width: 780px) and (max-width: 1023px){
  .baseContainer{
    position: absolute;
    right: 0;
    left: 0;
    top: 60.5em;
    height: auto;
    background-color: #3D4849;
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 560px) and (max-width: 780px){
  .baseContainer{
    position: absolute;
    right: 0;
    left: 0;
    top: 50.5em;
    height: auto;
    background-color: #3D4849;
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 560px){
  .baseContainer{
    position: absolute;
    right: 0;
    left: 0;
    top: 40.5em;
    height: auto;
    background-color: #3D4849;
    display: flex;
    flex-direction: column;
  }
}
</style>