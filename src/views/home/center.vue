<template>
  <div class="mz-center">
    <div class="main">
      <router-link tag="div" to="/login" class="avatar">
        <img src="@/assets/img/avatar.png" alt="">
        <div class="login">立即登录</div>
      </router-link>
      <ul class="order">
        <li>
          <img src="@/assets/img/dianyingdingdan.png" alt="">
          <div>电影订单</div>
        </li>
        <li>
          <img src="@/assets/img/shanpingdingdan.png" alt="">
          <div>商品订单</div>
        </li>
      </ul>
      <div class="card">
        <i class="iconfont iconshezhi"></i>
        <span>卖座juan</span>
        <i class="iconfont iconarrow-small"></i>
      </div>
      <div class="card">
        <i class="iconfont iconshezhi"></i>
        <span>组合红包</span>
        <i class="iconfont iconarrow-small"></i>
      </div>
      <div class="card">
        <i class="iconfont iconshezhi"></i>
        <span>余额</span>
        <i class="iconfont iconarrow-small"></i>
      </div>
      <div class="card">
        <i class="iconfont iconshezhi"></i>
        <span>设置</span>
        <i class="iconfont iconarrow-small"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'center'
}
</script>

<style lang="scss" scoped>
  .mz-center {
    height: 100%;
  }
  .main {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #f4f4f4;
    margin-bottom: 59px;
    .avatar {
      text-align: center;
      margin-top: -44px;
      height: 200px;
      padding-left: 22px;
      padding-top: 64px;
      background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
      background-size: cover;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      color: #fff;
      box-sizing: border-box;
      img {
        height: 63px;
        width: 63px;
        border-radius: 35px;
        margin-right: 20px;
        border: 2px solid #fff;
      }
      .login {
        font-size: 16px;
      }
    }
    .order {
      width: 100%;
      margin: 0 auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      text-align: center;
      font-size: 13px;
      padding: 0;
      height: 79px;
      background: #fff;
      margin-bottom: 10px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      li {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        list-style: none;
        img {
          height: 26px;
          width: 26px;
        }
        &>div {
          color: #797d82;
          margin-top: 5px;
        }
      }
    }
    .card {
      background: #fff;
      padding: 0 15px;
      height: 49px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      span {
        margin-left: 15px;
        color: #191a1b;
        -webkit-box-flex: 1;
        flex: 1;
      }
      i {
        width: 20px;
        height: 20px;
        display: inline;
      }
    }
  }
</style>
