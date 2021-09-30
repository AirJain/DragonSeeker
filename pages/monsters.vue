<template>
  <div>
    <Nav />
    <PageHeader title="Monsters" />
    <MonstersPage /> 
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import MonstersPage from "../components/MonstersPage";
  import ContactArea from "../components/ContactArea";
  export default {
    components: {
      ContactArea,
      MonstersPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Monsters"
      }
    }
  }
</script>
