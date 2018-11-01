<template>
  <div>
    <span>showvuex-Data(count)</span>
    <p>{{$store.state.count}}</p>
    <p>{{$store.getters.baseUrl}}</p>
    <p>{{$store.getters.testgettersParams('params1')}}</p>
    <p>{{$store.getters.testgettersParams('params2')}}</p>
    <p>{{$store.getters.testgettersState}}</p>
    <div style="padding: 20px;border: 1px solid red;border-radius: 5px">
      <p>mutations 控制state的data</p>
      <button style="background: bisque;color: white;width: 300px;height:40px;line-height: 40px;text-align: center; display: inline-block;cursor:pointer;" @click="$store.commit('addCount')">count++</button>
      <button style="background: bisque;color: white;width: 300px;height:40px;line-height: 40px;text-align: center; display: inline-block;cursor:pointer" @click="$store.commit('reduceCount')">count--</button>
      <button style="background: bisque;color: white;width: 300px;height:40px;line-height: 40px;text-align: center; display: inline-block;cursor:pointer" @click="$store.commit('addCountPayload1',10)">count+n</button>
      <button style="background: bisque;color: white;width: 300px;height:40px;line-height: 40px;text-align: center; display: inline-block;cursor:pointer" @click="$store.commit('addCountPayload2',{num:10})">count-obj.n</button>
    </div>
    <div style="padding: 20px;border: 1px solid red;border-radius: 5px">
      <p>actions 调用 mutations 的方法</p>
      <button style="background: bisque;color: white;width: 300px;height:40px;line-height: 40px;text-align: center; display: inline-block;cursor:pointer;" @click="$store.dispatch('addCount')">count++</button>
      <button style="background: bisque;color: white;width: 300px;height:40px;line-height: 40px;text-align: center; display: inline-block;cursor:pointer" @click="$store.dispatch('reduceCount')">count--</button>
      <button style="background: bisque;color: white;width: 300px;height:40px;line-height: 40px;text-align: center; display: inline-block;cursor:pointer" @click="$store.dispatch('addCountPayload1',10)">count+n</button>
      <button style="background: bisque;color: white;width: 300px;height:40px;line-height: 40px;text-align: center; display: inline-block;cursor:pointer" @click="$store.dispatch('addCountPayload2',{num:10})">count-obj.n</button>
    </div>
  </div>
</template>
<script>
  export default {
    name:'ShowVuex',
    data(){
      return{

      }
    },
    mounted(){
     console.log(this.$store.getters.baseUrl)
    }
  }
</script>
