<style scoped>
.login {
  height: 100%;
  position: relative;
}
.background-img {
  width: 100%;
  height: 100%;
}
.showcontent {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 111;
  top: 0;
  padding-top: 103%;
}
.showtext {
  font-size: 0.8rem;
  text-align: center;
}
</style>


<template>
  <div class="login">
    <img class="background-img" src="../../assets/success.png" alt>
    <div class="showcontent">
      <p class="showtext">Your WeChat has successfully bind with your</p>
      <p class="showtext">GETnaso Account！</p>
    </div>
  </div>
</template>
<script>
import { XInput, XButton } from "vux";
import { setTimeout } from "timers";
export default {
  name: "menbersuccess",
  components: {
    XInput,
    XButton
  },
  data() {
    return {
      emailValue: "",
      passwordValue: ""
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.$wechat.WeixinJSBridge.call("closeWindow");
    }, 6000);
  }
};
</script>

