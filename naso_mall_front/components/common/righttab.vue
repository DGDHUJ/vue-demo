<style lang="scss" scoped>
.righttab {
  position: fixed;
  z-index: 99999;
  bottom: 200px;
  right: 0;
  .right-tab {
    background: rgba(0, 0, 0, 0.72);
    flex-direction: column;
    display: flex;
    .divimg {
      cursor: pointer;
      align-self: center;
      padding: 10px;
    }
  }
  .totop {
    display: flex;
    background: #4a3f91;
    position: fixed;
    right: 0;
    margin-top: 20px;
    .divimg {
      cursor: pointer;
      align-self: center;
      padding: 13px;
    }
  }
}
.tab_meiqia {
  position: fixed;
  z-index: 99999;
  bottom: 0;
  right: 46px;
  width: 21rem;
  height: 32rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #fff;
  color: #666;
  .tab_header {
    padding: 0 1rem;
    background-color: #4b3f91;
    color: #fff;
    height: 5rem;
    line-height: 5rem;
    font-size: 14px;
  }
  .tab_body {
    padding: 1rem;
    word-break: break-all;
    line-height: 1.8;
    .ml05r {
      display: inline-block;
      padding: 0.5rem;
    }
  }
  .tab_footer {
    padding: 0 1rem;
    .tab_submit {
      display: inline-block;
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      border-radius: 3px;
      font-size: 1rem;
      background-color: #4b3f91;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
<template>
  <div>
    <div class="righttab">
      <div class="right-tab">
        <div @click="goto('/shoppingcart/cartlist')" class="divimg">
          <img src="../../assets/img/righttab1.png" height="20" width="24"/>
        </div>
        <div onclick="window.open('http://f.getnaso.com/')" class="divimg">
          <img src="../../assets/img/righttab2.png" height="20" width="24"/>
        </div >
        <div onclick="$crisp.push(['do', 'chat:open'])" class="divimg">
          <img src="../../assets/img/righttab3.png" height="20" width="24"/>
        </div>
        <!-- <div onclick="_MEIQIA('showPanel')" v-show="!isShow" @click="isShow = true" class="divimg">
          <img src="../../assets/img/righttab3.png" height="20" width="24"/>
        </div> -->
        <div onclick="_MEIQIA('hidePanel');" v-show="isShow" @click="isShow = false" class="divimg">
          <img src="../../assets/img/righttab3.png" height="20" width="24"/>
        </div>
        <!-- <div class="divimg" @click="widescreen">
          <img src="../../assets/img/righttab4.png" height="20" width="24"/>
        </div> -->
        </div>
      <div class="totop" @click="totop">
        <div class="divimg">
          <img src="../../assets/img/totop.png" height="23" width="17"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "righttab",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    goto(name) {
      this.$router.push(name);
    },
    widescreen(){

    },
    totop() {
      let clientHeight = document.documentElement.clientHeight; //获取可视区域的高度
      let timer = ""; //定义一个定时器
      let isTop = true; //定义一个布尔值，用于判断是否到达顶部
      window.onscroll = function() {
        //获取滚动条的滚动高度
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;

        //判断当点击回到顶部按钮后滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if (!isTop) {
          clearInterval(timer);
        }
        isTop = false;
      };
      timer = setInterval(function() {
        //获取滚动条的滚动高度
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;

        //用于设置速度差，产生缓动的效果
        let speed = Math.floor(-scrollTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop + speed;
        isTop = true; //用于阻止滚动事件清除定时器

        if (scrollTop == 0) {
          clearInterval(timer);
        }
      }, 10);
    }
  }
};
</script>
