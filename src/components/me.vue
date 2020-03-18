<template>
  <div>
    <mt-header fixed title="MY - ONCE" >
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
  <img class="tu" src="http://image.wufazhuce.com/FtRyI7bADKonYaJZTBsdcR3kB44i" alt="">
  <div class="line" ></div>
  <div >
    <p >我的收藏</p>
    <div style="display:flex;">
   <div>
      <van-icon class="icon" name="comment-o" size="40"/>
      <p >文章</p>
    </div>
    <div>
      <van-icon class="icon" name="music-o"  size="40"/>
      <p>音乐</p>
    </div>
    <div>
      <van-icon class="icon" name="video-o"  size="40"/>
      <p>电影</p>
    </div>
    </div>
  </div>
  <div class="line"></div>
  <div class="follow" ><p style="margin-left:15px;font-weight:blod;font-size:18px;">我的关注</p><van-icon name="friends-o"  class="icon2" size="40"/><van-icon name="arrow" class="icon1" size="40" /></div>
  <div  class="line"></div>
  <van-button  @click="quit" class="t" type="info" size="large">退出</van-button>
  
  </div>
</template>
<script>
export default {
    data(){
      return{

      }
    },
    methods:{
     quit(){}
    }
}
</script>

<style scoped>
.tu{
  height: 250px;
}
.icon{
  margin-right:40px;
  margin-left:40px;
}
.icon1{
  margin-left:200px;
  margin-top:10px;
}
.icon2{
  margin-top:10px;
}
.line{
margin-top:-4px;
width:100%;
height:10px;
background-color:#e6e1e161;
}
.follow{
display:flex;
height:70px;
}
.t{
  margin-top:15px;
}
</style>
<script>
export default {
  methods:{
  }
}
</script>