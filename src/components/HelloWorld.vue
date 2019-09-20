<template>
  <div class="hello">
    <h1>this is hello word</h1>
    <input placeholder="请输入" v-model="name"/>
    <button @click="submit">提交</button>
    <vue-msg ref="msg"/>
    <!--<vue-btn/>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: ''
    }
  },
  methods: {
    submit () {
      // console.log('11', this.name)
      if (!this.name) {
        this.$refs.msg.msgPlugin('姓名不能为空')
      }
      // console.log(this.$msg)
      // this.$myFunc()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
