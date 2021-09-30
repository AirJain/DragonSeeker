<!--
 * @Author: your name
 * @Date: 2021-09-29 17:35:20
 * @LastEditTime: 2021-09-30 17:56:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \DragonSeeker\pages\marketplace.vue
-->
<template>
  <div>
    <Nav />
    <PageHeader title="MarketPlace" />
    <MarketplacePage />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import MarketplacePage from "../components/MarketplacePage";
  export default {
    components: {
      MarketplacePage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "MarketPlace"
      }
    }
  }
</script>
