<style lang="scss" scoped>
.contentout-form {
  position: relative;
  left: 50%;
  margin-top: 280px;
  width: 350px;
  transform: translate(-50%, -50%);
  line-height: 50px;
  .title {
    padding-left: 15px;
    font-size: 28px;
  }
  .ties {
    padding-left: 15px;
    line-height: 24px;
    color: red;
  }
  .form-ip {
    display: flex;
    .tiescolor {
      color: red;
    }
    .el-input {
      margin-left: 10px;
    }
  }
  .form-btn {
    margin: 11px 0 0 15px;
    background: #4b3f91;
    color: white;
    text-align: center;
    font-size: 16px;
  }
}
</style>
<template>
  <div class="contentout-form">
    <div class="title">
      <p>New Account registration</p>
    </div>
    <div class="ties">
      <p>*All information are needed to be written</p>
    </div>
    <div class="form-ip">
      <span class="tiescolor">*</span>
      <el-input type="email" v-model="email" placeholder="Input Your E-mail"></el-input>
    </div>
    <div class="form-ip">
      <span class="tiescolor">*</span>
      <el-input type="password" v-model="password" placeholder="Set a password"></el-input>
    </div>
    <div class="form-ip">
      <span class="tiescolor">*</span>
      <el-input type="password" v-model="repassword" placeholder="Input Your  password again"></el-input>
    </div>
    <div class="form-btn" @click="register">Submit</div>
  </div>
</template>
<script>
export default {
  name: "registering",
  data() {
    return {
      email: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    register() {
      var that = this;
      var tempalert = this.$alert;
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (that.email === "" || that.password === "" || that.repassword === "") {
        tempalert("The information is incomplete, please complete it", {
          confirmButtonText: "ok"
        });
      } else {
        if (mailReg.test(that.email)) {
          if (that.repassword === that.password) {
            var url = that.$store.state.headerUrl + "register";
            var params = {
              email: that.email,
              password: that.password,
              r_password: that.repassword
            };
            const loading = that.$loading({
              lock: true,
              text: "Loading",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
            that.$axios
              .post(url, params)
              .then(function(resp) {
                if (resp.data.code === 0) {
                  that.$store.dispatch(
                    "_Information",
                    JSON.stringify(resp.data.data)
                  );
                  loading.close();
                  if (that.$route.query.type === "1") {
                    that.$router.push({
                      path: "/register/finishregister",
                      query: { type: 1 }
                    });
                  } else {
                    that.$router.push({ path: "/register/finishregister" });
                  }
                } else {
                  loading.close();
                  tempalert(resp.data.msg + "Please try again", {
                    confirmButtonText: "ok"
                  });
                }
              })
              .catch(function(error) {
                alert(error);
              });
          } else {
            tempalert("Two passwords are inconsistent!!  Please try again!", {
              confirmButtonText: "ok"
            });
          }
        } else {
          tempalert("Please enter the correct mailbox format", {
            confirmButtonText: "ok"
          });
        }
      }
    }
  }
};
</script>
