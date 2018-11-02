<template>
  <div>
    <button></button>
    <p>父组件定义的数据 <span style="background: orangered;color: white;">{{mymsg}}</span></p>
    <p>父组件定义的数据并可修改 <span style="background: orangered;color: white;">{{msg}}</span></p>
    <p>子组件传递过来的数据 <span style="background: orangered;color: white;">{{getmsg}}</span> </p>
    <p>子组件传递过来的数据 <span style="background: orangered;color: white;">{{childmsg}}</span> </p>
    <button @click="msg='父组件修改'">修改父组件数据</button>
    <router-view :msg="msg" :fathermsg="mymsg" @listenToChildEvent="showMsgFromChild" @listenToChildEvent1="showMsgFromChild1" @listenToChildEvent2="showMsgFromChild2"></router-view>
  </div>
</template>
<script>
  export default {
    name:'father',
    data(){
      return{
        mymsg:'这是父组件定义的数据-将传递给子组件',
        msg:'父组件',
        getmsg:'',//将接收子组件传递过来的数据
        childmsg:'',//将接收子组件传递过来的数据
      }
    },
    methods:{
      showMsgFromChild(data){
        this.getmsg = data;
      },
      showMsgFromChild1(data){
        this.msg = data;
      },
      showMsgFromChild2(data){
        this.childmsg = data;
      }
    }
  }
</script>
