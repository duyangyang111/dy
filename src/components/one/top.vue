<template>
  <div>
    <div class="top">
    <i @click="jump" style="margin-left:8px;" class="iconfont">
      &#xe600;
    </i>
    <div class="title">一个</div>
    <i @click="jump1" class="iconfont">
      &#xe60d;
    </i>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },methods:{
    jump1(){
      this.$router.push("/search")
    },
    jump(){
      if(sessionStorage.getItem('phone')!==null){
        this.$router.push("/me")
      }else{
      this.$router.push("/login")
      }
    }
  }
}
</script>
<style  scoped>
.top{
  display:flex;
  line-height: 44px;
  height: 44px;
  border-bottom:1px solid #ccc;
  position: fixed;
  z-index:9999;
  margin-bottom:60px;
  background-color: #fff;
  width:100%;
}
.title{
 margin-left:140px;
 margin-right: 140px;
margin-bottom:10px;
}
</style>