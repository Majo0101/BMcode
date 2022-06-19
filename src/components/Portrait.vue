<template>
  <div class="photo" :style="{ backgroundImage: 'url(' + mainPhoto + ')' }"></div>
</template>

<script>
import mainPhoto from '../assets/fotoWeb.jpg';

export default {
  name: "Portrait",

  data(){
    return{
      mainPhoto: mainPhoto
    }
  }

}
</script>

<style scoped>
.photo{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40%;
  background-size: cover;
  background-position: center top;
}

@media only screen and (min-width: 780px) and (max-width: 1023px){
  .photo{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 50em;
    background-size: cover;
    background-position: center top;
  }
}

@media only screen and (min-width: 560px) and (max-width: 780px){
  .photo{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 40em;
    background-size: cover;
    background-position: center top;
  }
}

@media only screen and (max-width: 560px){
  .photo{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 30em;
    background-size: cover;
    background-position: center top;
  }
}
</style>
