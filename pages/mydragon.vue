<template>
  <div>
    <Nav />
    <PageHeader title="My Dragon" />
    <HistoryPage />
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import HistoryPage from "../components/HistoryPage";
  export default {
    components: {
      HistoryPage,
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
