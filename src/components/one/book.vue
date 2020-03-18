<template>
  <div style="margin-top:50px;">
    <div @click="jump(i)" v-for="(p,i) of list1" :key="i" style="margin-top:20px;border-bottom:1px solid #ccc;">
         <div class="kind">{{p.kind}}</div>
         <div class="title">{{p.title}}</div>
         <div class="author">{{p.author}}</div>
         <img class="tu" :src="p.img" alt="">
         <div class="forward">{{p.forward}}</div>
         <div class="bottom" >
          <a href="">一天前</a>
          <a style="margin-left:240px;">
          <i class="iconfont" style="margin-right:10px;">&#xe603;</i>
          </a>
         
        </div>
       </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      booklist:[
         {kind:"-阅读-",title:"icon",author:"文╱陈楸帆",img:"http://image.wufazhuce.com/Fvs56YNuyj-8TaRehnj6y_zICRn9",forward:"那是属于icon的未来。"},
         {kind:"-阅读-",title:"icon",author:"文╱陈楸帆",img:"http://image.wufazhuce.com/Fvs56YNuyj-8TaRehnj6y_zICRn9",forward:"那是属于icon的未来。"},
         {kind:"-阅读-",title:"icon",author:"文╱陈楸帆",img:"http://image.wufazhuce.com/Fvs56YNuyj-8TaRehnj6y_zICRn9",forward:"那是属于icon的未来。"},
         {kind:"-阅读-",title:"icon",author:"文╱陈楸帆",img:"http://image.wufazhuce.com/Fvs56YNuyj-8TaRehnj6y_zICRn9",forward:"那是属于icon的未来。"},
         {kind:"-阅读-",title:"icon",author:"文╱陈楸帆",img:"http://image.wufazhuce.com/Fvs56YNuyj-8TaRehnj6y_zICRn9",forward:"那是属于icon的未来。"},
         {kind:"-阅读-",title:"icon",author:"文╱陈楸帆",img:"http://image.wufazhuce.com/Fvs56YNuyj-8TaRehnj6y_zICRn9",forward:"那是属于icon的未来。"},
         {kind:"-阅读-",title:"icon",author:"文╱陈楸帆",img:"http://image.wufazhuce.com/Fvs56YNuyj-8TaRehnj6y_zICRn9",forward:"那是属于icon的未来。"},
         {kind:"-阅读-",title:"icon",author:"文╱陈楸帆",img:"http://image.wufazhuce.com/Fvs56YNuyj-8TaRehnj6y_zICRn9",forward:"那是属于icon的未来。"},
      ],
      list1:[]
    }
  },methods:{
    jump(i){
      if(sessionStorage.getItem("phone")!==null){
      this.$router.push(`/details/${i+1}`)
      }else{
        this.$router.push("/login")
      }
    }
  
  },
  created(){
    this.$axios.get("/product_book",{params:{
      id:1
    }}).then(res=>{
      this.list1=res.data;
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>
<style  scoped>
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
.forward{
  padding: 15px 30px;
  text-align: justify;
  line-height: 2;
  font-size:14px;
  color:#ccc;
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
</style>