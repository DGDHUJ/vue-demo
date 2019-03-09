<style lang="scss" scoped>
@import "../../styles/public.scss";

$bd_1px: 1px solid #dcdcdc;
.layout {
  position: relative;
  width: 100%;
  height: auto;
  background: white;
  overflow: hidden;
}

.headercontent {
  margin-top: 40px;
  position: relative;
  overflow: hidden;
  background: white;
}
.tabcontent .el-breadcrumb {
  line-height: 40px;
}
._main {
  width: 100%;
  margin-bottom: 4.2rem;

  //去掉下面开启宽屏模式  - Widescreen mode
  // background: #eee;
  max-width: 1200px;
  margin: 0 auto;
}
.banner {
  img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}

.level_1 {
  border: $bd_1px;
  margin: 1.2rem 0;
  &-title {
    margin: 0 1rem;
    font-family: Arial;
    color: $main_color;
    font-size: 1.066rem;
    font-weight: bold;
    line-height: 3.2rem;
    letter-spacing: 0rem;
    border-bottom: $bd_1px;
    span {
      font-weight: normal;
      color: #f08519;
    }
  }
  &-refe {
    margin: 1.2rem 0;
    &-side_layout {
      display: inline-block;
      border: $bd_1px;
      width: 240px;
      overflow: hidden;
      margin-left: -1px;
      img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &_cate {
      height: 10.7rem;
      text-align: center;
      padding-top: 1.4rem;
      a {
        display: inline-block;
        width: 6.667rem;
        word-wrap: break-word;
        line-height: 2rem;
        margin-top: 0.6rem;
        border: $bd_1px;
        border-radius: 5px;
        color: #666;
      }
      a:nth-of-type(2n-1) {
        margin-right: 10px;
      }
    }

    &_product {
      // display: flex;
      display: inline-block;
      vertical-align: top;
      width: 80%;
      ul li:nth-of-type(n + 5) {
        margin-top: 1rem;
      }
      &-item {
        // border: $bd_1px;
        position: relative;
        float: left;
        height: 22.32rem;
        background: #fff;
        border: $bd_1px;
        margin-left: 10px;

        width: 17.45rem;
        @media screen and (min-width: 1440px) {
          & {
            width: 16.23rem;
            height: 21.07rem;
          }
        }
        @media screen and (min-width: 1780px) {
          & {
            width: 15.06rem;
            height: 20rem;
          }
        }
        &_img {
          width: 100%;
          height: 15rem;
        }
        &_title,
        &_price {
          color: #666;
          font-size: 0.933rem;
          padding: 0.3rem 0.8rem;
        }
        &_price {
          color: #e60012;
          font-size: 1.2rem;
        }
        img {
          display: inline-block;
          position: relative;
          width: 11.6rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    &_list {
      border-top: 1px dashed #dcdcdc;
      padding: 8px 0 18px 0;
      ul li {
        display: inline-block;
        margin: 10px 0 0 10px;

        width: 228px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #eeeeee;
        &:hover {
          cursor: pointer;
          color: #fff;
          background: #4a3f91;
        }
      }
    }
  }
}
.footline {
  margin-top: 40px;
}
</style>
<template>
    <div class="layout">
        <headerbar></headerbar>
        <div class="headercontent">
            <commonheader @upup="updatedata"></commonheader>
            <commonheaderbar></commonheaderbar>
        </div>
        <el-row class="_main" :gutter="0">
          <el-col :span="2"></el-col>
          <el-col :span="24">
              <div>
                  <div class="tabcontent">
                      <el-breadcrumb separator-class="el-icon-arrow-right">
                      <el-breadcrumb-item  :to="{ path: '/' }">Home</el-breadcrumb-item>
                      <el-breadcrumb-item>undetermined</el-breadcrumb-item>
                      </el-breadcrumb>
                  </div>
              </div>


              <div>
                <div class="banner">
                  <img src="../../assets/img/L1_banner.jpg" alt="">
                </div>

                <section class="level_1">
                  <!-- 主要类别名 -->
                  <div class="level_1-title">
                    Cookware - <span>Cooking Equipment</span>
                  </div>
                  <!-- 推介 -->
                  <div class="level_1-refe">
                    <div class="level_1-refe-side_layout">
                      <div>
                        <img src="../../assets/img/product_01.jpg">
                      </div>
                      <div class="level_1-refe_cate">
                        <a>Heater</a>
                        <a>Air conditioner</a>
                        <a>knife</a>
                        <a>Rice cooker</a>
                      </div>
                    </div>

                    <div class="level_1-refe_product">
                      <ul>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                      </ul>
                      <!-- <div class="level_1-refe_product-item">
                      </div> -->

                    </div>
                  </div>

                  <div class="level_1-refe_list">
                    <ul>
                      <li>Frying pan</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                    </ul>
                  </div>
                </section>



                <section class="level_1">
                  <!-- 主要类别名 -->
                  <div class="level_1-title">
                    Cookware - <span>Cooking Equipment</span>
                  </div>
                  <!-- 推介 -->
                  <div class="level_1-refe">
                    <div class="level_1-refe-side_layout">
                      <div>
                        <img src="../../assets/img/product_01.jpg">
                      </div>
                      <div class="level_1-refe_cate">
                        <a>Heater</a>
                        <a>Air conditioner</a>
                        <a>knife</a>
                        <a>Rice cooker</a>
                      </div>
                    </div>

                    <div class="level_1-refe_product">
                      <ul>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                        <li class="level_1-refe_product-item">
                          <div class="level_1-refe_product-item_img"><img src="../../assets/img/0000005.png" alt=""></div>
                          <div class="level_1-refe_product-item_title">PHILPS HD3060 rice cooker</div>
                          <div class="level_1-refe_product-item_price">$37.10~$38.12</div>
                        </li>
                      </ul>
                      <!-- <div class="level_1-refe_product-item">
                      </div> -->

                    </div>
                  </div>

                  <div class="level_1-refe_list">
                    <ul>
                      <li>Frying pan</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                      <li>Induction cooker</li>
                      <li>Electric rice cooker</li>
                      <li>pan</li>
                      <li>Electric pressure cooker</li>
                    </ul>
                  </div>
                </section>




              </div>
          </el-col>
          <el-col :span="2"></el-col>
        </el-row>
        <div class="footline"></div>
        <footerbar></footerbar>
        <righttab></righttab>
    </div>
</template>
<script>
import headerbar from "../../components/common/headerbar.vue";
import commonheader from "../../components/common/commonheader.vue";
import commonheaderbar from "../../components/common/commonheaderbar.vue";
import footerbar from "../../components/common/footbar.vue";
import righttab from "../../components/common/righttab.vue";
export default {
  name: "l1_list",
  components: {
    headerbar,
    commonheader,
    commonheaderbar,
    footerbar,
    righttab
  },
  data() {
    return {
      keyword: "",
      categoryName: "Cookware"
    };
  },
  methods: {
    updatedata(key) {
      this.keyword = key;
    }
  }
};
</script>