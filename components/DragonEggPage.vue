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
      <div class="row" style="margin-top: 50px">
        <div class="col-lg-12">
          <div class="leadership-title text-center">
            <h3 class="title">Choose an egg you like.</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-9">
          <div class="leadership-item mt-30" style="border: 0">
            <div class="egg-container">
              <div style="width:100%;height:auto;position: relative;">
                <img src="/assets/images/egg-bg.jpg" />
                <div class="allCenter egg-bg">
                  <img src="/assets/images/stone-egg.png" style="width: 50%" />
                </div>
              </div> 
              <div class="col-lg-12 text-left mt-30">
                <div class="input-box">
                  <button type="submit" class="main-btn open-approve">
                    Approve
                  </button>
                </div>
                <!-- /.thm-btn contact-one__btn -->
              </div>
              <!-- /.col-lg-12 -->
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-9">
          <div class="leadership-item mt-30" style="border: 0">
            <div class="egg-container">
             <div style="width:100%;height:auto;position: relative;">
                <img src="/assets/images/egg-bg.jpg" />
                <div class="allCenter egg-bg">
                  <img src="/assets/images/sky-egg.png" style="width: 50%" />
                </div>
              </div> 
              <div class="col-lg-12 text-left mt-30">
                <div class="input-box">
                  <button type="submit" class="main-btn open-approve">
                    Approve
                  </button>
                </div>
                <!-- /.thm-btn contact-one__btn -->
              </div>
              <!-- /.col-lg-12 -->
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-9">
          <div class="leadership-item mt-30" style="border: 0">
            <div class="egg-container">
              <div style="width:100%;height:auto;position: relative;">
                <img src="/assets/images/egg-bg.jpg" />
                <div class="allCenter egg-bg">
                  <img src="/assets/images/wood-egg.png" style="width: 50%" />
                </div>
              </div> 
              <div class="col-lg-12 text-left mt-30">
                <div class="input-box">
                  <button type="submit" class="main-btn open-approve">
                    Approve
                  </button>
                </div>
                <!-- /.thm-btn contact-one__btn -->
              </div>
              <!-- /.col-lg-12 -->
            </div>
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
