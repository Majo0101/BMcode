<template>
<div class="linkBar">
  <div class="logos">
    <a href="https://www.linkedin.com/in/majo1991">
      <div class="logo">
        <img src="../assets/linkedin.svg" alt="LinkedIn">
      </div>
    </a>
    <a href="https://github.com/Majo0101">
      <div class="logo">
        <img src="../assets/github.svg" alt="GitHub">
      </div>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100016839404002">
      <div class="logo">
        <img src="../assets/facebook.svg" alt="Facebook">
      </div>
    </a>
    <a href="https://www.ktopomozeukrajine.sk/">
      <div class="logo">
        <img src="../assets/ukraine.svg" alt="WhatsApp" style="width: 2em; height: 2em; filter: invert(0%)">
      </div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "LinkBar",
}
</script>

<style scoped>
.linkBar{
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  width: 5em;
  background-color: #3D4849;
  border-left: 1px solid #808080;
  justify-content: center;
}

.logos{
  position: fixed;
  bottom: 1em;
}

.logo{
  display: flex;
  border-radius: 50px;
  border: 1px solid #808080;
  padding: 0.7em;
  margin-bottom: 0.5rem;
}

.logo:hover{
  border: 1px solid #3bba9c;
}

.logo > img{
  height: 2em;
  width: auto;
  filter: invert(80%);
}

@media only screen and (min-width: 780px) and (max-width: 1023px){
  .linkBar{
    position: absolute;
    top: 56em;
    right: 0;
    left: 0;
    bottom: unset;
    width: 100%;
    background-color: #3D4849;
    border-left: none;
    border-bottom: 1px solid #808080;
    display: flex;
    height: 4.5em;
    justify-content: center;
  }

  .logos{
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo{
    display: flex;
    border-radius: 50px;
    border: 1px solid #808080;
    padding: 0.7em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0;
  }
}

@media only screen and (min-width: 560px) and (max-width: 780px){
  .linkBar{
    position: absolute;
    top: 46em;
    right: 0;
    left: 0;
    bottom: unset;
    width: 100%;
    background-color: #3D4849;
    border-left: none;
    border-bottom: 1px solid #808080;
    display: flex;
    height: 4.5em;
    justify-content: center;
  }

  .logos{
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo{
    display: flex;
    border-radius: 50px;
    border: 1px solid #808080;
    padding: 0.7em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 560px){
  .linkBar{
    position: absolute;
    top: 36em;
    right: 0;
    left: 0;
    bottom: unset;
    width: 100%;
    background-color: #3D4849;
    border-left: none;
    border-bottom: 1px solid #808080;
    display: flex;
    height: 4.5em;
    justify-content: center;
  }

  .logos{
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo{
    display: flex;
    border-radius: 50px;
    border: 1px solid #808080;
    padding: 0.7em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0;
  }
}
</style>