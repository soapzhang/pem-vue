<template>
  <div class="am-g myapp-login">
    <div class="myapp-login-logo-block  tpl-login-max">
      <div class="myapp-login-logo-text">
        <div class="myapp-login-logo-text">
<!--          <span> 登录</span> -->
          聚光科技绩效管理系统<i class="am-icon-skyatlas"></i>
        </div>
      </div>

      <div class="login-font">
        <i>Log In </i> or <span> Sign Up</span>
      </div>
      <div class="am-u-sm-10 login-am-center">
        <form class="am-form" v-loading="loading">
          <fieldset>
            <div class="am-form-group">
              <input type="text" v-model="LoginForm.username" class="" id="doc-ipt-email-1" placeholder="用户名">
            </div>
            <div class="am-form-group">
              <input type="password" class="" v-model="LoginForm.password" id="doc-ipt-pwd-1" placeholder="密码">
            </div>
            <p><button type="submit" class="am-btn am-btn-default" v-on:click="login">登录</button></p>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return {
            LoginForm:{
              username:'root',
              password:'1234',
            },
            loading:false
          }
        },
      methods:{
          //登录
          login:function (message) {
            var _this= this;
            this.loading=true;
            this.$postRequest('/pem/login',{
              username:this.LoginForm.username,
              password:this.LoginForm.password
            }).then(resp=>{
              _this.loading=false;
              if(resp&&resp.status==200){
                console.log(resp)
                debugger;
                var result = resp.data;
                window.localStorage.setItem('userInfo',JSON.stringify(_this.LoginForm));
                _this.$router.push("/add")
              };
            })
          }
      }
    }
</script>

<style>
  .myapp-login {
    width: 100%;
    height: 100%;
  }
  .tpl-login-max{
    margin-top: 100px;
  }
</style>
