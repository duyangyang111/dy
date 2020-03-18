<template>
<div>
   <mt-header fixed title="one">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
  <div>
  <div style="height:30px;">
  </div>
    <p class="title">{{obj[0].title}}</p>
    <hr class="line1">
    <p class="author">{{obj[0].author}}</p>
    <img class="p1" :src="obj[0].img" alt="">
  <div class="text-content">
  <p>
    <strong>1</strong>
  </p>
  <p>{{obj[0].forward1}}</p>
  <p>
  <p><br></p>
   <p>
     <strong>2</strong>
   </p>
  <p>{{obj[0].forward2}}</p>
  <p class="text-editor">责任编辑：阳子 onewenzhang@wufazhuce.com</p>
  <p class="text-editor">编辑部微信：oneapp2020。定期发布活动，赠送签名书和周边，欢迎添加。</p>
  <p>作者</p>
  <hr class="line1">
  <div class="page-box" >
    <img class="tu" src="http://image.wufazhuce.com/FqKcI1t9ebVcrwBD5SvVtqcZ4fDc" alt="">
  <div ><div style="display:flex"><p>罗丹</p> <p>@疑似罗丹</p></div> <p style="font-size:10px !important;">大学老师，王小波门下走狗，郫县伍迪艾伦。</p></div>
  <span style="border:1px solid #ccc;color:#ccc;height:40px;line-height:40px;width:45px;">关注</span>
  </div>
  <div>
    <p>相关推荐</p>
   <hr class="line1">
   <div style="display:flex"><p>阅读</p><div><p>鱼王</p><p style="color:#808080">文 / 陈齐云</p></div></div>
   <div style="display:flex"><p>阅读</p><div><p>奥特曼的幸福告白</p><p style="color:#808080">文 / 枨不戒</p></div></div>
  </div>
  <div>
    <p>相关评论</p>
    <hr class="line1">
    <div style="margin-top:30px;"><img style="width:16px;height:16px;float:left;" src="http://q.qlogo.cn/qqapp/1104596227/79A2380763A7E2108DE45ADB710BE93B/40" > <p style="float: left;font-size: 12px;color: #808080;margin-top:0px;">哦雪碧</p> <p style="text-align:right; font-size:12px;">2020-01-09 06:39:37</p></div>
    <p>躺在医院病床上的第三天看到这篇文章，看完有点想哭，看看了床尾坐着的妈妈，憋了回去。热爱生活，热爱生命，热爱家人。一切顺利。</p>
  </div>
  <hr>
  <div>
    <div style="margin-top:30px;"><img style="width:16px;height:16px;float:left;" src="http://image.wufazhuce.com/FlSl0LXxPaXcmgTx5NFTpBtENaZ8?imageView2/1/w/80/h/80/q/75" > <p style="float: left;font-size: 12px;color: #808080;margin-top:0px;">郑元和</p> <p style="text-align:right; font-size:12px;">2020-01-09 06:39:37</p></div>
    <p>你妈妈痛了一天一夜，那么多医生护士半夜起来抢救接生你， 以后可千万不要说人间不值得，人间值得，不值得的是人啊🙁</p>
  </div>
<mt-button size="large">加载更多</mt-button>
 </div>
</div>
</div>
</template>
<script>
import  top   from  './one/top.vue'
export default {
  props:["pid"],
  data(){
    return{
      obj:[{title:'',author:'',img:'',forward1:'',forward2:''}]
    }
  },
  created(){
    this.$axios.get("/details",
    {params:{pid:this.pid}
    })
    .then(res=>{
       this.obj = res.data;
       console.log(this.obj)
        // this.$store.state.obj1 = res.data;
        // localStorage.setItem("data",JSON.stringify(this.$store.state.obj1)) 
     
    //  }).catch(err=>{console.log(err)});
      //  this.$axios.get("/details").then(res=>{
      //    this.$store.state.obj1 = res.data;
      //    localStorage.setItem("data",JSON.parse(this.$store.state.obj1))
     
      })
  }
}
</script>
<style  scoped>
.p1{height:250px;
width:100%;
}
.tu{
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.title{
  color:black;
  font-size:22px;
  font-weight: 1000;
  text-align: left;
  margin-top:40px;
  margin-left:15px;
}
.line1{
  border: 2px solid #000;
  margin: 7px 20px;
  width: 70px
}
.author{
  margin-left:-270px;
  font-size:13px;
  margin-top:15px;
}
.text-content p{
  text-align: justify;
  padding: 0 15px;
  font-size: 18px;
}
.text-editor{
  color: #808080;
  font-style: oblique;
  margin: 20px;
  font-size: 12px;
}
.page-box{
display:flex;
margin-bottom:40px;
}
.page-box p{
  font-size:14px !important;
}
.page-box div{
line-height:20px;
height:20px;
}
</style>