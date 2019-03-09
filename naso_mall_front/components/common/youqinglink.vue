
<style lang="scss" scoped>
.yqlink {
  margin: 10px 0 0 0;
  position: relative;
  .listimg {
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    overflow: hidden;
    .listimgitem {
      float: left;
      width: 16.6666%;
      border-right: 2px solid #f4f4f4;
      border-bottom: 2px solid #f4f4f4;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .yqlink-centerlink {
      cursor: pointer;
      width: 33.2%;
      margin-right: 1px;
      background: #4b3f91;
      text-align: center;
      color: white;
      padding-top: 1.8%;
      font-size: 28px;
      margin-top: -2px;
    }
  }
}
</style>
<template>
  <div class="yqlink">
    <div  class="listimg layout">
      <div class="listimgitem" v-for="(items) in linkList" :key="items.id" >
        <a :href="items.url" target="_blank"><img :src="items.img_url" /></a>
      </div>
      <!-- <div class="yqlink-centerlink">
        COOPERATIVE PARTNER
      </div> -->
      <!-- <div class="listimgitem" v-for="(items,index) in linkList" v-if="index >  7"  :key="items.id" >
        <a :href="items.url"><img :src="items.img_url" /></a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "yqlink",
  props: ['linkList'],
  data() {
    return {};
  },
  mounted() {
    
  },
};
</script>
