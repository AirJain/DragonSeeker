<!--
 * @Author: your name
 * @Date: 2021-09-27 12:06:16
 * @LastEditTime: 2021-09-28 10:19:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Indutri\pages\index.vue
-->
<template>
  <div>
    <Nav />
    <Slider />
    <ServiceArea />
    <SolutionArea />
    <VideoArea />
    <BuildingArea />
    <BrandArea />
    <ClientArea />
    <FunFactArea />
    <ProjectArea />
    <FaqBrandArea />
    <FaqArea />
    <FutureArea />
    <BlogArea />
    <Footer />
    <div>
      <button @click="connect" v-if="!web3Modal.active">Connect</button>
      <div v-else>
        <button @click="disconnect">disconnect</button>
        <div>{{ web3Modal.account }}</div>
        <div>{{ number }}</div>
        <div>
          <button @click="getBalance">getBalance</button>
          {{ balance }}
        </div>
      </div>
    </div>
    <web3-modal-vue
      ref="web3modal"
      :theme="theme"
      :provider-options="providerOptions"
      cache-provider
    />
  </div>
</template>

<script>
import WalletConnectProvider from "@walletconnect/web3-provider";
// import { web3Modal } from "../config/mixins";
// import Header from "@/components/Header";
// import { mapState } from "vuex";
import { mapState } from "vuex";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import ServiceArea from "../components/ServiceArea";
import SolutionArea from "../components/SolutionArea";
import VideoArea from "../components/VideoArea";
import BuildingArea from "../components/BuildingArea";
import BrandArea from "../components/BrandArea";
import ClientArea from "../components/ClientArea";
import FunFactArea from "../components/FunFactArea";
import ProjectArea from "../components/ProjectArea";
import FaqBrandArea from "../components/FaqBrandArea";
import FaqArea from "../components/FaqArea";
import FutureArea from "../components/FutureArea";
import BlogArea from "../components/BlogArea";
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
    BlogArea,
    FutureArea,
    FaqArea,
    FaqBrandArea,
    ProjectArea,
    FunFactArea,
    ClientArea,
    BrandArea,
    BuildingArea,
    VideoArea,
    SolutionArea,
    ServiceArea,
    Slider,
    Nav, 
  },
  computed: {
    ...mapState(["web3Modal"]),
  },
  data() {
    return {
      theme: "light",
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "-",
          },
        },
      },
      number: 0,
      balance: 0,
    };
  },
  mounted() {
    // this.$nextTick(async () => {
    //   this.number = await this.web3Modal.web3.eth.getBlockNumber();
    // });
    // this.$nextTick(async () => {
    //   const web3modal = this.$refs.web3modal;
    //   this.$store.commit("setWeb3Modal", web3modal);
    //   if (web3modal.cacheProvider) {
    //     console.log(web3modal.cacheProvider);
    //     await this.$store.dispatch("connect");
        
    //     this.subscribeMewBlockHeaders();
    //   }
    // });
  },
  methods: {
     async connect() {
      await this.$store.dispatch("connect");
      this.subscribeMewBlockHeaders();
    },
    async disconnect() { 
      this.web3Modal.web3Modal.clearCachedProvider(); 
    },
    subscribeMewBlockHeaders() {
      debugger
      this.web3Modal.web3.eth.subscribe("newBlockHeaders", (err, block) => {
        this.number = block.number;
      });
    },
    async getBalance() {
      let balance = await this.web3Modal.web3.eth.getBalance(
        this.web3Modal.account
      );

      this.balance = this.web3Modal.web3.utils.fromWei(balance);

      console.log(this.balance);
    },
  },
};
</script>
