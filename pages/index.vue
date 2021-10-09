<!--
 * @Author: your name
 * @Date: 2021-09-29 17:35:20
 * @LastEditTime: 2021-10-09 10:40:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DragonSeeker\pages\index.vue
-->
<template>
  <div>
    <Nav />
    <PageHeader title="Dragon Egg" />
    <!-- <AboutPage />
    <FunFactArea />
    <ClientPage />
    <VideoArea />
    <BrandArea /> -->
    <DragonEggPage />
     <FooterTwo />
    <!-- <ContactArea />  -->
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import AboutPage from "../components/AboutPage";
  import FunFactArea from "../components/FunFactArea";
  import ClientPage from "../components/ClientPage";
  import VideoArea from "../components/VideoArea";
  import BrandArea from "../components/BrandArea";
  import DragonEggPage from "../components/DragonEggPage";
  import ContactArea from "../components/ContactArea";
  export default {
    components: {
      ContactArea,
      DragonEggPage,
      BrandArea,
      VideoArea,
      ClientPage,
      FunFactArea,
      AboutPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Dragon Egg"
      }
    }
  }
</script>
