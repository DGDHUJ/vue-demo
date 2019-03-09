<style lang="scss" scoped>
  .comfirmorder-contents{
    .title{
      margin: 10px 0 0 0;
      border-bottom: 1px solid #ddd;
      line-height: 30px;
      padding: 0 0 10px 0;
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
      }
      .bg-purple-dark {
        background:white;
      }
      .bg-purple {
        background: white;
        font-size: 16px;
        font-weight: 600;
        p{
          color: #4B3F91;
          text-align: center;
        }

      }
      .bg-purple-light {
        background:white;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
    .list{
      margin: 20px 0 0 0;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: white;
      }
      .bg-purple {
        background: white;
        .list-img{
          .list-imgs{
            width: 100%;
            border: 1px solid #ddd
          }

        }
        .list-content{
          font-size: 16px;
          margin-top: 20px;
        }
        .list-content1{
          line-height: 30px;
          margin-top: 30px;
          span{
            margin-right: 60px;
          }
        }
        .list-qt{
          margin: 60px 0 0 0;
          text-align: center;
          color: #F18F2E;
        }
        .list-ap{
          margin: 60px 0 0 0;
          text-align: center;
          color: #F18F2E;
        }
      }
      .bg-purple-light {
        background: white;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
    .detail{
      .detail-content{
        margin-top: 20px;
        .line-hr{
          height: 1px;margin-top: 20px;border:none;border-top:1px solid #ddd;
        }
        .detail-content-1{
          line-height: 40px;
          font-size: 16px;
          color: #4B3F91;
          font-weight: 600;
        }
        .detail-content-2{
          display: flex;
          line-height: 30px;
          font-size: 14px;
          .detail-content-2-1{
            width:240px;
          }
          .detail-content-2-2{
            width:100%;
          }
        }
        .detail-content-3{
          line-height: 30px;
          font-size: 14px;
        }
        .detail-content-4{
          display: flex;
          line-height: 30px;
          font-size: 14px;
          .detail-content-4-1{
            width:33.34%;
          }
          .detail-content-4-2{
            width:33.34%;
          }
          .detail-content-4-3{
            width:33.34%;
          }
        }
        .detail-content-5{
          line-height: 30px;
          font-size: 14px;
        }
        .detail-content-6{
          span{
            margin-right: 20px;
          }
        }
      }
    }
    .comfirmorder-contents-note{
      margin-top: 31px;
      text-align: right;
      .note-text{
        .note-text-line1{
          line-height: 30px;
          font-size: 12px;
          color: #F08518;
          margin-right: 20%;
          span{
            margin-left: 20px;
          }
        }
        .note-text-line2{
          display: flex;
          .left{
            align-self: center;
            width: 80%;
            font-size: 12px;
            line-height: 50px;
            .span2{
              font-size: 18px;
              color: #F08518;
              font-weight: 600;
              padding-left: 9px;
            }
          }
          .right{
            width: 100%;
            text-align: right;
            align-self: center;
            .el-button{
              width: 150px;
              color: white;
              background: #4B3F91;
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  
.protocol {
  .el-checkbox__inner {
    border-radius: 50%;
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #F18F2E;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #F18F2E;
    border-color: #F18F2E;
  }

  .el-checkbox__inner:hover {
    border-color: #dcdfe6;
  }
}

.datemodification {
  .el-dialog--center .el-dialog__body {
    text-align: center;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #4B3F91;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}

</style>
<template>
  <div class="comfirmorder-contents">
    <div class="title">
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple">
          <span class="span1">Confirm an order</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">
          <p class="span2">
            Quantity
          </p>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">
          <p>Your expected price</p>
        </div></el-col>
      </el-row>
    </div>
    <div :key="item.id" v-for="item in tempData.listdata" class="list">
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple">
          <div class="list-img">
            <img class="list-imgs" :src="item.img_url"/>
          </div>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <div class="list-content">
           {{item.title}}
          </div>
          <div class="list-content1">
            <span>model:</span>
            <span>color:</span>
            <span>size:</span>
          </div>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">
          <div class="list-qt">
            {{item.num}}
          </div>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">
          <div class="list-ap">{{item.custom_|money}}</div>
        </div></el-col>
      </el-row>
    </div>
    <div class="detail">
      <div class="detail-content">
        <div class="detail-content-1">
          <p>Order Detailed Information</p>
        </div>
        <div class="detail-content-2">
          <p class="detail-content-2-1">Delivery Types: <span>{{tempData.value}}</span></p>
          <p class="detail-content-2-2">Notes：{{tempData.textarea}}</p>
        </div>
        <div class="detail-content-3">
          <p>Settlement Modes: <span>{{tempData.value1}}</span></p>
        </div>
        <div class="detail-content-4">
          <p class="detail-content-4-1">Date of payment:{{tempData.date}}</p>
          <p class="detail-content-4-2">1.Time of down payment:</p>
          <p class="detail-content-4-3">2.Time of Balanced Payment:</p>
        </div>
        <div class="detail-content-5">
          <p>{{tempData.type2}}:{{tempData.input5}}</p>
        </div>
        <div class="detail-content-6" :key="item1.id" v-for="item1 in tempData.addressitem">
          <p>
            <span>{{item1.name}}</span>
            <span>{{item1.phone}}</span>
            <span>{{item1.email}}</span>
            {{item1.country_cn_name}}
            <span v-if="item1.port_cn_name">/{{item1.port_cn_name}}</span>
          </p>
        </div>
        <hr class="line-hr">
      </div>
    </div>
    <div class="protocol">
       <p>
         <i class="icon iconfont "></i>
         <el-checkbox v-model="checked">I agree to the service agreements of NaXin Mall and promise to follow the terms of agreement.</el-checkbox>
       </p>
    </div>
    <div class="comfirmorder-contents-note">
      <div class="note-text">
        <div class="note-text-line2">
          <div class="right" >
            <el-button @click="gosuccessfullyordered" >Submit</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'confirmorder',
    data(){
      return{
        checked: false,
        tempData:this.$route.query.data || [],
        templength:null,
      }
    },
    methods:{
      //提交订单
      gosuccessfullyordered(){
        let tempalert = this.$alert;
        if(this.checked === true){
          var that = this;
          let sumbitUrl = that.$store.state.headerUrl + 'order';
          let cartid = [];
          for(var i = 0;i<that.tempData.listdata.length;i++){
            cartid.push(Number(that.tempData.listdata[i].id))
          }
          let data = {
            cart_item_id:cartid,
            custom_comment: that.tempData.textarea,
            delivery_date: that.tempData.date,
            delivery_type: that.tempData.value,
            payment_type: that.tempData.value1,
            contact_type: that.tempData.type2,
            contact_info: that.tempData.input5,
            address_id:Number(that.tempData.addressitem[0].id)
          }
          that.comment.axiosPost(sumbitUrl,that.$axios,that.$store,data,tempalert).then(function (resp) {
            if(resp.data.code === 0){
              localStorage.removeItem('carttempData');
              that.$router.push('/successfullyordered');
            }else{
              tempalert(resp.data.msg, {
                confirmButtonText: 'ok',
                center: true,
              });
            }
          }).catch(function (error) {
            tempalert(error, {
              confirmButtonText: 'ok',
              center: true,
            });
          })
        }else{
          tempalert('Please agree to the agreement', {
            confirmButtonText: 'ok',
            center: true,
          });
        }
      },
    },
    mounted(){
      this.tempData =JSON.parse(localStorage.getItem('carttempData'));
    },
  }
</script>
