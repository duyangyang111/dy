<template>
  <div class="login">
    <mt-header title="登录">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <img class="tu" src="http://image.wufazhuce.com/Fp9GB2xdIXBbasqQvrSy6v1zOMCx" alt="">
     <h1>ONCE</h1>
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
<a href="javascript:;" @click="jump2" class="p">忘记密码</a>
<van-button @click="test" type="info" size="large">登录</van-button>
<div class="r"><h4>没有账号嘛，快来<a href="javascript:;" @click="jump1" >注册</a>一下嘛</h4></div>
  </div>
</template>
<script>
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
    jump2(){
      this.$router.push("/forget")
    },
    jump1(){
      this.$router.push("/register")
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
      // this.$axios.get('/login',   //get发送请求
      // {params:{phone:this.phone,pwd:this.password}
      // }).then((response)=>{
      //   console.log(response)
      //   if(response.data.code==-1){
      //     this.$toast("用户名或密码错误")
      //   }else{
      //     this.$toast("登录成功")
      //   }
      // })
      //post发送请求
      this.$axios({
        method:'post',
        url:"/login",
        data:this.$qs.stringify({
          phone:this.phone,
          pwd:this.password
        })
      }).then((response)=>{
        console.log(response)
        if(response.data.code==-1){
          this.$toast("用户名或密码有误")
        }else{
          this.$toast("登陆成功")
          sessionStorage.setItem('phone',this.phone);
          this.sessionData=sessionStorage.getItem('phone')
          console.log(this.sessionData);
          this.$router.push("/me")
        }
      })
    }
       }
  }
}
</script>
<style  scoped>
.login{
  overflow: hidden;
  width: 100%;
}
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