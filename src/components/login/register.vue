<template>
  <div>
    <mt-header title="注册">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
     <img class="tu" src="http://image.wufazhuce.com/Fnu_Y28HRErU4IuUQ2B7ZpQwr4D9" alt="">
     <h1>ONCE - 注册</h1>
    <van-cell-group>
  <van-field
    v-model="phone"
    required
    clearable
    label="手机号"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    :type="type"
    label="密码"
    placeholder="请输入密码"
    required
    :right-icon="righticon"
    @click-right-icon="change"
  />
</van-cell-group>
<van-button @click="test" type="info" size="large">注册</van-button>
   <h5>注册及代表你同意<a href="javacript:;" @click="jump1">用户服务协议</a></h5>
  </div>
</template>
<script>
import { ok } from 'assert';
export default {
  data(){
    return{
      phone:"",
      password:"",
      type:'password',
      bool:true,
      righticon:"closed-eye"
    }
  },
  methods:{
    jump1(){
      this.$router.push("/xieyi")
    },
    change(){
      this.bool=!this.bool;
      this.bool?this.righticon="eye-o":this.righticon="closed-eye";
      if(this.righticon=="eye-o"){
        this.type="text"
      }else{
        this.type="password"
      }
    },
    test(){
    var reg=/^1[3-9]\d{9}$/;
    var reg1=/^[a-z0-9]{6,8}$/;
    if(reg.test(this.phone)===false)
    {  
      this.$toast("手机号有误或为空")
    }else if(reg1.test(this.password)===false){
      this.$toast("密码有误或为空")
    }else{
      this.$axios({
        method:'post',
        url:"/register",
        data:this.$qs.stringify({
          phone:this.phone,
          pwd:this.password
        })
      }).then((response)=>{
        console.log(response)
        if(response.data.ok==0){
          this.$toast("用户名已登录")
        }else{
          this.$toast("注册成功")
          this.$router.push("/login")
        }
      })

    }
       }
  }
}
</script>
<style  scoped>
.tu{
  height: 250px;
}
.p{
  color:#000;
  float: left;
  font-size: 12px;
}
.r{
  color:#000;
  font-size: 12px;
}
</style>
   
   