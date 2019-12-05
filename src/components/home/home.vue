<template>
    <div id="index"  data-type="index">
      <header class="am-topbar am-topbar-inverse admin-header">
        <div class="am-topbar-brand">
          <a href="javascript:;" class="tpl-logo">
            <img src="logo.png" alt="">
          </a>
        </div>
        <div class="am-icon-list tpl-header-nav-hover-ico am-fl am-margin-right">

        </div>

        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

        <div class="am-collapse am-topbar-collapse" id="topbar-collapse">

          <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list tpl-header-list">
            <li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
              <a class="am-dropdown-toggle tpl-header-list-link" href="javascript:;">
                <span class="am-icon-bell-o"></span> 提醒 <span class="am-badge tpl-badge-success am-round">5</span>
              </a>
              <ul class="am-dropdown-content tpl-dropdown-content">
                <li class="tpl-dropdown-content-external">
                  <h3>你有 <span class="tpl-color-success">5</span> 条提醒</h3><a href="###">全部</a></li>
                <li class="tpl-dropdown-list-bdbc"><a href="#" class="tpl-dropdown-list-fl"><span class="am-icon-btn am-icon-plus tpl-dropdown-ico-btn-size tpl-badge-success"></span> 【预览模块】移动端 查看时 手机、电脑框隐藏。</a>
                  <span class="tpl-dropdown-list-fr">3小时前</span>
                </li>
                <li class="tpl-dropdown-list-bdbc"><a href="#" class="tpl-dropdown-list-fl"><span class="am-icon-btn am-icon-check tpl-dropdown-ico-btn-size tpl-badge-danger"></span> 移动端，导航条下边距处理</a>
                  <span class="tpl-dropdown-list-fr">15分钟前</span>
                </li>
                <li class="tpl-dropdown-list-bdbc"><a href="#" class="tpl-dropdown-list-fl"><span class="am-icon-btn am-icon-bell-o tpl-dropdown-ico-btn-size tpl-badge-warning"></span> 追加统计代码</a>
                  <span class="tpl-dropdown-list-fr">2天前</span>
                </li>
              </ul>
            </li>
            <li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
              <a class="am-dropdown-toggle tpl-header-list-link" href="javascript:;">
                <span class="am-icon-comment-o"></span> 消息 <span class="am-badge tpl-badge-danger am-round">9</span>
              </a>
              <ul class="am-dropdown-content tpl-dropdown-content">
                <li class="tpl-dropdown-content-external">
                  <h3>你有 <span class="tpl-color-danger">9</span> 条新消息</h3><a href="###">全部</a></li>
                <li>
                  <a href="#" class="tpl-dropdown-content-message">
                                <span class="tpl-dropdown-content-photo">
                      <img src="../../../static/amaze/img/user02.png" alt=""> </span>
                    <span class="tpl-dropdown-content-subject">
                      <span class="tpl-dropdown-content-from"> 禁言小张 </span>
                                <span class="tpl-dropdown-content-time">10分钟前 </span>
                                </span>
                    <span class="tpl-dropdown-content-font"> Amaze UI 的诞生，依托于 GitHub 及其他技术社区上一些优秀的资源；Amaze UI 的成长，则离不开用户的支持。 </span>
                  </a>
                  <a href="#" class="tpl-dropdown-content-message">
                                <span class="tpl-dropdown-content-photo">
                      <img src="../../../static/amaze/img/user03.png" alt=""> </span>
                    <span class="tpl-dropdown-content-subject">
                      <span class="tpl-dropdown-content-from"> Steam </span>
                                <span class="tpl-dropdown-content-time">18分钟前</span>
                                </span>
                    <span class="tpl-dropdown-content-font"> 为了能最准确的传达所描述的问题， 建议你在反馈时附上演示，方便我们理解。 </span>
                  </a>
                </li>

              </ul>
            </li>
            <li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
              <a class="am-dropdown-toggle tpl-header-list-link" href="javascript:;">
                <span class="am-icon-calendar"></span> 进度 <span class="am-badge tpl-badge-primary am-round">4</span>
              </a>
              <ul class="am-dropdown-content tpl-dropdown-content">
                <li class="tpl-dropdown-content-external">
                  <h3>你有 <span class="tpl-color-primary">4</span> 个任务进度</h3><a href="###">全部</a></li>
                <li>
                  <a href="javascript:;" class="tpl-dropdown-content-progress">
                                <span class="task">
                        <span class="desc">Amaze UI 用户中心 v1.2 </span>
                                <span class="percent">45%</span>
                                </span>
                    <span class="progress">
                        <div class="am-progress tpl-progress am-progress-striped"><div class="am-progress-bar am-progress-bar-success" style="width:45%"></div></div>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="tpl-dropdown-content-progress">
                                <span class="task">
                        <span class="desc">新闻内容页 </span>
                                <span class="percent">30%</span>
                                </span>
                    <span class="progress">
                       <div class="am-progress tpl-progress am-progress-striped"><div class="am-progress-bar am-progress-bar-secondary" style="width:30%"></div></div>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="tpl-dropdown-content-progress">
                                <span class="task">
                        <span class="desc">管理中心 </span>
                                <span class="percent">60%</span>
                                </span>
                    <span class="progress">
                        <div class="am-progress tpl-progress am-progress-striped"><div class="am-progress-bar am-progress-bar-warning" style="width:60%"></div></div>
                    </span>
                  </a>
                </li>

              </ul>
            </li>
            <li class="am-hide-sm-only"><a href="javascript:;" id="admin-fullscreen" class="tpl-header-list-link" @click="fullscreenhandle()"><span class="am-icon-arrows-alt"></span> <span class="admin-fullText">{{fullscreen?'退出全屏':'开启全屏'}}</span></a></li>

            <li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
              <a class="am-dropdown-toggle tpl-header-list-link" href="javascript:;">
                <span class="tpl-header-list-user-nick">禁言小张</span><span class="tpl-header-list-user-ico"> <img src="../../../static/amaze/img/user01.png"></span>
              </a>
              <ul class="am-dropdown-content">
                <li><a href="#"><span class="am-icon-bell-o"></span> 资料</a></li>
                <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
                <li><a href="#"><span class="am-icon-power-off"></span> 退出</a></li>
              </ul>
            </li>
            <li><a href="###" class="tpl-header-list-link"><span class="am-icon-sign-out tpl-header-list-ico-out-size"></span></a></li>
          </ul>
        </div>
      </header>
      <div class="tpl-page-container tpl-page-header-fixed">
        <div class="tpl-left-nav tpl-left-nav-hover">
          <div class="tpl-left-nav-title">
            导航列表
          </div>
          <div class="tpl-left-nav-list">
            <ul class="tpl-left-nav-menu">
              <li class="tpl-left-nav-item">
                <a href="index.html" class="nav-link active">
                  <i class="am-icon-home"></i>
                  <span>首页</span>
                </a>
              </li>
              <li class="tpl-left-nav-item">
                <a href="chart.html" class="nav-link tpl-left-nav-link-list">
                  <i class="am-icon-bar-chart"></i>
                  <span>工单统计</span>
                  <i class="tpl-left-nav-content tpl-badge-danger">
                    12
                  </i>
                </a>
              </li>
              <li class="tpl-left-nav-item">
                <a href="javascript:;" class="nav-link tpl-left-nav-link-list">
                  <i class="am-icon-table"></i>
                  <span>绩效分析</span>
                  <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>
                </a>
                <ul class="tpl-left-nav-sub-menu">
                  <li>
                    <a href="table-font-list.html">
                      <i class="am-icon-angle-right"></i>
                      <span>文字表格</span>
                      <i class="am-icon-star tpl-left-nav-content-ico am-fr am-margin-right"></i>
                    </a>

                    <a href="table-images-list.html">
                      <i class="am-icon-angle-right"></i>
                      <span>图片表格</span>
                      <i class="tpl-left-nav-content tpl-badge-success">
                        18
                      </i>
                    </a>
                    <a href="form-news.html">
                        <i class="am-icon-angle-right"></i>
                        <span>消息列表</span>
                        <i class="tpl-left-nav-content tpl-badge-primary">
                          5
                        </i>
                    </a>
                    <a href="form-news-list.html">
                        <i class="am-icon-angle-right"></i>
                        <span>文字列表</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="tpl-left-nav-item">
                <a href="javascript:;" class="nav-link tpl-left-nav-link-list">
                  <i class="am-icon-wpforms"></i>
                  <span>人力分析</span>
                  <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right tpl-left-nav-more-ico-rotate"></i>
                </a>
                <ul class="tpl-left-nav-sub-menu" style="display: block;">
                  <li>
                    <a href="form-amazeui.html">
                      <i class="am-icon-angle-right"></i>
                      <span>Amaze UI 表单</span>
                      <i class="am-icon-star tpl-left-nav-content-ico am-fr am-margin-right"></i>
                    </a>

                    <a href="form-line.html">
                      <i class="am-icon-angle-right"></i>
                      <span>线条表单</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="tpl-left-nav-item">
                <a href="login.html" class="nav-link tpl-left-nav-link-list">
                  <i class="am-icon-key"></i>
                  <span>用户管理</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tpl-content-wrapper">
          <div class="tpl-content-page-title">
            Amaze UI 首页组件
          </div>

          <ol class="am-breadcrumb">
            <li><a href="#" class="am-icon-home">首页</a></li>
            <li><a href="#">分类</a></li>
            <li class="am-active">内容</li>
          </ol>

          <div class="tpl-content-scope">
            <div class="note note-info">
              <h3>Amaze UI 为移动而生
                <span class="close" data-close="note"></span>
              </h3>
              <p> Amaze UI 含近 20 个 CSS 组件、20 余 JS 组件，更有多个包含不同主题的 Web 组件，可快速构建界面出色、体验优秀的跨屏页面，大幅提升开发效率。</p>
              <p><span class="label label-danger">提示:</span> Amaze UI 关注中文排版，根据用户代理调整字体，实现更好的中文排版效果。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

    export default {
        name: "home",
        data(){
          return{
            fullscreen:false
          }
        },
      methods:{
        fullscreenhandle:function () {
          let element = document.documentElement;
          if(this.fullscreen){
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            }
          }else{
            if (element.requestFullscreen) {
              element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
              element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
              // IE11
              element.msRequestFullscreen();
            }
          }
          this.fullscreen=!this.fullscreen;
        },
      },
    }
</script>

<style scoped>

</style>
