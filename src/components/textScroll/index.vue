<template>
  <div>
    <!--<h2>文字停顿滚动</h2>-->
    <div class="text-container">
      <transition class="inner-container2" name="slide" mode="out-in">
        <p :key="text.id" class="text2" >{{ `${text.val}` }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
const totalDuration = 2000
export default {
  name: 'Demo',
  data () {
    return {
      arr: [
        '订货 23',
        '收入 344',
        '回款 44',
      ],
      arr2: [],
      number: 0,
      number2: -1,
    }
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.arr[this.number],
      }
    },
  },
  mounted () {
    this.startMove()
    // this.startMove2()
  },
  methods: {
    startMove () {
      setTimeout(() => {
        if (this.number === 2) {
          this.number = 0
        } else {
          this.number += 1
        }
        this.startMove()
      }, totalDuration)
    },
    startMove2 () {
      setTimeout(() => {
        this.number2 += 1
        if (this.number2 > 4) {
          const target = this.arr2.splice(4, 1)
          this.arr2.unshift(target[0])
        } else {
          this.arr2.unshift(this.arr[this.number2])
        }
        this.startMove2()
      }, totalDuration)
    },
  },
}
</script>

<style scoped lang="stylus">
  h2 {
    margin: 20px 0
  }
  .text-container {
    padding-left:40%;
    width: 100vw;
    height: 30px;
    line-height: 30px;
    margin: 10px auto;
    border: 1px solid #E0E0ED;
    overflow: hidden;
    .inner-container {
      animation: myMove 5s linear infinite;
      animation-fill-mode: forwards;
    }
    .text2 {
      margin: 0;
      padding-right: 40px;
      color:#82ccdd;
      font-size: 14px;
      font-weight:bold;
      font-weight: bold;
    }
  }
  /*文字无缝滚动*/
  @keyframes myMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150px);
    }
  }
  /*文字停顿滚动*/
  @keyframes myMove2 {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-30px);
    }
    20% {
      transform: translateY(-30px);
    }
    30% {
      transform: translateY(-60px);
    }
    40% {
      transform: translateY(-60px);
    }
    50% {
      transform: translateY(-90px);
    }
    60% {
      transform: translateY(-90px);
    }
    70% {
      transform: translateY(-120px);
    }
    80% {
      transform: translateY(-120px);
    }
    90% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(-150px);
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-leave-to {
    transform: translateY(-20px);
  }
  .slide-enter{
    transform: translateY(20px);
  }
  .list-container {
    position: relative;
    overflow: hidden;
  }
  .list-item {
    margin: 0;
    transition: all 1s;
    overflow: hidden;
  }
  .list-move {
    /*transition: transform 1s;*/
  }
  .list-enter {
    transform: translateY(30px);
  }
  .list-enter-to, .list-leave {
    transform: translateY(0);
  }
  .list-leave-to {
    transform: translateY(-30px)
  }
  .list-leave-active {
    position: absolute;
    width: 0;
  }
</style>
