<style scoped lang="scss">
  .contentheader{
    padding: 20px 0;
    background: white;
    .pagecontent{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      .logo{
        width:170px;
        cursor: pointer;
        margin-top:20px;
      }
      .tablist{
        width: 85%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .tab-items{
          width:16.6667%;
          text-align: center;
          overflow: hidden;
          line-height: 5.5;
          height: 100%;
          white-space:nowrap;text-overflow:ellipsis;word-break:break-all;overflow:hidden;
          a {
            text-decoration-line: none;
            font-size: 16px;
            color:#4A3F91 ;
            .items-span{
              line-height: 5.5;
              height: 100%;
              padding: 0 10px 20px 10px;
              cursor: pointer;
            }
            .items-span:hover{
              font-weight: 600;
              border-bottom: 3px solid #4A3F91;
            }
            .items-span-active{
              color: #4A3F91;
              font-weight: 600;
              line-height: 4;
              border-bottom: 3px solid #4A3F91;
              font-size: 20px;
            }
          }
        }
      }
      .tab-phone{
        width:18%;
        .phone-item-i{
          font-size:21px;
          font-weight: 600;
          line-height: 4;
          height: 100%;
          padding: 0 10px 20px 10px;
          color: #F08419;
          cursor: pointer;
        }
        .phone-item{
          font-weight: 600;
          line-height: 4;
          font-size: 1rem;
          height: 100%;
          padding: 0 10px 20px 10px;
          color: #F08419;
          cursor: pointer;
        }
      }
    }
  }
</style>
<template>
  <div class=" pagelayout contentheader">
    <div class="pageouter"></div>
    <div class="pagecontent">
      <div>
        <img @click="gohome" src="../../assets/img/naxinlogo.png" class="logo"/>
      </div>
      <div class="tablist">
        <div :key="item.items" v-for="(item,index) in tabitems" @click="tabclick(index,item.tabid)" class="tab-items" >
          <router-link v-if="item.tabid !=='id4'" :to="item.link_to"><span  class="items-span" :class="{'items-span-active':showid === item.tabid}" :id="item.tabid"  >{{item.items}}</span></router-link>
           <a  v-if="item.tabid ==='id4'"  :href="item.link_to"><span  class="items-span" :class="{'items-span-active':showid === item.tabid}" :id="item.tabid"  >{{item.items}}</span></a>
        </div>
      </div>
      <div class="tab-phone">
        <i class="icon iconfont icon-telephone phone-item-i"></i>
        <span class="phone-item">0757-82581931</span>
      </div>
    </div>
    <div class="pageouter"></div>`
  </div>
</template>
<script>
 /* import jq from 'jquery'*/
  export default {
    name:'contentheader',
    data(){
      return{
       tabitems:[
         {items:'首页',tabid:'id0',link_to:'/'},
         {items:'订舱',tabid:'id1',link_to:'/cabinOffer'},
         {items:'拖车',tabid:'id2',link_to:'/trailer'},
         {items:'报关',tabid:'id3',link_to:'/customs'},
         {items:'出口代理',tabid:'id4',link_to:'http://f.getnaso.com/zly/a.html'},
         {items:'资讯中心',tabid:'id5',link_to:'/information'},
         {items:'关于纬远纳信',tabid:'id6',link_to:'/'}
       ],
        showid:'id0',
      }
    },
    methods:{
      handleClick(tab, event) {
      },
      tabclick(index,id){
        this.showid =id;
      },
      gohome(){
        this.$router.push('/');
      },
    },
    mounted(){
      if(window.location.pathname === '/cabinOffer'){
        this.showid ='id1';
//        this.$('#id1').addClass('items-span-active');
      }else if(window.location.pathname === '/trailer'){
        this.showid ='id2';
//        this.$('#id2').addClass('items-span-active');
      }else if(window.location.pathname === '/customs'){
        this.showid ='id3';
//        this.$('#id3').addClass('items-span-active');
      }else if(window.location.pathname === '/partner'){
        this.showid ='id4';
//        this.$('#id4').addClass('items-span-active');
      }else if(window.location.pathname === '/information'){
        this.showid ='id5';
//        this.$('#id5').addClass('items-span-active');
      }else{
        this.showid ='id0';
//        this.$('#id0').addClass('items-span-active');
      }
    }

  }
</script>
