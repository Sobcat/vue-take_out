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
  // name: 'HelloWorld',
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
    background-color: #02a774;
  }
</style>
