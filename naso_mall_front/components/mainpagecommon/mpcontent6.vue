<style lang="scss" scoped>
.mpcontent6 {
  margin: 10px 0 0 0;
  .mpcontent6-body {
    height: 260px;
    .mpcontent6-bodyitem1 {
      display: flex;
      flex-direction: row;
      height: 260px;
      text-align: center;
      .mpcontent6-bodyitem-list4-body {
        .colorF4A95E {
          color: #f4a95e;
        }
      }
    }
    .mpcontent6-bodyitem2 {
      display: flex;
      flex-direction: row;
      height: 260px;
      text-align: center;
      .mpcontent6-bodyitem-list4-body {
        .colorred {
          color: red;
        }
      }
    }
    .mpcontent6-bodyitem-list1 {
      position: relative;
      overflow: hidden;
      .mpcontent6-bodyitem-list1-p1 {
        color: white;
        position: absolute;
        top: 10px;
        width: 100px;
        font-size: 14px;
      }
      .mpcontent6-bodyitem-list1-p2 {
        cursor: pointer;
        color: white;
        position: absolute;
        bottom: 10px;
        width: 80%;
        left: 10%;
        border: 1px solid white;
        line-height: 40px;
        margin: 0;
        font-size: 14px;
      }
    }
    .mpcontent6-bodyitem-list2 {
      // width: 22%;
      .mpcontent6-bodyitem-list2-title {
        line-height: 40px;
        margin-bottom: 2px;
        background: white;
      }
      .mpcontent6-bodyitem-list2-body {
        line-height: 35px;
        background: white;
        padding: 1px 0px 5px;
      }
    }
    .mpcontent6-bodyitem-list3 {
      // width: 34%;
      .mpcontent6-bodyitem-list3-title {
        line-height: 40px;
        margin-bottom: 2px;
        background: white;
      }
      .mpcontent6-bodyitem-list3-body {
        line-height: 35px;
        background: white;
        padding: 1px 0px 5px;
      }
    }
    .mpcontent6-bodyitem-list4 {
      // width: 21%;
      .mpcontent6-bodyitem-list4-title {
        line-height: 40px;
        margin-bottom: 2px;
        background: white;
      }
      .mpcontent6-bodyitem-list4-body {
        line-height: 35px;
        background: white;
        padding: 1px 0px 5px;
      }
    }
  }
}
</style>
<template>
  <div class="mpcontent6">
        <div class="__main mpcontent6-body">
          <el-row :gutter="10">
            <el-col :span="12">
              <div class="mpcontent6-bodyitem1">
                <el-row :gutter="5" style="width:100%;">
                  <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
                    <div class="mpcontent6-bodyitem-list1">
                      <img src="../../assets/img/rectangle 20 copy.png"/>
                      <p class="mpcontent6-bodyitem-list1-p1">Buyer ID</p>
                      <p class="mpcontent6-bodyitem-list1-p2">Match Buyer</p>
                    </div>
                  </el-col>
                  <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                    <div class="mpcontent6-bodyitem-list2">
                      <div class="mpcontent6-bodyitem-list2-title">
                        Buyer's Account
                      </div>
                      <div class="mpcontent6-bodyitem-list2-body">
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                      </div>
                  </div>
                  </el-col>
                  <el-col  :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
                    <div class="mpcontent6-bodyitem-list3" >
                      <div class="mpcontent6-bodyitem-list3-title">
                        Purchasing Description
                      </div>
                      <div class="mpcontent6-bodyitem-list3-body">
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col  :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                    <div class="mpcontent6-bodyitem-list4">
                      <div class="mpcontent6-bodyitem-list4-title">
                        Quantity
                      </div>
                      <div class="mpcontent6-bodyitem-list4-body">
                        <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                        <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                        <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                        <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                        <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                        <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="mpcontent6-bodyitem2">
                
                <el-row :gutter="5" style="width:100%;">
                  <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
                    <div class="mpcontent6-bodyitem-list1">
                      <img src="../../assets/img/rectangle 20 copy.png"/>
                      <p class="mpcontent6-bodyitem-list1-p1">Buyer ID</p>
                      <p class="mpcontent6-bodyitem-list1-p2">Match Buyer</p>
                    </div>
                  </el-col>
                  <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                    <div class="mpcontent6-bodyitem-list2">
                      <div class="mpcontent6-bodyitem-list2-title">
                        Buyer's Account
                      </div>
                      <div class="mpcontent6-bodyitem-list2-body">
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                        <div><p><a href="">Jingdong360</a></p></div>
                      </div>
                  </div>
                  </el-col>
                  <el-col  :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
                    <div class="mpcontent6-bodyitem-list3" >
                      <div class="mpcontent6-bodyitem-list3-title">
                        Purchasing Description
                      </div>
                      <div class="mpcontent6-bodyitem-list3-body">
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                        <div><p><a href="">Pancake machine panc...</a></p></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col  :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                    <div class="mpcontent6-bodyitem-list4">
                      <div class="mpcontent6-bodyitem-list4-title">
                        Price
                      </div>
                      <div class="mpcontent6-bodyitem-list4-body">
                        <div><p><a class="colorred" href="">$ 30</a></p></div>
                        <div><p><a class="colorred" href="">$ 30</a></p></div>
                        <div><p><a class="colorred" href="">$ 30</a></p></div>
                        <div><p><a class="colorred" href="">$ 30</a></p></div>
                        <div><p><a class="colorred" href="">$ 30</a></p></div>
                        <div><p><a class="colorred" href="">$ 30</a></p></div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>



          <!-- <div class="mpcontent6-bodyitem1">
            <el-row :gutter="24">
              <el-col  :lg="6" :xl="6">
                <div class="mpcontent6-bodyitem-list1">
                  <img src="../../assets/img/rectangle 20 copy.png"/>
                  <p class="mpcontent6-bodyitem-list1-p1">Buyer ID</p>
                  <p class="mpcontent6-bodyitem-list1-p2">Match Buyer</p>
                </div>
              </el-col>
              <el-col  :lg="5" :xl="5">
                <div class="mpcontent6-bodyitem-list2">
                  <div class="mpcontent6-bodyitem-list2-title">
                    Buyer's Account
                  </div>
                  <div class="mpcontent6-bodyitem-list2-body">
                    <div><p><a href="">Jingdong360</a></p></div>
                    <div><p><a href="">Jingdong360</a></p></div>
                    <div><p><a href="">Jingdong360</a></p></div>
                    <div><p><a href="">Jingdong360</a></p></div>
                    <div><p><a href="">Jingdong360</a></p></div>
                    <div><p><a href="">Jingdong360</a></p></div>
                  </div>
              </div>
              </el-col>
              <el-col  :lg="8" :xl="8">
                <div class="mpcontent6-bodyitem-list3" >
                  <div class="mpcontent6-bodyitem-list3-title">
                    Purchasing Description
                  </div>
                  <div class="mpcontent6-bodyitem-list3-body">
                    <div><p><a href="">Pancake machine panc...</a></p></div>
                    <div><p><a href="">Pancake machine panc...</a></p></div>
                    <div><p><a href="">Pancake machine panc...</a></p></div>
                    <div><p><a href="">Pancake machine panc...</a></p></div>
                    <div><p><a href="">Pancake machine panc...</a></p></div>
                    <div><p><a href="">Pancake machine panc...</a></p></div>
                  </div>
                </div>
              </el-col>
              <el-col  :lg="5" :xl="5">
                <div class="mpcontent6-bodyitem-list4">
                  <div class="mpcontent6-bodyitem-list4-title">
                    Quantity
                  </div>
                  <div class="mpcontent6-bodyitem-list4-body">
                    <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                    <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                    <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                    <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                    <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                    <div ><p><a class="colorF4A95E"  href="">8888</a></p></div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div> -->

          <!-- <div class="mpcontent6-bodyitem2">
            <div class="mpcontent6-bodyitem-list1">
              <img src="../../assets/img/rectangle 21 copy.png" height="260" width="170"/>
              <p class="mpcontent6-bodyitem-list1-p1">Product List</p>
              <p class="mpcontent6-bodyitem-list1-p2">Find the Products</p>
            </div>
            <div class="mpcontent6-bodyitem-list2">
              <div class="mpcontent6-bodyitem-list2-title">
                Supplier Name
              </div>
              <div class="mpcontent6-bodyitem-list2-body">
                <div><p><a href="">Jingdong360</a></p></div>
                <div><p><a href="">Jingdong360</a></p></div>
                <div><p><a href="">Jingdong360</a></p></div>
                <div><p><a href="">Jingdong360</a></p></div>
                <div><p><a href="">Jingdong360</a></p></div>
                <div><p><a href="">Jingdong360</a></p></div>
              </div>
            </div>
            <div class="mpcontent6-bodyitem-list3">
              <div class="mpcontent6-bodyitem-list3-title">
                Product Specification
              </div>
              <div class="mpcontent6-bodyitem-list3-body">
                <div><p><a href="">Pancake machine panc...</a></p></div>
                <div><p><a href="">Pancake machine panc...</a></p></div>
                <div><p><a href="">Pancake machine panc...</a></p></div>
                <div><p><a href="">Pancake machine panc...</a></p></div>
                <div><p><a href="">Pancake machine panc...</a></p></div>
                <div><p><a href="">Pancake machine panc...</a></p></div>
              </div>
            </div>
            <div class="mpcontent6-bodyitem-list4">
              <div class="mpcontent6-bodyitem-list4-title">
                Price
              </div>
              <div class="mpcontent6-bodyitem-list4-body">
                <div><p><a class="colorred" href="">$ 30</a></p></div>
                <div><p><a class="colorred" href="">$ 30</a></p></div>
                <div><p><a class="colorred" href="">$ 30</a></p></div>
                <div><p><a class="colorred" href="">$ 30</a></p></div>
                <div><p><a class="colorred" href="">$ 30</a></p></div>
                <div><p><a class="colorred" href="">$ 30</a></p></div>
              </div>
            </div>
          </div> -->
        </div>
  </div>
</template>
<script>
import clampy from "@clampy-js/vue-clampy";
export default {
  name: "mpcontent6",
  directives: {
    clampy
  },
  data() {
    return {};
  }
};
</script>
