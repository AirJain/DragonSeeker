<template>
  <div>
    <Nav />
    <PageHeader title="Dragon Egg" />
    <!-- <AboutPage />
    <FunFactArea />
    <ClientPage />
    <VideoArea />
    <BrandArea /> -->
    <LeadershipPage />
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
  import LeadershipPage from "../components/LeadershipPage";
  import ContactArea from "../components/ContactArea";
  export default {
    components: {
      ContactArea,
      LeadershipPage,
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
