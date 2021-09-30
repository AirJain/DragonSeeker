<!--
 * @Author: your name
 * @Date: 2021-09-29 17:35:20
 * @LastEditTime: 2021-09-30 17:58:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \DragonSeeker\pages\mydragon.vue
-->
<template>
  <div>
    <Nav />
    <PageHeader title="My Dragon" />
    <MyDragonPage />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import MyDragonPage from "../components/MyDragonPage";
  export default {
    components: {
      MyDragonPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Indutri | Our History"
      }
    }
  }
</script>
