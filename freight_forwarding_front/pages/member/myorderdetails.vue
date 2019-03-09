<style scoped lang="scss">
  .myorderdetails{
    background: white;
    margin:40px 0 0 0;
    padding:20px;
    .orderId{
      padding:10px 0 15px 0;
      border-bottom: 1px solid #ddd;
      font-size: 1rem;
      font-weight: 600;
    }
    .Info{
      padding: 0 0 20px 0;
      border-bottom: 1px solid #ddd;
      .title{
        font-size: 1.1rem;
        font-weight: 600;
        color:#4A3F91 ;
        padding:15px 0;
      }
      .grid-content{
        img{
          width:100%;
        }
        .textvalue{
          overflow: hidden;
          font-size: 0.93rem;
          span:nth-of-type(1){
            float: left;
            color: #7B7B7B;
          }
          span:nth-of-type(2){
            float: right;

            font-weight: 600;
            cursor: pointer;
            a{
              color: #F08519;
            }
          }
        }
      }
    }
    .Info:last-of-type{
      border:none;
    }
  }
</style>
<template>
  <section class="container">
    <div class="myorderdetails">
      <div class="orderId">
        <p>订单编号：{{sn}}</p>
      </div>
      <div class="Info" v-if="orderpzData.so_file !== ''&&orderpzData.so_file">
         <div class="title">
           SO凭证
         </div>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple">
            <img :src="orderpzData.so_file"/>
            <div class="textvalue">
              <span></span>
              <span ><a :href="orderpzData.so_file" download><i class="el-icon-download"></i>下载</a></span>
            </div>
          </div></el-col>
        </el-row>
      </div>
      <div class="Info" v-if="orderpzData.ocd_attr && orderpzData.ocd_attr.length>0">
        <div class="title">
          报关凭证
        </div>
        <el-row :gutter="20">
          <el-col v-for="(item,index,key) in orderpzData.ocd_attr" :key="key" :span="8"><div class="grid-content bg-purple">
            <div class="textvalue">
              <span>{{item.title}}</span>
              <span ><a :href="item.url" download><i class="el-icon-download"></i>下载</a></span>
            </div>
          </div></el-col>
        </el-row>
      </div>
      <div class="Info"  v-if="orderpzData.payment_voucher !==''&&orderpzData.payment_voucher">
        <div class="title">
          支付凭证
        </div>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple">
            <img :src="orderpzData.payment_voucher"/>
            <div class="textvalue">
              <span></span>
              <span><a :href="orderpzData.payment_voucher" download><i class="el-icon-download"></i>下载</a></span>
            </div>
          </div></el-col>
        </el-row>
      </div>
      <div class="Info" v-if="orderpzData.buliao_file !==''&&orderpzData.buliao_file">
        <div class="title">
          补料凭证
        </div>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple">
            <div class="textvalue">
              <span>{{orderpzData.buliao_file}}</span>
              <span><a :href="orderpzData.buliao_file" download><i class="el-icon-download"></i>下载</a></span>
            </div>
          </div></el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name:'myorderdetails',
    data(){
      return{
        orderpzData:[],
        sn:'',
      }
    },
    methods:{
       getpzData(){
         let that = this;
         let tempalert = that.$alert;
         let url = that.$store.state.headerUrl + 'member/freight_order/bill_voucher/' + that.$route.query.id
         that.comment.axiosGet(url,that.$axios,that.$store,{},tempalert,that).then(function (resp) {
           if(resp.data.code === 0){
             that.orderpzData = resp.data.data;
           }
         }).catch(function (error) {
           tempalert(error, {
             confirmButtonText: '确定',
             callback: action => {
               return
             }
           });
         })
       },
      download(url){
        var iframe = document.createElement("iframe")
        iframe.style.display = "none";
        iframe.src = url;
        document.body.appendChild(iframe);
      },
    },
    mounted(){
      let that= this;
      that.sn = that.$route.query.sn;
      that.getpzData();
    }
  }
</script>
