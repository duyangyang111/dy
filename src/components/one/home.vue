<template>
  <div >
      <div class="top">
        <div class="T">2020/01/09</div>
        <div class="W">对流层，地球</div>
      </div>
      <!-- <div class="products">
       <div><img class="p1" src="http://image.wufazhuce.com/FjGarekChcC8mUEsIC6Ugeec2vWd" alt=""></div>
       <div style="color:#ccc;font-size:12px;margin-top:5px;">
          摄影 | Alvin Balemesa
       </div>
       <div class="forward">
          永远努力在你的生活之上保留一片天空。
        </div>
        <div class="words_info">
          普鲁斯特
        </div>
        <div class="bottom" >
          <a href="">
          <i  class="iconfont" style="margin-left:5px;">&#xe672;</i>
          小计
          </a>
          <a style="margin-left:240px;">
          9190
          <i class="iconfont" style="margin-right:10px;">&#xe603;</i>
          </a>
          <a href="">
           <i class="iconfont">&#xe674;</i>
           </a>
        </div>
       </div> -->
       <van-swipe :autoplay="3000" indicator-color="white">
         <van-swipe-item @click="jump1(i)" v-for="(p,i) of plist" :key="i"><img class="tu" :src="p.pic" alt=""></van-swipe-item>
      </van-swipe>
      <van-divider />
      <a style="color:#000"  > 
          <div  v-for="(p,i) of list" :key="i" style="margin-top:20px;border-bottom:1px solid #ccc;">
         <div class="kind">{{p.kind}}</div>
         <div class="title">{{p.title}}</div>
         <div class="author">{{p.author}}</div>
         <img @click="jump(i)" class="tu" :src="p.img" alt="">
         <div class="forward">{{p.forward}}</div>
         <div class="bottom" >
          <a href="">一天前</a>
          <a style="margin-left:240px;">
          <i @click="add(i)" v-if="show" class="iconfont" style="margin-right:10px;">&#xe603;</i>
          <i @click="add(i)" v-if="!show" class="iconfont" style="margin-right:10px">&#xe602;</i>
          </a>
        </div>
       </div></a>
       <van-loading style="margin-bottom:30px;" size="24px">加载中...</van-loading>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[],
      plist:[{id:1,pic:"http://image.wufazhuce.com/FtIrhHnHKcKvqwFA-RwvHqQ1FgOJ"},
      {id:2, pic:"http://image.wufazhuce.com/FvDacDH8_6MzpwllJokik9i1my4b"},
      {id:3,pic:"http://image.wufazhuce.com/FjGarekChcC8mUEsIC6Ugeec2vWd"},
      {id:4,pic:"http://image.wufazhuce.com/Fp9GB2xdIXBbasqQvrSy6v1zOMCx"},
      {id:5,pic:"http://image.wufazhuce.com/FhcT7UzhSuDGTMGRvX4QXcPVDZf-"}
      ],
     show:true
    }
  },
  methods:{
    add(i){
    this.show=!this.show
     
      // console.log((this.$store.state.searchObj)[i])
    },
    jump1(i){
      if(sessionStorage.getItem("phone")!==null){
        this.$router.push(`/pdetails/${i+1}`)
      }else{
        this.$router.push("/login")
      }
    },
    jump(i){
      if(sessionStorage.getItem("phone")!==null){
      this.$router.push(`/details/${i+1}`)
      }else{
        this.$router.push("/login")
      }
    }
  },
    created(){
      this.$axios.get("/product").then(res=>{
        this.list=res.data;
       this.$store.state.searchObj = res.data;
       localStorage.setItem("product",JSON.stringify(this.$store.state.searchObj))
      }).catch(err=>{
       console.log(err)
      })
    }
}
</script>
<style scoped>
.tu{height:250px;
width:100%;
}
.p1{
  height: 250px;
}
.top{
  margin-top:50px;
  padding:10px auto;
}
.T{
  font-size: 17px;
  font-weight: bold;
  margin-top:5px;
}
.W{
  font-size:12px;
  margin-bottom: 5px;
}
.forward{
  padding: 15px 30px;
  text-align: justify;
  line-height: 2;
  font-size:16px;
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
.tu{
  height: 204px;
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
</style>