<template>
  <div class="loadingGrey">
    <img src=".././assets/load.gif" alt="Loading"></div>
  <div class="loadingGreen"></div>
</template>

<script>
export default {
  name: "Loading",

  mounted() {
    $(document).ready(function (){
      $('.loadingGrey').delay(2000).animate({height: 'toggle'});
      $('.loadingGreen').delay(2300).animate({height: 'toggle'});
    })
  }

}
</script>

<style scoped>
.loadingGrey{
  background-color: #3D4849;
  height: 100vh;
  width: 100%;
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center
}

.loadingGrey > img{
  height: 7vh;
  width: auto;
}

.loadingGreen{
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #3bba9c;
  z-index: 9998
}
</style>