<template>
  <div class="hello">
    <h1>this is hello word</h1>
    <!--<input placeholder="请输入" v-model="name"/>-->
    <!--<button @click="submit">提交</button>-->
    <!--<vue-msg ref="msg"/>-->
    <!--<vue-btn/>-->
    <div>富文本</div>
    <div class="xr-editor">

      <!--按钮区-->

      <div class="nav">

        <button>
          加粗
        </button>

        ...

      </div>

      <!--编辑区-->

      <div class="editor" contenteditable="true"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: ''
    }
  },
  methods: {
    submit () {
      console.log('11', this.name)
      if (!this.name) {
        this.$refs.msg.msgPlugin('姓名不能为空')
      }
      console.log(this.$msg)
      // this.$myFunc()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1, h2{
    font-weight:normal;
  }
  ul{
    list-style-type:none;
    padding:0;
  }
  li{
    display:inline-block;
    margin:0 10px;
  }
  a{
    color:#42b983;
  }
  .xr-editor{
    margin:50px auto;
    width:1000px;

    .nav{
      display:flex;

      button{
        cursor:pointer;
      }

      &__img{
        position:relative;

        input{
          width:100%;
          height:100%;
          position:absolute;
          left:0;
          top:0;
          opacity:0;
        }

      }

    }

    .row{
      display:flex;
      width:100%;
      height:300px;
    }

    .editor{
      flex:1;
      position:relative;
      margin-right:20px;
      padding:10px;
      outline:none;
      border:1px solid #000;
      overflow-y:scroll;

      img{
        max-width:300px;
        max-height:300px;
        vertical-align:middle;
      }

    }

    .content{
      flex:1;
      border:1px solid #000;
      word-break:break-all;
      word-wrap:break-word;
      overflow:scroll;
    }

  }
</style>
