<style scoped lang="scss">
@import "~/styles/public.scss";
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  width: 1000px;
  transform: translate(-50%, -80%);
  img {
    width: 100%;
  }
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  color: #452f7a;
  p {
    position: relative;
    top: -180px;
    left: 120px;
    font-size: 190px;
    font-stretch: semi-condensed;
    letter-spacing: -2px;
    span {
      display: inline-block;
      position: relative;
      left: -20px;
      font-size: 30px;
      font-weight: 600;
      line-height: 1.2;
      font-stretch: normal;
    }
  }
  @at-root .control {
    position: relative;
    top: -180px;
    left: 150px;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 24px;
    color: #666666;
    div {
      display: inline-block;
      i {
        font-size: 25px;
        font-size: #333;
      }
      span {
        color: #e67819;
      }
    }
  }
  .rotate {
    display: inline-block;
    transform: rotate(45deg);
    color: #e67819;
  }
}

@media screen and (min-width: 1200px) {
}
</style>

<template>
  <section class="main container">
    <img src="../assets/img/500.png">
    <p>
      500
      <span>WE ARE TRYING
        <br>OUR BEST
        <br>TO RESOLVE
        <br>THE 500 ERROR.
      </span>
    </p>
    <div class="control">
      <div>
        <a href="#">
          <i class="icon iconfont icon-refresh rotate"></i>
          <span> Refresh</span> or try again later.
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "page_500",
  async asyncData({ store }) {
    return;
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

