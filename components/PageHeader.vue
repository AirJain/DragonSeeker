<!--
 * @Author: your name
 * @Date: 2021-09-29 17:35:20
 * @LastEditTime: 2021-10-08 17:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DragonSeeker\components\PageHeader.vue
-->
<template>
  <div class="page-title-area bg_cover pt-120;" >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-title-item text-center">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><nuxt-link to="/">DSC</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
              </ol>
            </nav>
            <h3 class="title">{{ title }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="page-shadow">
      <!-- <img src="/assets/images/page-shadow.png" alt=""> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      title: {
        type: String
      }
    }

  }
</script>

<style scoped>

</style>
