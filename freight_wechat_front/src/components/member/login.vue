<style scoped>
.login {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.background-img {
  width: 100%;
  height: 100%;
  position: fixed;
}
.showcontent {
   position: absolute;
    background: white;
    height: auto;
    width: 100%;
  /* padding-top: 17rem; */
}
.showtext {
  font-size: 0.8rem;
  text-align: center;
  /* margin-top: 60%; */
}
.inputground {
  margin-top: 12%;
}
.showinput {
  padding: 0 10px;
  margin: 30px 20px;
  box-shadow: 0px 2px 1px 0px #cbc4e0;
}
.weui-cell {
  padding: 0 10px;
}
.submit {
  margin: 0 20px;
}
.showbtn {
  height: 2.5rem;
  font-size: 1rem;
  color: white;
  background-color: #6539b6;
}
</style>
<style>
.weui-input {
  height: 40px !important;
  padding-left: 20px;
}
</style>


<template>
  <div class="login">
    <img class="background-img" src="../../assets/login.png" alt>
    <div class="showcontent">
      <p class="showtext">WeChat shall help to manage your GETnaso Account</p>
      <div class="inputground">
        <div class="showinput">
          <x-input title="title" v-model="emailValue" placeholder="Account Email">
            <img
              slot="label"
              style="padding-right:10px;display:block;"
              src="../../assets/account.png"
              width="24"
              height="24"
            >
          </x-input>
        </div>
        <div class="showinput">
          <x-input title="title" type="password" v-model="passwordValue" placeholder="Password">
            <img
              slot="label"
              style="padding-right:10px;display:block;"
              src="../../assets/password.png"
              width="24"
              height="24"
            >
          </x-input>
        </div>
        <div class="submit">
          <x-button class="showbtn" @click.native="go">Authorization</x-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, XButton } from "vux";
import { getCode, removeCode } from "@/common/js/token.js";
export default {
  name: "menberlogin",
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
  methods: {
    go() {
       let tempcode = getCode();
      let url = "/mall/wechat/member_login_bind?code=" + tempcode;
      if (this.emailValue === "") {
        alert("请输入邮箱");
        this.$vux.loading.hide();
        return false;
      } else {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.emailValue)) {
          alert("请输入有效的邮箱");
          this.$vux.loading.hide();
          return false;
        }
      }
      let params = {
        username: this.emailValue,
        password: this.passwordValue
      };
      this.$vux.loading.show({
        text: "Loading"
      });
      this.$http
        .post(url, params)
        .then(res => {
          if (res.data.code === 0) {
          this.$vux.loading.hide();
          removeCode();
          this.$router.push({ path: "/membersuccess" });
          } else {
            this.$vux.loading.hide();
             alert(res.data.msg)
          }
        });
    }
  },
  mounted() {}
};
</script>

