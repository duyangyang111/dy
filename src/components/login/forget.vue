<template>
  <div class="forget">
     <mt-header title="修改" >
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <img class="tu" src="http://image.wufazhuce.com/FuhRwtLFmbI6FZlmrKEHijCfGBYn" alt="">
   <h1>ONCE-修改密码</h1> 
   <van-field
    v-model="phone"
    required
    label="手机号"
    placeholder="请输入手机号"
  />
  <van-cell-group>
  <van-field
    v-model="sms"
    center
    required
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" v-if="show1 " size="small" type="primary"  @click="send">发送验证码</van-button>
    <van-button slot="button" v-if="show2"  size="small" disabled type="primary" v-model="number">{{number}}s</van-button>
    <van-button slot="button" v-if="show3" size="small" type="primary" @click="sendone" >重新发送验证码</van-button>
  </van-field>
  <van-field
  :type="type"
  label="密码"
  v-model="password"
  placeholder="请输入修改密码"
  required
  :right-icon="righticon"
  @click-right-icon="change"
  >
  </van-field>
</van-cell-group>
<van-button size="large" type="info" @click="sub">修改</van-button>
  </div>
</template>
<script>
import M from 'minimatch'
import { setInterval, clearInterval } from 'timers'
export default {
  data(){
    return{
      phone:"",
      sms:"",
      arr:[],
      show1:true,
      show2:false,
      show3:false,
      number:60,
      righticon:"closed-eye",
      bool:true,
      type:'password',
      password:""
    }
  },methods:{
    sub(){
      var a=this.arr.join("")
      var reg=/^1[3-9]\d{9}$/;
      var reg1=/^[a-zA-Z0-9]{6,8}$/
      if(reg.test(this.phone)===false){
        this.$toast("手机号格式有误或为空")
      }else if(a!==this.sms){
        this.$toast("验证码错误")
      }else if(reg1.test(this.password)===false){
        this.$toast("密码格式错误")
      }else{
        this.$axios({
          method:'post',
          url:"/forget",
          data:this.$qs.stringify({
            phone:this.phone,
            pwd:this.password
          })
        }).then((response)=>{
          console.log(response)
          if(response.data.code==-1){
            this.$toast("用户名错误")
          }else{
            this.$toast("修改成功")
            this.$router.push("/login")
          }
        })
      }
    },
    change(){
      this.bool=!this.bool;
     this.bool?this.righticon="eye-o":this.righticon="closed-eye"
     if(this.righticon=="eye-o"){
       this.type="text"
     }else{
       this.type="password"
     }
    },
    sendone(){
      this.show3=false
      this.number=60
      this.arr=[];
      this.send();
      console.log(this.arr.join(""));
      
    },
    send(){
      this.show1=false
      this.show2=true
      setInterval(()=>{
        this.number-=1;
        if(this.number==0){
          clearInterval(this.interval)
          this.show2=false;
          this.show3=true;
        }
      },1000)
      for(var i=0;i<4;i++){
       var num=Math.floor(Math.random()*10)
      this.arr.push(num);
   }
     this.$toast(this.arr.join(""))
  
    }
  },
}
</script>
<style scoped>
.tu{
  height:250px;
}
.forget{
  overflow: hidden;
}
</style>