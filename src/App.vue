<template>
  <div id="app">
    <FooterGuide/>
    <router-view/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide'
  export default {
    components: {
      FooterGuide
    },
    data() {
      return {
     
      }
    },
    computed: {
      // reversedMsg: function(){
      //   return this.msg.split('').reverse().join('');
      // }
    },
    methods: {
      // reversedMsg: function(){
      //   return this.msg.split('').reverse().join('');
      // }
      // ab: function(){
      //   this.bool = !this.bool;
      // },
      // but1(event){              
      //   alert(event.target.innerText);
      // },
      // but2(msg){
      //   alert(msg);
      // },
      // but3(msg,$event){
      //   alert(msg+$event.target.innerText);
      // }
    },
    watch: {

    },
    mounted() {
      console.log(this);
    }
  }
</script>

<style lang="less">
// @import './assets/css/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
