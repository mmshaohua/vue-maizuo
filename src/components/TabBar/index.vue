<template>
  <div class="mz-tabbar">
    <ul class="nav-bar">
      <li v-for="(item, index) in navs" :key="index">
        <router-link :to="item.path">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      navs: [
        {
          title: '电影',
          icon: 'icondianying',
          path: '/movie'
        },
        {
          title: '影院',
          icon: 'iconhuaban',
          path: '/cinema'
        }, /*
        {
          title: '特惠',
          icon: 'icontehui',
          path: '/city'
        }, */
        {
          title: '我的',
          icon: 'iconself',
          path: '/center'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/common/mixins.scss";
.mz-tabbar {
  @include border-top;
  height: 49px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  .nav-bar {
    display: flex;
    height: 100%;

    li {
      flex: 1;

      a {
        display: flex;
        color: #797d82;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 12px;
        height: 100%;

        .iconfont {
          font-size: 21px;
          margin-bottom: 4px;
          margin-top: 4px;
        }

        &.router-link-active {
          color: #ff5f16;
        }
      }
    }
  }
}
</style>
