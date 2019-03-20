<template>
  <div>
    <HeaderGuide/>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
import HeaderGuide from './components/HeaderGuide/HeaderGuide'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components:{
    HeaderGuide,
    FooterGuide
  }
}


</script>
