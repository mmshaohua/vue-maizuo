<template>
  <div class="mz_search">
    <div class="seacher">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="输入影城名称"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        ></van-search>
      </form>
    </div>
    <div class="content">
      <div class="top">离你最近</div>
      <ul>
        <li>
          <div>英皇电影城（东海缤纷店）</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CinemaSearch',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {
      console.log('onCancel')
    },
    onCancel () {
      this.$router.push({ name: 'cinema' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/common/mixins.scss";
.seacher {
  @include border-bottom;
}
.content {
  padding: 15px 15px 8px 0;
  margin-left: 15px;
  position: relative;
  .top {
    font-size: 13px;
    line-height: 13px;
    color: #bdc0c5;
    margin: 18px 0;
  }
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    li {
      text-align: center;
      padding-bottom: 10px;
      padding-right: 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
      &>div {
        height: 30px;
        background-color: hsla(0,0%,96%,.6);
        line-height: 14px;
        border-radius: 3px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 13px;
        padding: 8px 12px;
      }
    }
  }
}
</style>
