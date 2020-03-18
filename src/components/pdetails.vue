<template>
  <div>
     <mt-header fixed title="MY - ONCE" >
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<div v-for="(p,i) of obj " :key="i">
  <img class="tu" :src="p.img" alt="">
  <div class="title"><span>{{p.title}}</span> <span>{{p.author}}</span></div>
  <div class="time"><span>{{p.timer}}</span></div>
  <div style="width:140px; margin:auto; border:1px solid #ccc;margin-bottom:50px;"></div>
  <div class="details"><span>{{p.forward1}}</span></div>
 </div>
  </div>
</template>
<script>
export default {
 props:["id"],
 data(){
   return{
       obj:[]
   }
 },created(){
   this.$axios.get("/pdetails",{params:{id:this.id}
   }).then(res=>{
     this.obj=res.data;
     console.log(this.obj)
   })
 }
}
</script>
<style  scoped>
.tu{
  height:250px;
  width:100%;
}
.title{
  margin-top:15px;
  display:flex;
  justify-content: space-between
}
.title span {
  margin-left:15px;
  margin-right:15px;
  font-size: 14px;
}
.time{
  font-size:24px;
  margin-top:30px;
  margin-bottom:10px;
}
.details{
  padding: 0 20px;
}
</style>