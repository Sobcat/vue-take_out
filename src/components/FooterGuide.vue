<template>
  <div class="footer_guide">
    <router-link class="guide_item" to="/msite" :class="{on: '/msite'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </router-link>
     <router-link class="guide_item" to="/search" :class="{on: '/search'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </router-link>
     <router-link class="guide_item" to="/order" :class="{on: '/order'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </router-link>
     <router-link class="guide_item" to="/profile" :class="{on: '/profile'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer_guide {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  .guide_item {
    display: flex;
    flex: 1;
    flex-direction: column; 
    align-items: center;
    margin: 5px;
    text-align: center;
    color: #999;
    &.on {
      color: #02a774;
    }
    span {
      margin-top: 2px;
      margin-bottom: 2px;
      font-size: 12px;
      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>
