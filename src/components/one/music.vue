<template>
  <div style="margin-top:50px;">
    <div @click="jump(i)" v-for="(p,i) of list2" :key="i" style="margin-top:20px;border-bottom:1px solid #ccc;">
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
         {kind:"-音乐-",title:"这个世界未必所有事都如你所愿，但总有他的意思",author:"文╱谢安琪",img:"http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",forward:"上路去别太挂念这里"},
         {kind:"-音乐-",title:"这个世界未必所有事都如你所愿，但总有他的意思",author:"文╱谢安琪",img:"http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",forward:"上路去别太挂念这里"},
         {kind:"-音乐-",title:"这个世界未必所有事都如你所愿，但总有他的意思",author:"文╱谢安琪",img:"http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",forward:"上路去别太挂念这里"},
         {kind:"-音乐-",title:"这个世界未必所有事都如你所愿，但总有他的意思",author:"文╱谢安琪",img:"http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",forward:"上路去别太挂念这里"},
         {kind:"-音乐-",title:"这个世界未必所有事都如你所愿，但总有他的意思",author:"文╱谢安琪",img:"http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",forward:"上路去别太挂念这里"},
         {kind:"-音乐-",title:"这个世界未必所有事都如你所愿，但总有他的意思",author:"文╱谢安琪",img:"http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",forward:"上路去别太挂念这里"},
         {kind:"-音乐-",title:"这个世界未必所有事都如你所愿，但总有他的意思",author:"文╱谢安琪",img:"http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",forward:"上路去别太挂念这里"},
         {kind:"-音乐-",title:"这个世界未必所有事都如你所愿，但总有他的意思",author:"文╱谢安琪",img:"http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig",forward:"上路去别太挂念这里"},
      ],
      list2:[]
    }
  },created(){
    this.$axios.get("/product_music",{params:{
      id:4
    }}).then(result=>{
      this.list2=result.data
    }).catch(err=>{
      console.log(err);
    })
  },
  methods:{
    jump(i){
      if(sessionStorage.getItem("phone")!==null){
      this.$router.push(`/details/${i+4}`)
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