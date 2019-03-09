<template>
  <div class="home-fixed">
   <router-view/>
  </div>
</template>
<script>


import {
  getToken,
} from "@/common/js/token.js";
export default {
  name: "home",
  props: {},
  components: {
    
  },
  data() {
    return {
    };
  },
  methods: {
   
  },
  watch: {},
  beforeCreate() {},
  created() {

  
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
@import "@/styles/global.scss";
.home-fixed{
 background-color: white;
 overflow: hidden;
 height: 100%;
 width: 100%;
}


</style>
