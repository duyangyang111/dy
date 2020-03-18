<template>
  <div style="margin-top:50px;">
    <div @click="jump(i)" v-for="(p,i) of list3" :key="i" style="margin-top:20px;border-bottom:1px solid #ccc;">
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
         {kind:"-影视-",title:"豆瓣9.9，再也找不到比他更牛的剧了",author:"文╱鱼叔",img:"http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",forward:"到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？"},
         {kind:"-影视-",title:"豆瓣9.9，再也找不到比他更牛的剧了",author:"文╱鱼叔",img:"http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",forward:"到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？"},
         {kind:"-影视-",title:"豆瓣9.9，再也找不到比他更牛的剧了",author:"文╱鱼叔",img:"http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",forward:"到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？"},
         {kind:"-影视-",title:"豆瓣9.9，再也找不到比他更牛的剧了",author:"文╱鱼叔",img:"http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",forward:"到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？"},
         {kind:"-影视-",title:"豆瓣9.9，再也找不到比他更牛的剧了",author:"文╱鱼叔",img:"http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",forward:"到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？"},
         {kind:"-影视-",title:"豆瓣9.9，再也找不到比他更牛的剧了",author:"文╱鱼叔",img:"http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",forward:"到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？"},
         {kind:"-影视-",title:"豆瓣9.9，再也找不到比他更牛的剧了",author:"文╱鱼叔",img:"http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",forward:"到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？"},
         {kind:"-影视-",title:"豆瓣9.9，再也找不到比他更牛的剧了",author:"文╱鱼叔",img:"http://image.wufazhuce.com/FnZIoKcBRCYN7r7e25vGyJuNTgdu",forward:"到底是谁没打满分!？这剧都拿不到满分，观众也太严格了吧？"},
      ],
      list3:[]
    }
  },
  created(){
    this.$axios.get("/product_movie",{params:{id:3}})
    .then(res=>{
      this.list3=res.data
    }).catch(err=>{
      console.log(err);
    })
  },methods:{
    jump(i){
      if(sessionStorage.getItem("phone")!==null){
      this.$router.push(`/details/${i+7}`)
      }else{
        this.$router.push("/login")
      }
    }
  
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