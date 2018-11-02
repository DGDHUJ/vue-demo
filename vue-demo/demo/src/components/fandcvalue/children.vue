<template>
  <div>
    <p>以下是子组件的显示的数据</p>
    <p><span style="background:darkcyan;color: white;">{{fathermsg}}</span></p>
    <p><span style="background:darkcyan;color: white;">{{msg}}</span></p>
    <p><span style="background:darkcyan;color: white;">{{childData}}</span></p>
    <button @click="_sentTofather">传递数据给父组件</button>
    <button @click="_changeData">修改父组件传过来的数据并返回给父组件</button>
    <button @click="_sentTofather1">子组件传递数据给父组件</button>
  </div>
</template>
<script>
  export default {
    name:'children',
    props:['fathermsg','msg'],
    data(){
      return{
        childData:'子组件定义的数据'
      }
    },
    methods:{
      _sentTofather1(){
        this.$emit('listenToChildEvent2',this.childData)
      },
      _sentTofather(){
        this.$emit('listenToChildEvent',this.childData);
      },
      _changeData(){
        this.$emit('listenToChildEvent1','子组件修改');
      }
    },

  }
</script>
