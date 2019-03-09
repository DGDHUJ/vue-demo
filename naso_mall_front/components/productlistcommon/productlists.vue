<style lang="scss" scoped>
.productlists {
  // .el-row {
  //   width: 75.5%;
  //   /*margin-bottom: 20px;*/
  //   &:last-child {
  //     margin-bottom: 0;
  //   }
  // }
  // .el-col {
  //   border-radius: 4px;
  // }
  // .bg-purple-dark {
  //   background: white;
  // }
  // .bg-purple {
  //   background: white;
  // }
  // .bg-purple-light {
  //   background: #e5e9f2;
  // }
  // .grid-content {
  //   min-height: 36px;
  // }
  // .row-bg {
  //   padding: 10px 0;
  //   background-color: #f9fafc;
  // }
  .productlists-listitem {
    width: 19%;
    float: left;
    margin: 1% 1% 0 0;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .productlists-listitem:nth-of-type(5n){
    margin: 1% 0 0 0;

  }
  .productlists-outer {
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    overflow: hidden;
    position: relative;
    a {
      height: 100%;
    }
  }
  .productlists-listitem {
    float: left;
    .imgouter {
      text-align: center;
      width: 226px;
      height: 226px;
      padding: 8px;
      img {
        width: 100%;
        height: auto;
      }
    }
    @media screen and (max-width: 1200px) {
      .imgouter {
        width: 190px;
        height: 190px;
      }
    }
  }

  .productlists-listitem-text {
    padding: 0 10px;
  }
  .productlists-listitem-text1 {
    font-size: 0.9rem;
    min-height: 40px;
    width: 98%;
    /*text-overflow: -o-ellipsis-lastline;*/
    overflow: hidden;
  }
  .productlists-listitem-text2 {
    color: #f08518;
  }
  .productlists-listitem-text3 {
    line-height: 40px;
    color: red;
    font-size: 0.9rem;
  }
}
</style>
<template>
  <div class="productlists">
    <div class="productlists-outer">
      <nuxt-link
        :to="{name: 'product-id',query:{'token':token},params:{id:item.id}}"
        class="productlists-listitem"
        v-for="item in goods_list"
        :index="item.showindex"
        :key="item.id"
        target="_blank"
      >
        <!-- <div
        @click="tiaozhuan(item,token)"
        class="productlists-listitem"
        v-for="item in goods_list"
        :index="item.showindex"
        :key="item.id"
        >-->
        <div class="imgouter">
          <img :src="item.img_url | imgCompress(226,226)">
        </div>
        <div class="productlists-listitem-text">
          <div class="productlists-listitem-text1">
            <p v-clampy="2">{{item.title}}</p>
          </div>

          <!-- <p class="productlists-listitem-text2">{{item.subtitle}}</p> -->
          <p class="productlists-listitem-text3">
            <span>&nbsp;${{item.sell_price|money}}</span>
            <span v-if="item.msell_price !=0">&nbsp;~ &nbsp; ${{item.msell_price|money}}</span>
          </p>
        </div>
      </nuxt-link>
      <!--</nuxt-link>-->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import NuxtLink from "../../.nuxt/components/nuxt-link";
import { imgCompress } from "~/plugins/filters.js";
import clampy from "@clampy-js/vue-clampy";
export default {
  components: { NuxtLink },
  name: "productlists",
  props: ["goods_list"],
  directives: {
    clampy
  },
  data() {
    return {
      token: ""
    };
  },
  methods: {
    /* todetail(){
        this.$router.push('/productdetail')
      },*/
    tiaozhuan(item, token) {
      //        this.$router.push({name: 'product-id',params:{id:item.id}})
      const { href } = this.$router.resolve({
        name: "product-id",
        params: { id: item.id },
        query: { token: token }
      });
      window.open(href, "_blank");
    }
  },
  mounted() {
    if (localStorage.getItem("users")) {
      this.token = JSON.parse(localStorage.getItem("users")).token;
    }
  }
};
</script>
