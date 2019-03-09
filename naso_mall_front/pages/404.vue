<style scoped lang="scss">
@import "~/styles/public.scss";
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  width: 800px;
  transform: translate(-50%, -80%);
  img {
    width: 100%;
  }
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  color: #452f7a;
  p {
    position: relative;
    top: -260px;
    font-size: 170px;
    font-stretch: semi-condensed;
    span {
      display: inline-block;
      position: relative;
      left: -20px;
      font-size: 54px;
      font-weight: 800;
      line-height: 0.8;
      font-stretch: normal;
    }
  }
  @at-root .control {
    position: relative;
    top: -240px;
    left: 20px;
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
    }
  }
  .rotate {
    display: inline-block;
    transform: rotate(45deg);
    color: #e67819;
  }
}

.behind {
  margin-left: 40px;
  .icon-backward {
    font-size: 16px;
    position: relative;
    top: -5px;
    color: #000;
  }
}
@media screen and (min-width: 1200px) {
}
</style>

<template>
  <section class="main container">
    <img src="../assets/img/404.png">
    <p>
      404
      <span>PAGE
        <br>NOT
        <br>FOUND
      </span>
    </p>
    <div class="control">
      <div>
        <a href="#">
          <i class="icon iconfont icon-refresh rotate"></i> Refresh
        </a>
      </div>
      <div class="behind">
        <a href="#">
          <i class="icon iconfont icon-backward"></i> Go back
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "page_404",
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


