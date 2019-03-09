
<style lang="scss" scoped>
  .changeuserInforbar{
    margin-top:20px;
  .datemodification-content-items-imgout{
    margin-top: 10px;
  }
  .datemodification-content-items-img{
    width: 40px;height:40px;
  }
  .datemodification-content-items-title{
    line-height: 30px;
    font-size: 16px;
    color: #4B3F91;
    font-weight: 600;
  }
  .datemodification-content-items-textp{
    margin-top: 10px;
  }
  .datemodification-content-items-textinput{
      width: 68%;
      padding-left: 5px;
      border: none;
      background: #ddd;
      border-bottom: 1px solid #4B3F91;
    }
    .datemodification-content-items-textinputspan{
      /*margin-left: 5px;*/
      background: rgb(75, 63, 145);
      background: rgb(75, 63, 145);
      padding: 5px 8px 5px 2px;
      text-align: center;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    .el-row{
      margin-bottom: 20px;
    }
    .el-row:last-child {
      margin-bottom: 0;
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #ddd;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 180px;
      padding:5px 10px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }

  }
</style>
<template>
    <div class="changeuserInforbar">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="datemodification-content-items-imgout">
            <img src="../../assets/img/cart.png" class="datemodification-content-items-img"/>
          </div>
          <div class="datemodification-content-items-title">
            <p>Freight Forwarding</p>
          </div>
          <div>
            <p><span>GETnaso provides one-stop solution of international logistics and realizes the best purchasing experience for you.</span></p>
          </div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="datemodification-content-items-imgout" style="margin-top: 10px;">
            <img src="../../assets/img/data.png" class="datemodification-content-items-img"/>
          </div>
          <div class="datemodification-content-items-title">
            <p>Acount Management</p>
          </div>
          <div>
            <p><span>Update your acount information regulary to keep it safe and valid.</span></p>
          </div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="datemodification-content-items-imgout">
            <img src="../../assets/img/idcart.png" class="datemodification-content-items-img"/>
          </div>
          <div class="datemodification-content-items-title">
            <p>Suppier ID Authentication</p>
          </div>
          <div>
            <p><span>Certification will enhance your credibility.</span></p>
          </div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="datemodification-content-items-title">
            <p>Get the Latest Product Category</p>
          </div>
          <div>
            <p class="datemodification-content-items-textp" style="">
              <input class="datemodification-content-items-textinput" type="text" placeholder="Enter your email">
              <!-- <br> -->
              <span class="datemodification-content-items-textinputspan"> submit</span></p>
          </div>
        </div></el-col>
      </el-row>
    </div>
</template>
<script>
  export default {
    name:'changeuserInfobar',
    data(){
      return{

      }
    }
  }
</script>
