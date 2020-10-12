<template>
  <div class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    title: String
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 45px;
    color: #fff;
    background-color: #02a774;
    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      font-size: 20px;
      text-align: center;
      transform: translate(-50%,-50%);
      .header_title_text {

      }
    }
    .header_search {
      position: absolute;
      left: 15px;
      top: 50%;
      width: 10%;
      height: 50%;
      transform: translateY(-50%);
      .iconfont {
        font-size: 22px;
      }
    }
    .header_login {
      position: absolute;
      right: 15px;
      top: 50%;
      font-size: 14px;
      transform: translateY(-50%);
      .header_login_text {
        color: #fff;
      }
    }
  }
</style>
