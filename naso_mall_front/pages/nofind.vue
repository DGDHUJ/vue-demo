<style scoped lang="scss">
.nofind {
  position: relative;
  overflow: hidden;
  .headContent {
    position: relative;
    background: white;
    margin-bottom: 100px;
    .headContent1 {
      margin-top: 40px;
    }
  }
  font-size: 14px;
  color: #333;
}

.main {
  margin-top: 20px;
  text-align: center;
  &-title {
    h2 {
      padding-bottom: 10px;
    }
  }
  .content {
    margin: 0 auto;
    padding: 60px 0 0 40px;
    width: 720px;
    text-align: left;
    p {
      margin-bottom: 16px;
    }

    ul {
      li {
        margin: 10px 0 0 20px;
        list-style: disc;
        display: list-item;
      }
    }
  }
}
.control {
  margin-top: 50px;
  button{
    margin-top: 18px;
    width: 174px;
    height: 37px;
    border: 1px solid #4B3F91;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    &:hover{
      color: #fff;
      border:0;
      background-color: #4B3F91;
    }
    &:last-child{
      margin-left: 20px;
    }
  }
}

.bigfont{
  font-size: 20px;
  font-weight: 600;
}
</style>
<template>
  <section class="container">
    <div class="nofind __main">
      <headerbar></headerbar>
      <div class="headContent">
        <commonheader class="headContent1"></commonheader>
        <commonheaderbar class="headContent2" :category="category"></commonheaderbar>
        <div class="main layout">
          <div class="main-title">
            <h2 class="bigfont">We’re Sorry!</h2>
            <p>We can’t seem to find any products that match your search.</p>
          </div>
          <div class="content">
            <p class="bigfont">Search Tips</p>
            <ul>
              <li>Check your spelling and try again.</li>
              <li>The item you searched may be sold out for now, try a similar but different search item.</li>
              <li>Keep your search item simple as our search facility works best with shorter descriptions.</li>
            </ul>
          </div>
          <div class="control">
            <p class="bigfont">Need assistance?</p>
            <button class="btn1">Contact Us</button>
            <button class="btn2">Post Buying Leading</button>
          </div>
        </div>
      </div>
      <div class="footline"></div>
      <footerbar></footerbar>
    </div>
  </section>
</template>

<script>
// import $ from "jquery";
import headerbar from "../components/common/headerbar.vue";
import footerbar from "../components/common/footbar.vue";
import commonheader from "../components/common/commonheader.vue";
import commonheaderbar from "../components/common/commonheaderbar.vue";
export default {
  name: "nofind",
  components: {
    headerbar: headerbar,
    commonheader: commonheader,
    commonheaderbar: commonheaderbar,
    footerbar: footerbar,
  },
  async asyncData({ store }) {
    //菜单
    let category = [];
    await store.dispatch("GET_CATEGORY", { store }).then(res => {
      category = res.data;
    });

    return { category };
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>


