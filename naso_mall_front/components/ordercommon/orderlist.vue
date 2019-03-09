<style lang="scss">
.mpimgcontent {
  .grid-content {
    min-height: 36px;
  }
}
</style>
<style lang="scss" scoped>
.iconfont {
  margin-right: 4px;
}
.orderlistout {
  .orderlist {
    overflow: hidden;
    // display: flex;
    border-top: 1px solid #dddd;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .orderlist-imgout {
    float: left;
    cursor: pointer;
  }
  .orderlistimg {
    padding: 4px;
    width: 120px;
  }
  .orderlist-textout {
    float: left;
    overflow: hidden;
    // display: flex;
    // width: 100%;
    width:calc(100% - 120px)
  }
  .orderlist-texttitleout {
    float: left;
    padding: 10px 10px 10px 10px;
    width:70%;
    cursor: pointer;
  }
  .orderlist-texttitle {
    line-height: 30px;
    font-size: 14px;
  }
  .orderlist-textcontent {
    display: flex;
    line-height: 20px;
    color: #f08518;
  }
  .orderlist-textcontent1 {
    display: flex;
    line-height: 40px;
    font-size: 12px;
    span {
      color: #f08518;
      font-size: 12px;
    }
  }
  .orderlist-textlist1 {
    width: 12%;
    font-size: 18px;
    font-weight: 600;
  }
  .orderlist-textlist2 {
    width: 25%;
    font-weight: 500;
  }
  .orderlist-textlist2 {
    width: 25%;
    font-weight: 500;
  }
  .orderlist-btnout {
    // display: flex;
    float: left;
    overflow: hidden;
    width: 30%;
  }
  .orderlist-btn {
    float: left;
    width: 45%;
    text-align: center;
    line-height: 40px;
    // margin: 20% 5% 0;
    margin: 12% 4px;
    height: 40px;
    border: 1px solid #ddd;
    cursor: pointer;
    i {
      color: #ddd;
    }
    &::last-child{
      width: 40%;
    }
  }
  .orderlist-btn:active {
    font-size: 14px;
    color: #4a3f91;
    border: 1px solid #4a3f91;
    i {
      color: #4a3f91;
    }
  }
}
</style>

<template>
  <div class="orderlistout mpimgcontent layout">
      <div>
        <div class="grid-content bg-purple">
          <div class="orderlist" :key="item.id" v-for="(item,index) in datalist">
            <div class="orderlist-imgout">
              <img class="orderlistimg" :src="item.img_url | imgCompress(120,120)" alt>
            </div>
            <div class="orderlist-textout">
              <div class="orderlist-texttitleout">
                <div class="orderlist-texttitle">
                  <p>{{item.title}}</p>
                  <p>{{item.subtitle}}</p>
                </div>
                <div class="orderlist-textcontent">
                  <p class="orderlist-textlist1">${{item.sell_price|money}}</p>
                  <!-- <div class="orderlist-textlist2">
                  <p>1~99 =$19.9/1 piece</p>
                  <p>200~299 = $11.9/1 piece</p>
                </div>
                <div class="orderlist-textlist3">
                  <p>100~199 =$15.9/1 piece</p>
                  <p>>300 = $10.9/1 piece</p>
                  </div>-->
                </div>
                <div class="orderlist-textcontent1">
                  <p>State of Supply：
                    <span>The supply of this product is sufficient and can give constant supply，welcome to order.</span>
                  </p>
                </div>
              </div>
              <div class="orderlist-btnout">
                <div class="orderlist-btn" @click="addtobag(item.id,index)">
                  <i class="icon iconfont icon-yuanquanjiahao"></i>Add to Bag
                </div>
                <div class="orderlist-btn" @click="dialogopen(item.id,index)">
                  <i class="icon iconfont icon-shanchu"></i>Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <el-dialog title="remind" :visible.sync="dialogVisible" width="30%">
      <span>Are you sure you want to delete this item?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogclose">Cancel</el-button>
        <el-button type="primary" @click="deldata(tempdeleteid,tempdeleteindex)">Determine</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {imgCompress} from '~/plugins/filters.js';
export default {
  name: "orderlist",
  props: ["datalist"],
  data() {
    return {
      dialogVisible: false,
      tempdeleteid: null,
      tempdeleteindex: null
    };
  },
  methods: {
    addtobag(id, index) {
      var that = this;
      let addtobagUrl = that.$store.state.headerUrl + "cart/un_store";
      let data = {
        id: Number(id)
      };
      let tempalert = that.$alert;
      this.comment
        .axiosPost(addtobagUrl, that.$axios, that.$store, data, tempalert)
        .then(function(resp) {
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: "ok",
              center: true
            });
            that.datalist.splice(index, 1);
          } else {
            tempalert(resp.data.msg + "!!   Please try again!", {
              confirmButtonText: "ok",
              center: true
            });
          }
        });
      //        this.$emit('updatelist', this.datalist);
    },
    deldata(id, index) {
      var that = this;
      let deleteCartUrl = that.$store.state.headerUrl + "cart";
      let tempalert = this.$alert;
      let params = {
        id: Number(id)
      };
      that.comment
        .axiosDelete(deleteCartUrl, that.$axios, that.$store, params, tempalert)
        .then(function(resp) {
          that.dialogVisible = false;
          if (resp.data.code === 0) {
            that.datalist.splice(index, 1);
          }
          tempalert(resp.data.msg, {
            confirmButtonText: "ok",
            center: true
          });
        });
    },
    //打开弹出框
    dialogopen(id, index) {
      this.tempdeleteid = id;
      this.tempdeleteindex = index;
      this.dialogVisible = true;
    },
    //关闭弹出框
    dialogclose() {
      this.dialogVisible = false;
    }
  },
  watch: {
    //监听确认删除的弹出框状态
    dialogVisible: function(val, oldVal) {
      if (val === false) {
        this.tempdeleteid = null;
        this.tempdeleteindex = null;
      }
    }
  }
};
</script>
