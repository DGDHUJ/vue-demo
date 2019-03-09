<style scoped lang="scss">
  .guarantees{
    margin-bottom: 20px;
    /*background-color: #f4f4f4;*/
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      .guarantees-items{
        padding: 10px 10px;overflow: hidden;position: relative;
        .item-img{
          float: left;
          width: 30%;
          img{
            max-width:100%;
          }
        }
        .item-text{
          position: absolute;
          width: 70%;
          margin-left: 30%;
          /* margin-top: 25%; */
          transform: translate(0%,25%);
          p:first-of-type{
            font-size: 1.1rem;
            font-weight: 600;
          }
          p:last-of-type{
            font-size: 0.875rem;
            color: #898989;
          }
        }
      }
    }
  }

</style>
<template>
  <div class="guarantees ">
    <!-- <div class="pageouter"></div> -->
    <div class="layout">
      <el-row >
        <el-col :span="6"  v-for="item in 4" :key="item"><div class="grid-content bg-purple">
          <div class="guarantees-items">
            <div class="item-img">
              <img v-if="item === 1" src="../../assets/img/home1-1.png" />
              <img v-if="item === 2" src="../../assets/img/home1-2.png" />
              <img v-if="item === 3" src="../../assets/img/home1-3.png" />
              <img v-if="item === 4" src="../../assets/img/home1-4.png" />
            </div>
            <div v-if="item === 1" class="item-text">
              <p>海量线路 / 覆盖全球 </p>
              <p>覆盖全球90%的港口运价</p>
            </div>
            <div v-if="item === 2" class="item-text">
              <p>专业人员 / 诚信服务 </p>
              <p>平均5年以上海空运从业经验</p>
            </div>
            <div v-if="item === 3" class="item-text">
              <p>货物出口 / 一站解决 </p>
              <p>24小时在线即时跟踪进度</p>
            </div>
            <div v-if="item === 4" class="item-text">
              <p>公司担保 / 利益共同 </p>
              <p>卓著的防损保障措施免除后顾之忧</p>
            </div>
          </div>
        </div></el-col>
      </el-row>

    </div>
    <!-- <div class="pageouter"></div> -->
  </div>
</template>
<script>
  export default {
    name:'homeguarantees',
    data(){
      return{

      }
    },
    mounted(){

    }

  }
</script>
