<!--
 * @Author: your name
 * @Date: 2021-09-29 17:35:20
 * @LastEditTime: 2021-09-30 17:33:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DragonSeeker\pages\farming.vue
-->
<template>
  <div>
    <Nav />
    <PageHeader title="Farmimg" />
    <ContactPage /> 
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ContactPage from "../components/ContactPage"; 
  export default {
    components: { 
      ContactPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Farmimg"
      }
    }
  }
</script>
