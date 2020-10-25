<template>
  <div class="msite">
    <HeaderTop title="快点个外卖吧">
      <template v-slot:left>
        <span class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </span>
      </template>
      <template v-slot:right>
        <span class="header_login">
          <router-link to="" class="header_login_text" v-if="!userInfo_id">
            登录|注册
            </router-link>
           <router-link to="" class="header_login_text" v-if="userInfo_id">
             <i class="iconfont icon-person"></i>
             </router-link>
        </span>
      </template>
    </HeaderTop>
    <!-- swiper 轮播 -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: "MSite",
  components: {
    HeaderTop
  },
  data(){
    return {
      userInfo_id: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
