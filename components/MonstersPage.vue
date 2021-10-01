<!--
 * @Author: your name
 * @Date: 2021-09-29 17:35:20
 * @LastEditTime: 2021-09-30 14:26:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DragonSeeker\components\LeadershipPage.vue
-->
<template>
  <section class="leadership-area about-leadership">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="leadership-title text-center">
            <h3 class="title">Coming Soon.</h3>
          </div>
        </div>
      </div>
     
    </div>
    <div
      class="shape animated wow fadeInRight"
      data-wow-duration="1500ms"
      data-wow-delay="0ms"
    >
      <img src="/assets/images/shape/shape-13.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "LeadershipPage",
};
</script>

<style scoped>
.allCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.egg-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.egg-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.open-approve {
  width: 100%;
  border-radius: 20px;
  line-height: 35px;
}
</style>
