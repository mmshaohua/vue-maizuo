<template>
  <div class="mz-cinema">
    <NavBar></NavBar>
    <div id="cinema_content">
      <div class="cinema_nav">
        <ul>
          <li>
            <span>全城</span>
            <i class="iconfont iconarrow-down"></i>
          </li>
          <li>
            <span>APP订票</span>
            <i class="iconfont iconarrow-down"></i>
          </li>
          <li>
            <span>最近去过</span>
            <i class="iconfont iconarrow-down"></i>
          </li>
        </ul>
      </div>
    </div>
    <Cinema/>
  </div>
</template>

<script>
import Cinema from '@/components/CinemaList'
import NavBar from '@/components/NavBar'
export default {
  name: 'cinema',
  components: {
    Cinema,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/common/mixins.scss";
  .mz-cinema{
    height: 100%;
    overflow: hidden;
    #cinema_content{
      width: 100%;
      height: 49px;
      position: fixed;
      top: 44px;
      .cinema_nav{
        width: 100%;
        height: 100%;
        z-index: 2;
        background: #fff;
        ul{
          @include border-bottom;
          display: flex;
          height: 100%;
          justify-content: space-between;
          align-items: center;
          li{
            flex: 1;
            text-align: center;
            span, i {
            font-size: 14px;
            color: #191a1b;
            }
          }
        }
      }
    }
  }
</style>
