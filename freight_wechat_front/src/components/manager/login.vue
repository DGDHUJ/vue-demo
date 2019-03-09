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
      <p class="showtext">利用微信更好地管理您的GETnaso账户</p>
      <div class="inputground">
        <div class="showinput">
          <x-input title="title" v-model="emailValue" placeholder="GETnaso账户邮箱">
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
          <x-input title="title" type="password" v-model="passwordValue" placeholder="密码">
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
          <x-button class="showbtn" @click.native="go">点击授权绑定</x-button>
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
      let url = "/mall/wechat/admin_login_bind?code=" + tempcode;
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
        passwordValue: this.passwordValue
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
            this.$router.push({ path: "/managersuccess" });
          } else {
            this.$vux.loading.hide();
             alert(res.data.msg)
          }
        }).catch((error) =>{
          alert("error!Please try again")
        });
    }
  },
  mounted() {}
};
</script>

