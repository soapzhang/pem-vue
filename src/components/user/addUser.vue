<template>
    <div id="user-page">
      <div id="header">
        <h1>增加用户页面</h1>
      </div>
      <div id="middle">
        <div id="nav">
          <h3>导航页面</h3>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div id="content">
            <el-tabs type="border-card">
              <el-tab-pane label="用户增加">
                <div id="add-tap">
                  <el-form ref="form" :model="userInfo" label-width="100px">
                    <el-form-item :span="11" label="用户名">
                      <el-input v-model="userInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item label="真实姓名">
                      <el-input v-model="userInfo.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="userInfo.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                      <el-select v-model="userInfo.sex" :span="11"placeholder="请选择性别">
                        <el-option label="男" value="M" selected></el-option>
                        <el-option label="女" value="W"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="出生年月">
                      <el-col :span="11">
                        <el-date-picker
                          v-model="userInfo.birth"
                          type="month">
                        </el-date-picker>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="手机号码">
                      <el-input v-model="userInfo.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="联系地址">
                      <el-input v-model="userInfo.address"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                      <el-input type="textarea" v-model="userInfo.remark"></el-input>
                    </el-form-item>

                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">立即创建</el-button>
                      <el-button>取消</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </el-tab-pane>
              <el-tab-pane label="配置管理">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
<!--          <div id="pem-content">-->
<!--           -->
<!--          </div>-->
        </div>
      </div>
      <div id="footer">
        <h1>页脚</h1>
      </div>
    </div>
</template>

<script>
  import {formatDate} from '@/utils/date';
    export default {
      data() {
        return {
          isCollapse: true,
          userInfo: {
            username:'',
            name: '',
            password:'',
            sex:'M',
            birth: new Date(),
            phone: '',
            address: '',
            remark: '',
          },
          resp:''
        }
      },
      methods: {
        onSubmit() {
          this.$postRequest("/pem/user/add",{
            username:this.userInfo.username,
            name:this.userInfo.name,
            password:this.userInfo.password,
            sex:this.userInfo.sex,
            birth:formatDate(this.userInfo.birth,'yyyy-MM'),
            phone:this.userInfo.phone,
            address:this.userInfo.address,
            remark:this.userInfo.remark
          }).then(resp=>{
            if(resp&&resp.status==200){
              this.resp=resp;
              console.log(resp);
            }
          });
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },
    }
</script>

<style scoped>
  #user-page{
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  #header{
    height: 80px;
    text-align: center;
    flex-shrink: 0;
    flex-grow: 0;
    background: #25c6fc;
  }
  #middle{
    display: flex;
    height: 100%;
    flex-shrink: 1;
    flex-grow: 1;
    background: #edd0be;
    overflow: auto;
  }
  #footer{
    height: 50px;
    text-align: center;
    flex-shrink: 0;
    flex-grow: 0;
    background: #25c6fc;
  }
  #nav {
    width: 220px;
    background: #E03636;
  }
  #content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #9eacb4;
  }
  #add-tap{
    width: 500px;
  }

  .el-tab-pane{
    width: 100%;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
