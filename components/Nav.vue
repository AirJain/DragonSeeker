<template>
  <!-- https://t.me/PancakeSwap_CN -->
  <!-- https://t.me/pancakeswap -->
  <header class="header-area">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="header-top-items d-flex"
            >
              <div style="padding: 10px 85px 10px 0;" class="logo"> 

              
                <a href="/"><img style="width:12vh" src="/assets/images/DSClogo.png" alt="" /></a>
              </div>
              <div class="header-top-info d-none d-md-block">
                <ul>
                  <li>
                    <!-- <i class="fa-telegram"></i> -->
                    <img class="myapps" src="/assets/images/twitter.png" />
                    <span>twitter</span>
                    <a target="_blank" href="https://twitter.com/pancakeswap"
                      >https://t.me/pancakeswap</a
                    >
                  </li>
                  <li>
                    <img class="myapps" src="/assets/images/telegram.png" />
                    <span>telegram</span>
                    <a target="_blank" href="https://t.me/PancakeSwap_CN"
                      >https://twitter.com/pancakeswap</a
                    >
                  </li>
                  <li>
                    <img class="myapps" src="/assets/images/facebook.png" />
                    <span>facebook</span>
                    <a target="_blank" href="#">66 Broklyn New Street, USA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header">
      <div  style="width:100%;">
        <div style="width:100%;">
          <div class="col-lg-12" style="width:100%;padding:0;background: #121b2b;">
            <div class="main-header-item">
              <div class="main-header-menus d-flex">
                <div  style="margin-left:30px" class="toggle-btn ml-30 canvas_open">
                  <i
                    @click="mobileToggle = !mobileToggle"
                    class="fa fa-bars"
                  ></i>
                </div>
                <div class="header-menu d-none d-lg-block" style="justify-content: flex-start;display: flex;align-items: center;">
                  <ul>
                    <!-- <li>
                      <a class="active" href="#">My Pet</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/">Home 1</nuxt-link></li>
                        <li><nuxt-link to="/index-2">Home 2</nuxt-link></li>
                        <li><nuxt-link to="/index-3">Home 3</nuxt-link></li>
                        <li>
                          <a href="#">Header Versions</a>
                          <ul class="sub-menu">
                            <li>
                              <nuxt-link to="/">Header Style 1</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/index-2"
                                >Header Style 2</nuxt-link
                              >
                            </li>
                            <li>
                              <nuxt-link to="/index-3"
                                >Header Style 3</nuxt-link
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li> -->
                    <!-- <li>
                      <a href="#">Pages</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/about">About</nuxt-link></li>
                        <li><nuxt-link to="/our-team">Our Team</nuxt-link></li>
                        <li>
                          <nuxt-link to="/our-history">Our history</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/testimonials">testimonials</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Services</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/services">Services</nuxt-link></li>
                        <li>
                          <nuxt-link to="/single-service"
                            >single service</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Recent Projects</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
                        <li>
                          <nuxt-link to="/single-project"
                            >single project</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/posts">posts</nuxt-link></li>
                        <li>
                          <nuxt-link to="/single-post">single post</nuxt-link>
                        </li>
                      </ul>
                    </li> -->
                    <li><nuxt-link to="/">Dragon Egg</nuxt-link></li>
                    <li>
                      <nuxt-link to="/marketplace">MarketPlace</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/mydragon">My Dragon</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/monsters">Monsters</nuxt-link>
                    </li>
                    <li><nuxt-link to="/farming">Farming</nuxt-link></li>
                  </ul>
                </div>
                <div class="header-btn" style=" flex:1;justify-content: flex-end;display: flex;align-items: center; ">
                  <a style="border:0;" @click="checkConnected()" href="#"> {{ showAddress }}</a>
                  <ul v-show="logOutVis" class="sub-menu">
                    <li @click="logOut()"><a class="dis-a">Log Out</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`"
            >
              <div class="canvas_close">
                <a
                  @click="mobileToggle = !mobileToggle"
                  href="javascript:void(0)"
                  ><i class="fa fa-times"></i
                ></a>
              </div>
              <div class="header-social">
                <ul class="text-center">
                  <li>
                    <a target="_blank" href="https://t.me/PancakeSwap_CN"
                      ><i class="fa fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/pancakeswap"
                      ><i class="fa fa-twitter"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div id="menu" class="text-left">
                <ul class="offcanvas_main_menu">
                  <li><nuxt-link to="/">Dragon Egg</nuxt-link></li>
                  <li><nuxt-link to="/marketplace">MarketPlace</nuxt-link></li>
                  <li>
                    <nuxt-link to="/mydragon">My Dragon</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/monsters">Monsters</nuxt-link>
                  </li>
                  <li><nuxt-link to="/farming">Farming</nuxt-link></li>

                  <!-- <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">Home</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/">Home 1</nuxt-link></li>
                      <li><nuxt-link to="/index-2">Home 2</nuxt-link></li>
                      <li><nuxt-link to="/index-3">Home 3</nuxt-link></li>
                      <li class="menu-item-has-children">
                        <span class="menu-expand"
                          ><i class="fa fa-angle-down"></i
                        ></span>
                        <a href="#">Header Versions</a>
                        <ul class="sub-menu">
                          <li><nuxt-link to="/">Header Style 1r</nuxt-link></li>
                          <li>
                            <nuxt-link to="/index-2">Header Style 2</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/index-3">Header Style 3</nuxt-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">Pages</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/about">About</nuxt-link></li>
                      <li><nuxt-link to="/our-team">Our Team</nuxt-link></li>
                      <li>
                        <nuxt-link to="/our-history">Our history</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/testimonials">testimonials</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">Services</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/services">Services</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-service"
                          >single service</nuxt-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">Recent Projects</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/projects">Projects</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-project"
                          >single project</nuxt-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <span class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/posts">posts</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-post">single post</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <a href="#">Contact</a>
                  </li> -->
                </ul>
              </div>
              <div class="offcanvas_footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <web3-modal-vue
      ref="web3modal"
      :theme="theme"
      :provider-options="providerOptions"
      cache-provider
    />
  </header>
</template>

<script>
var that;
import WalletConnectProvider from "@walletconnect/web3-provider";
import { mapState } from "vuex";
export default {
  name: "Nav",
  computed: {
    ...mapState(["web3Modal"]),
  },
  data() {
    return {
      mobileToggle: false,
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
      connected: false,
      address: "",
      showAddress: "Connect",
      logOutVis: false,
    };
  },
  mounted() {
    that = this;
    that.connect();
  },
  methods: {
    checkConnected() {
      if (that.connected == false) {
        that.connect();
      } else {
        that.showUl();
      }
    },
    async connect() {
      this.$nextTick(async () => {
        const web3modal = this.$refs.web3modal;
        this.$store.commit("setWeb3Modal", web3modal);
        if (web3modal.cacheProvider) {
          await this.$store.dispatch("connect");
          that.setState(true, that.web3Modal.account);
          this.subscribeMewBlockHeaders();
        }
      });
    },
    async disconnectWallet() {
      this.web3Modal.web3Modal.clearCachedProvider();
      that.setState(false, "connect");
    },
    subscribeMewBlockHeaders() {
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
    setState(isConnect, address) {
      that.connected = isConnect;
      that.address = address;
      var start = that.address.substring(0, 2);
      var end = that.address.substring(
        that.address.length - 4,
        that.address.length
      );
      that.showAddress = start + "..." + end;
    },
    showUl() {
      that.logOutVis = true;
    },
    logOut() {
      that.disconnectWallet = true;
      that.logOutVis = false;
      that.showAddress = "Connect";
      that.connected = false;
    },
  },
};
</script>

<style scoped>
.myapps {
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: #ff5316;
  width: 40px;
}
.sub-menu {
  position: absolute; 
  top: 110%;
  width: 200px;
  background-color: #fff;
  /* opacity: 0;
  visibility: hidden; */
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  z-index: 99;
  -webkit-box-shadow: 0 2px 6px 0 rgb(0 0 0 / 16%);
  -moz-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 16%);
  border-top: 4px solid #ff5316;
  padding: 0;
}

.dis-a {
  display: block;
  padding: 10px 24px !important;
  margin: 0 !important;
  position: relative !important;
  color: #222222 !important;
  transition: all 0.3s ease-out 0s !important;
  border-radius: 0;
  /* margin: 0 0; */
  line-height: 30px !important;
  border-top: 1px solid #ff5316;
  background: #ffffff !important;
  font-weight: normal !important;
  letter-spacing: 0 !important;
  border-right: none !important;
}
</style>
