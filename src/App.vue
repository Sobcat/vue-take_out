<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> {{title}} </router-link> |
      <router-link to="/about">About</router-link>
      <span v-html="html_m"></span>
      <a v-bind:href="url">点我链接</a>
      <input type="text" v-model="msg">
      <div> {{msg}} - {{reversedMsg}} </div>
      <h1 v-if='bool'>1</h1>
      <h1 v-else>2</h1>
      <button v-on:click="ab">切换</button>
      <div>
        <button @click="but1">but1</button>
        <button @click="but2(msg)">but2</button>
        <button @click="but3(msg,$event)">but3</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import func from '../vue-temp/vue-editor-bridge';
  export default {
    data() {
      return {
        title: 'Home',
        html_m: "<h1>是我</h1>",
        url: "http://www.baidu.com",
        msg: 'fuck',
        bool: false
      }
    },
    computed: {
      reversedMsg: function(){
        return this.msg.split('').reverse().join('');
      }
    },
    methods: {
      // reversedMsg: function(){
      //   return this.msg.split('').reverse().join('');
      // }
      ab: function(){
        this.bool = !this.bool;
      },
      but1(event){              
        alert(event.target.innerText);
      },
      but2(msg){
        alert(msg);
      },
      but3(msg,$event){
        alert(msg+$event.target.innerText);
      }
    },
    watch: {

    }
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
