<style lang="scss" scoped>
.productlistpage {
  .el-row {
    width: 75.5%;
    /*margin-bottom: 20px;*/
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
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .productlistpage-line {
    //  display: flex;
    overflow: hidden;
    position: relative;
    //  flex-direction: row;
    //  flex-wrap: nowrap;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .productlistpage-line1-left {
    float: left;
    width: 10%;
    padding: 5px;
    text-align: center;
    line-height: 105px;
    background: #f1effa;
    font-size: 1rem;
  }
  .productlistpage-line1-right {
    float: left;
    width: 90%;
    height: 100%;
    padding: 30px 30px 25px 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .productlistpage-line0-left-outer {
    position: absolute;
    width: 12%;
    height: 100%;
  }
  .productlistpage-line0-left {
    width: 100%;
    height: 100%;
    padding: 15px 0 0 5px;
    text-align: center;
    background: #f1effa;
    font-size: 1rem;
  }
  .productlistpage-line0-right {
    //  float: left;
    margin-left: 12%;
    width: 88%;
    height: 100%;
    padding: 10px 30px;
    overflow: hidden;
    //  display: flex;
    //  flex-direction: row;
    //  flex-wrap: wrap;
  }
  .productlistpage-line2-left {
    float: left;
    width: 12%;
    height: 57px;
    padding: 15px 0 0 5px;
    text-align: center;
    background: #f1effa;
    font-size: 1rem;
  }
  .productlistpage-line2-right {
    float: left;
    width: 88%;
    height: 100%;
    padding: 10px 30px;
    //  display: flex;
    //  flex-direction: row;
    //  flex-wrap: wrap;
  }
  .productlistpage-line0-right-content {
    float: left;
    padding: 5px 35px;
    text-align: center;
    cursor: pointer;
  }
  .productlistpage-line1-right-content {
    width: 10%;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .productlistpage-line1-right-contentimg {
    width: 100%;
  }
  .productlistpage-line2-right-content {
    float: left;
    padding: 5px;
    text-align: center;
  }
  .productlistpage-line2-right-contenttext {
    width: 60px;
    border: 1px solid #ddd;
    line-height: 25px;
    border-radius: 16px;
    height: 25px;
    position: relative;
  }
  .textactive {
    color: #0000ee;
  }
  .productlistpage-line2-right-contenttexti {
    position: absolute;
    top: -10px;
    left: 48px;
    font-size: 20px;
    color: #0000ee;
    cursor: pointer;
  }
}
.active {
  border: 1px solid #0000ee !important;
}
#sasasa {
  width: 20px;
  height: 20px;
  background-color: red;
  position: absolute;
  top: 170px;
  left: 600px;
  z-index: 99999;
}
</style>
<template>
  <div class="productlistpage">
    <div class="__main layout" :gutter="0">
      <!--<el-col :span="2"><div class="grid-content bg-purple"></div></el-col>-->
      <div>
        <div class="grid-content bg-purple">
          <div>
            <div class="productlistpage-line">
              <div class="productlistpage-line0-left-outer">
                <div class="productlistpage-line0-left">Product Category</div>
              </div>

              <div class="productlistpage-line0-right">
                <div
                  class="productlistpage-line0-right-content"
                  :key="key"
                  v-for="(item,index,key) in productCategory"
                >
                  <p>
                    <!--列表页点击第二层-->
                    <nuxt-link :to="{name: 'product-list-cate',params:{cate:item.id}}">{{item.en_name}}</nuxt-link>
                  </p>
                </div>
              </div>
            </div>

            <div class="productlistpage-line" style="border-bottom: 1px solid #ddd;">
              <div class="productlistpage-line2-left">Price Range</div>
              <div class="productlistpage-line2-right">
                <div class="productlistpage-line2-right-content button_1 click_button cursor">
                  <p
                    v-if="showclick_button_i!==1"
                    class="productlistpage-line2-right-contenttext button_1_span dianji"
                  >
                    <span>1</span>
                    <span>~</span>
                    <span>99</span>
                  </p>
                </div>
                <div class="productlistpage-line2-right-content button_2 click_button cursor">
                  <p
                    v-if="showclick_button_i!==2"
                    class="productlistpage-line2-right-contenttext button_2_span"
                  >
                    <span>100</span>
                    <span>~</span>
                    <span>199</span>
                  </p>
                </div>
                <div class="productlistpage-line2-right-content button_3 click_button cursor">
                  <p
                    v-if="showclick_button_i!==3"
                    class="productlistpage-line2-right-contenttext button_3_span"
                  >
                    <span>200</span>
                    <span>~</span>
                    <span>299</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<el-col :span="2"><div class="grid-content bg-purple"></div></el-col>-->
    </div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "productcondition",
  props: ["productCategory"],
  data() {
    return {
      showclick_button_i: 0,
      brand_list: [],
      token: "",
      isfloor: false,
      tempfloor: null,
      temppid: null,
      min_val: null
    };
  },
  methods: {
    go() {
      // this.$router.push({
      //   path: this.$route.path,
      //   query: {
      //     keyword: this.$route.query.keyword,
      //     order_by: this.$route.query.order_by,
      //     asc_or_desc: this.$route.query.asc_or_desc,
      //     brand_id: this.$route.query.brand_id,
      //     page: this.$route.query.page,
      //     min_price: this.min_val,
      //     max_price: this.max_val,
      //   }
      // });
      let a = window.location.href.split('?')[0] + '?' + 'min_price='+this.min_val+ "&&max_price="+ this.max_val ;
      if(this.$route.query.keyword){
        a = a+ '&&keyword='+ this.$route.query.keyword;
      }
       if(this.$route.query.order_by){
        a = a+ '&&order_by='+ this.$route.query.order_by;
      }
       if(this.$route.query.asc_or_desc){
        a = a+ '&&asc_or_desc='+ this.$route.query.asc_or_desc;
      }
       if(this.$route.query.brand_id){
        a = a+ '&&brand_id='+ this.$route.query.brand_id;
      }
       if(this.$route.query.page){
        a = a+ '&&page='+ this.$route.query.page;
      }
      window.location.href = a;
    }
  },
  mounted() {
    //      判断有没有区间，选用最小值
    if (this.$route.query.min_price) {
      if (this.$route.query.min_price === "1") {
        var index = 0;
        var that = this;
        that.showclick_button_i = index + 1;
      } else if (this.$route.query.min_price === "100") {
        var index = 1;
        var that = this;
        that.showclick_button_i = index + 1;
      } else if (this.$route.query.min_price === "200") {
        var index = 2;
        var that = this;
        that.showclick_button_i = index + 1;
      }
    }
    if (localStorage.getItem("users")) {
      this.token = JSON.parse(localStorage.getItem("users")).token;
    }
    var that = this;
    if (that.comment.cullocalstorage(localStorage.getItem("initDatatime"))) {
      localStorage.removeItem("initData");
      that.comment.initData(that.$store, that.$axios).then(function(resp) {
        localStorage.setItem("initData", JSON.stringify(resp.data.data));
        localStorage.setItem("initDatatime", new Date().getTime());
        that.brand_list = JSON.parse(
          localStorage.getItem("initData")
        ).mall.brand_list;
      });
    } else {
      that.brand_list = JSON.parse(
        localStorage.getItem("initData")
      ).mall.brand_list;
    }

    //      控制区间的样式
    //      模拟点击
    $("#sasasa").click(function() {
      $(".dianji").trigger("click");
    });

    var that = this;
    function fnT() {
      $(".click_button").click(function(e) {
        var index = $(this).index();
        //          $(".click_button p").removeClass("active")
        //          $(".click_button p").eq(index).addClass("active")
        that.showclick_button_i = index + 1;
        if (index === 0) {
          that.min_val = 1;
          that.max_val = 99;
        } else if (index === 1) {
          that.min_val = 100;
          that.max_val = 199;
        } else if (index === 2) {
          that.min_val = 200;
          that.max_val = 299;
        }
        that.go();
      });
    }
    fnT();

    $(".icon-cha").click(function() {
      //        这个是模拟点击
      //        $(".dianji").trigger("click");
      event.stopPropagation();
      that.$router.push({
        path: that.$route.path,
        query: {
          keyword: that.$route.query.keyword,
          order_by: that.$route.query.order_by,
          asc_or_desc: that.$route.query.asc_or_desc,
          brand_id: that.$route.query.brand_id,
          page: that.$route.query.page,
        }
      });
    });
  },
  watch: {
    productCategory: function(val) {
    }
  }
};
</script>
