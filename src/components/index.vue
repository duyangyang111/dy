<template>
  <div class="index">
    <top></top>
   <mt-tab-container v-model="active">
     <mt-tab-container-item id="first">
       <home></home>
     </mt-tab-container-item>
     <mt-tab-container-item id="second">
       <book></book>
     </mt-tab-container-item>
     <mt-tab-container-item id="third">
       <music></music>
     </mt-tab-container-item>
     <mt-tab-container-item id="fourd">
       <movie></movie>
     </mt-tab-container-item>
     </mt-tab-container> 
    <!-- 4:tabbar列表 -->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="first"> 
      <i class="iconfont">
        &#xe617;
      </i>
      </mt-tab-item>
      <mt-tab-item id="second">
      <i class="iconfont">
        &#xe70a;
      </i>
      </mt-tab-item>
       <mt-tab-item id="third"> 
      <i class="iconfont">
        &#xe601;
      </i>
       </mt-tab-item>
      <mt-tab-item id="fourd">
      <i class="iconfont">
        &#xe612;
      </i>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import home from './one/home.vue'
import top from './one/top.vue'
import book from './one/book.vue'
import music from './one/music.vue'
import movie from './one/movie.vue'
export default {
  data(){
    return{
    active:"first"
      }
    
  },
  components:{
    "top":top,
    "home":home,
    "book":book,
    "movie":movie,
    "music":music,
  }
}
</script>
<style  scoped>
.index{
  overflow: hidden;
}
</style>