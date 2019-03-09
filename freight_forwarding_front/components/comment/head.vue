<style lang="scss" scope>
nav {
  background-color: #fff;
}
.navigation {
  height: 80px;
  color: #333;
}
.logo {
  display: inline-block;
  width: 155px;
  height: 50px;
  margin-top: 18px;
  img {
    width: 100%;
  }
}
.nav_menu {
  float: right;
  line-height: 80px;
  font-family: MicrosoftYaHei;
  ul {
    li {
      display: inline-block;
      position: relative;
      margin: 0 32px;
      height: 40px;
      font-size: 16px;
      font-weight: 400;
      a:hover {
        color: #4b3f91;
        font-weight: 600;
      }
      &:hover .hover_border {
        position: absolute;
        width: 20px;
        height: 4px;
        transform: translate(-50%, 60px);
        background-color: #4b3f91;
        left: 50%;
      }
      
    }
  }
}
</style>
<template>
  <div>
    <nav>
      <div class="layout navigation">
        <a class="logo">
          <img src="../../assets/img/naxinlogo.png">
        </a>
        <div class="nav_menu">
          <ul>
            <li :key="item.items" v-for="(item,index) in tabitems">
              <router-link :to="item.link_to" v-if="index!==4">{{item.items}}</router-link>
              <i class="hover_border"></i>
              <a :href="item.link_to" v-if="index==4">{{item.items}}</a><i class="hover_border"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: "",
      tabitems: [
        { items: "首页", tabid: "id0", link_to: "/" },
        { items: "订舱服务", tabid: "id1", link_to: "/cabinOffer" },
        { items: "拖车服务", tabid: "id2", link_to: "/trailer" },
        { items: "报关服务", tabid: "id3", link_to: "/customs" },
        {
          items: "出口代理", tabid: "id4",
          link_to: "http://f.getnaso.com/zly/a.html"
        },
        { items: "资讯中心", tabid: "id5", link_to: "/information" },
        { items: "关于纳信通", tabid: "id6", link_to: "/" }
      ]
    };
  }
};
</script>