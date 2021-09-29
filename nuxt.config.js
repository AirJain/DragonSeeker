/*
 * @Author: your name
 * @Date: 2021-09-27 12:06:16
 * @LastEditTime: 2021-09-27 17:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Indutri\nuxt.config.js
 */

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'shortcut icon', sizes:'180x180', type: 'image/png', href: '/assets/images/favicon.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/animate.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/glightbox/glightbox.min.css" },
      { rel: "stylesheet", href: "/assets/css/fontawesome-all.min.css" },
      { rel: "stylesheet", href: "/assets/css/flaticon.css" },
      { rel: "stylesheet", href: "/assets/css/default.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" }
    ],

    script: [
      { src: "/assets/plugins/glightbox/glightbox.min.js", body: true },
      { src: "/assets/plugins/accordion/accordion.min.js", body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff5316', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: 'plugins/owl.js', ssr: false},
    {src: 'plugins/web3modal-vue.js', mode: 'client'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
	  transpile: ['web3modal-vue'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}