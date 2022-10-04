<template>
  <Loading/>
  <NavBar/>
  <Portrait/>
  <MyName/>
  <Base/>
  <LinkBar/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Portrait from './components/Portrait.vue'
import Base from './components/Base.vue'
import LinkBar from './components/LinkBar.vue'
import MyName from "./components/MyName.vue";
import Loading from "./components/Loading.vue";

export default {
  name: 'BMcode',
  components: {
    NavBar,
    Portrait,
    Base,
    LinkBar,
    MyName,
    Loading
  }
}
</script>

<style>
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active{
  -webkit-box-shadow: 0 0 0 40px #3D4849 inset !important;
}

input:-webkit-autofill{
  -webkit-text-fill-color: white !important;
}

/*GLOBAL CSS*/
body{
  background-color: #3D4849;
}

.space{
  height: 21px;
  width: 100%;
}

.textQuickW{
  color: white;
  font-family: 'Quicksand', sans-serif;
}

.textQuickG{
  color: #3bba9c;
  font-family: 'Quicksand', sans-serif;
}

.textQuickWBolder{
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 150%;
  font-weight: bolder;
}

.textMontW{
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.textMontG{
  color: #3bba9c;
  font-family: 'Montserrat', sans-serif;
}

.button{
  padding: 0.5em 0.5em;
  border: 1px solid white;
  width: auto;
  display: flex;
  border-radius: 50px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
}

.button:hover{
  color: #3bba9c;
  border: 1px solid #3bba9c;
}

/*Must be resized*/

.title{
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5em;
}

.title > p{
  padding: 0;
  margin: 0.2em 0;
}

.subTitle{
  color: #3bba9c;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1em;
}

.textField{
  margin-left: 5%;
  width: 78%;
}

@media only screen and (min-width: 1281px) and (max-width: 1600px){

  .textField{
    margin-left: 5%;
    width: 90%;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1280px){
  .textField{
    margin-left: 3%;
    width: 94%;
  }
}

@media only screen and (min-width: 780px) and (max-width: 1023px){
  .textField{
    margin-left: 5%;
    width: 80%;
  }
}

@media only screen and (min-width: 560px) and (max-width: 780px){
  .textField{
    margin-left: 5%;
    width: 90%;
  }
}

@media only screen and (min-width: 281px) and (max-width: 560px){
  .textField{
    margin-left: 5%;
    width: 90%;
  }
}

@media only screen and (max-width: 280px){
  .textField{
    margin-left: 3%;
    width: 94%;
  }

  .title{
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 2em;
  }
}


</style>