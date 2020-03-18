<template>
  <div>
  <form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<div @click="jump(p.pid)" v-for="p of mylist" :key="p.pid" style="margin-top:20px;border-bottom:1px solid #ccc;">
         <div class="kind">{{p.kind}}</div>
         <div class="title">{{p.title}}</div>
         <div class="author">{{p.author}}</div>
         <img class="tu" :src="p.img" alt="">
         <div class="forward">{{p.forward}}</div>
         <div class="bottom" >
          <a href="">一天前</a>
          <a style="margin-left:240px;">
          9190
          <i class="iconfont" style="margin-right:10px;">&#xe603;</i>
          </a>
          <a href="">
           <i class="iconfont">&#xe674;</i>
           </a>
        </div>
       </div>
</div>
</template>
<script>
export default {
   data(){
     return{
      value:"",
      list:this.$store.state.searchObj,
      mylist:[],
     }
   },methods:{
     onSearch(){
   // this.list = [];
    if(this.value === ""){
      this.mylist=[]
    }else{
       var obj=[]
      this.list.forEach(element => {
        if(element.title.search(this.value) !==-1){
         obj.push(element);
         this.mylist=obj
         console.log(this.mylist)
         }else if(element.author.search(this.value) !==-1){
          obj.push(element);
          this.mylist=obj
         }
      });
    }
     },
     onCancel(){
      if(value===""){
        this.mylist==""
      }
     },
     jump(pid){
       if(sessionStorage.getItem("phone")!==null){
       this.$router.push(`/details/${pid}`)
       }else{
         this.$router.push("/login")
       }
     }
   },
   watch:{
     value(){
       this.onSearch()
     }
   }
}
</script>
<style  scoped>
.tu{height:250px;
width:100%;
}
.kind{
  font-size:12px;
  text-align: center;
  color:#8e8e93;
}
.title{
  font-size:20px;
  text-align: left;
  font-weight: 200;
  padding-top:20px; 
  margin-left:20px;
}
.products{
  border-bottom:1px solid #ccc;
}
.author{
padding: 8px 1px;
text-align: justify;
line-height: 1.7;
font-size: 14px;
color:#8e8e93;
margin-left:20px;
}
.tu{
  height: 204px;
}
.words_info{
  color:#ccc;
  font-size:12px;
}
.bottom{
  display:flex;
  margin-top:15px;
  font-size: 12px;
  color:gray;
  margin-bottom:10px;
}
.bottom a{
  text-decoration: none;
}
</style>