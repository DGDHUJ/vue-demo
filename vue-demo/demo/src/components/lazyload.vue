<template>
<div>
    <div @click="gohome">home</div>
<div  v-for="item in 200" :key="item" style="width:20%;display:inline-block;">
        <img alt=" " v-lazy="'http://img.nasotrading.com/d8bfde546561a5a33075af6080ec5d02.png?imageMogr2/thumbnail/140x140!'">
    </div>
</div>
    
</template>
<script>
export default {
    name:'lazyload',
    methods:{
        gohome(){
            this.$router.push({path:'/'})
        }
    }
    
}
</script>

