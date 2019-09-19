<!--全局注入插件，以及插件里面的组件-->
<template>
  <div>
    <div class="msg" :class="{'active': msgStatus}">
      <div class="msg-wrapper">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-msg',
  data () {
    return {
      text: '',
      msgStatus: false
    }
  },
  methods: {
    msgPlugin (msg, time = 2000) {
      // console.log(222, this.text)
      this.text = msg
      this.msgStatus = true
      setTimeout(() => {
        this.msgStatus = false
      }, time)
    }
  }
}
</script>

<style scoped>
  .msg {
    position: absolute;;
    left: 50%;
    top: 50%;
    transform: translate(-50%,50%);
    width:0px;
    min-height:0px;
    text-align:center;
    background-color:rgba(0,0,0,0.5);
    border-radius:5px;
    color: #fff;
    transition:all 0.5s;
    z-index:999;
    opacity:0;
  }
  .active {
    width:150px;
    min-height:25px;
    opacity:1;
    z-index:999;
  }
</style>
