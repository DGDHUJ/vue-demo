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
  font-size: 1rem;
  text-align: center;
}
</style>


<template>
  <div class="login">
    <img class="background-img" src="../../assets/success.png" alt>
    <div class="showcontent">
      <p class="showtext">当前微信号已成功与您的GETnaso账户</p>
      <p class="showtext">授权绑定！</p>
    </div>
  </div>
</template>
<script>
import { XInput, XButton } from "vux";
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

