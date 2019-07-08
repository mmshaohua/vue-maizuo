<template>
  <div class="navBar">
    <router-link :to="{name: 'city'}" class="navBar_left">
      <span>{{ curCityInfo ? curCityInfo.name : '深圳' }}</span>
      <i class="iconfont iconarrow-down"></i>
    </router-link>
    <div class="navBar_center">
      影院
    </div>
    <div class="navBar_right">
      <router-link tag="div" :to="{name: 'search'}">
        <i class="iconfont iconsousuo"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      'curCityInfo': 'city/curCityInfo'
    })
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  z-index: 3000;
  background-color: #fff;
  display: flex;
  align-items: center;
  &_left {
    display: inline-block;
    font-size: 13px;
    min-width: 15%;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 5px;
    color: #191a1b;
    margin-left: 15px;
  }
  &_center {
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    -webkit-box-flex: 1;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &_right {
    width: 15%;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    &>div {
      width: 100%;
      text-align: right;
      i {
        font-size: 18px;
      }
    }
  }
}
</style>
