<template>
  <div>
    <HeaderGuide/>
    <router-view style="margin-top:100px;"/>
    <Slidebar/>
    <FooterGuide/>
  </div>
</template>

<script>
import HeaderGuide from './components/HeaderGuide/HeaderGuide'
import FooterGuide from './components/FooterGuide/FooterGuide'
import Slidebar from './components/Slidebar/Slidebar'
export default {
  components:{
    HeaderGuide,
    FooterGuide,
    Slidebar
  }
}


</script>
