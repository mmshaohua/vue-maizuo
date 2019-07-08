<template>
  <div class="page_site_particulars">
    <div class="particulars_allbox">
      <div class="iconfont particulars_allbox_icon icon-mjiantou-copy"></div>
      <div class="particulars_siteTittle">深圳传奇影城后瑞店凤凰</div>
      <div class="particulars_admission">
        <div class="particulars_admission_content">
          <div>前台兑换</div>
          <div>儿童票</div>
          <div>停车</div>
          <div>3D眼镜</div>
          <i class="iconfont icon-iconfontyoujiantou" style="color:orange"></i>
        </div>
        <div class="particulars_admission_locationSite">
          <i class="iconfont icon-dingwei"></i>
          <div class="site">深圳宝安区西乡街道宝安大道5010号萨达萨达大所</div>
          <router-link to="/" class="iconfont icon-weibiaoti"></router-link>
        </div>
      </div>
      <div class="particulars_admission_bigBgc">
        <div class="particulars_admission_bigpic">
          <div class="img">
            <div class="particulars_admission_filmList">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="film_item">
                      <div class="film_img">
                        <img src="../../assets/img/haoke.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span class="swiper-notification"></span>
            </div>
          </div>
        </div>
        <div class="imageTriangle">
          <img src="../../assets/img/sanjiaoxing.png" alt />
        </div>

        <div class="film_info">
          <div class="filmHead">
            <span class="filmName">扫毒2：天地对决</span>
            <span class="filmNum">7.7</span>
            <span class="filmPoint">分</span>
          </div>
          <div class="filmContent">剧情|动作|悬疑|犯罪| 100分钟 | 邱礼涛 | 古天乐 |高圆圆</div>
          <i class="iconfont iconarrow-down-copy"></i>
        </div>
        <div class="showDate">
          <ul>
            <li class="active" style="padding: 0px 15px;">
              <span>今天7月5号</span>
            </li>
            <div class="todo_border" style="padding: 0px 15px;">
              <span style="width:72px;"></span>
            </div>
          </ul>
        </div>
        <div class="show_time">
          <div class="show_time_showing">
            <div>11:00</div>
            <div>12:40散场</div>
          </div>
          <div class="show_time_middle">
            <div>国语2D</div>
            <div>1号厅</div>
          </div>
          <div class="show_time_right">
            <div class="right_momey">
              <span>￥</span>40
            </div>
            <div class="buy_tickets">购票</div>
          </div>
        </div>
        <div class="show_time">
          <div class="show_time_showing">
            <div>11:00</div>
            <div>12:40散场</div>
          </div>
          <div class="show_time_middle">
            <div>国语2D</div>
            <div>1号厅</div>
          </div>
          <div class="show_time_right">
            <div class="right_momey">
              <span>￥</span>40
            </div>
            <div class="buy_tickets">购票</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'cinemaDetails',
  methods: {
    _initSwiper () {
      new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  },
  created () {
    this._initSwiper()
  }
}
</script>
<style lang="scss">
@import "../../../node_modules/swiper/dist/css/swiper.css";
@import "~@/assets/styles/common/px2rem.scss";
@import "~@/assets/styles/common/mixins.scss";
.page_site_particulars {
  .particulars_allbox {
    overflow: hidden;
    padding-top: 44px;
    background: #fff;
    min-height: 100vh;
    position: fixed;
    width: 100%;
    &_icon {
      position: fixed;
      top: 0;
      height: 44px;
      line-height: 44px;
      padding-left: 8px;
      z-index: 303;
      font-size: 25px;
    }
    .particulars_siteTittle {
      box-sizing: border-box;
      text-align: center;
      font-size: 17px;
      color: #191a1b;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      padding: 0px 15px;
      background: #fff;
      top: 0;
      height: 44px;
      line-height: 44px;
      z-index: 302;
    }
    .particulars_admission {
      div {
        box-sizing: border-box;
      }
      &_content {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color: #ffb232;
        overflow: hidden;
        position: relative;
        padding: 5px 0 15px;
        > div {
          @include border-around;
          font-size: 11px;
          position: relative;
          padding: 2px 6px;
          margin: 0 2.5px;
          font-size: 10px;
        }
      }
      &_locationSite {
        height: 50px;
        //position: relative;
        display: flex;
        padding-left: 17px;
        align-items: center;
        i {
          width: 14px;
          height: 21px;
        }
        .site {
          font-size: 14px;
          height: 20px;
          padding: 0 12px;
          flex: 1;
          width: 275px;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        a {
          height: 18px;
          padding: 0 25px;
        }
      }
      &_bigBgc {
        position: relative;
      }
      &_bigpic {
        box-sizing: border-box;
        // position: absolute;
        // top: 0;
        height: 160px;
        width: 100%;
        // padding: 15px 0;
        overflow: hidden;

        width: 100%;
        filter: blur(30px);
        // .img {
        //   background-image: url("https://pic.maizuo.com/usr/movie/43394fd736aa2f25d485906a2100e759.jpg");
        // }
      }
      &_filmList {
        background-color: #ccc;
        height: 160px;
        padding: 15px 0;
        position: relative;
        margin: 0 auto;
        .swiper-container {
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
          .swiper-notification {
            position: absolute;
            left: 0;
            top: 0;
            pointer-events: none;
            opacity: 0;
            z-index: -1000;
          }
          .swiper-wrapper {
            transition-duration: 0ms;
            transform: translate3d(48.875px, 0px, 0px);
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            box-sizing: content-box;
            .swiper-slide {
              width: 81.75px;
              margin-right: 16px;
              flex-shrink: 0;
              height: 100%;
              position: relative;
              .film_item {
                display: flex;
                transition: all 0.5s ease;
                justify-content: center;
                height: 100%;
                width: 100%;
                padding-top: 26px;
                .film_img {
                  width: 72px;
                  transition: all 0.5s ease;
                  img {
                    width: 100% !important;
                    height: 100% !important;
                  }
                }
              }
            }
          }
        }
      }
    }
    .film_info {
      @include border-bottom;
      box-sizing: border-box;
      width: 100%;
      background: #fff;
      height: 80px;
      padding: 15px 0;
      position: relative;
      .filmHead {
        width: 100%;
        text-align: center;
        line-height: 18px;
        margin-bottom: 10px;
        .filmName {
          font-size: 15px;
          color: #191a1b;
          padding-right: 5px;
        }
        .filmNum {
          font-size: 16px;
          font-style: italic;
          color: #ffb232;
        }
        .filmPoint {
          font-size: 10px;
          color: #ffb232;
          padding-left: 2px;
        }
      }
      .filmContent {
        text-align: center;
        height: 18px;
        line-height: 18px;
        color: #797d82;
        font-size: 13px;
        padding: 0 12%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      i {
        position: absolute;
        right: 15px;
        top: 0;
        margin-top: 36px;
      }
    }
    .showDate {
      height: 49px;
      display: flex;
      align-items: center;
      overflow-x: auto;
      overflow-y: hidden;
      transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
      position: relative;
      ul {
        display: flex;

        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 100%;
        li {
          text-align: center;

          height: 16px;
          line-height: 16px;
          font-size: 14px;
          cursor: pointer;
          span {
            text-align: center;
            height: 16px;
            line-height: 16px;
            font-size: 16px;
            cursor: pointer;
          }
        }
        .active {
          color: #ff5f16;
        }
        .todo_border {
          position: absolute;
          margin: auto;
          top: 30px;
          left: 0;
          transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
          transform: translate3d(0%, 0px, 0px);

          span {
            border-bottom: 2px solid #ff5f16;
            border-radius: 20px;
            display: block;
            margin: auto;
          }
        }
      }
    }
    .show_time {
      @include border-top;
      @include border-bottom;
      box-sizing: border-box;
      display: flex;
      height: 74px;
      padding: 15px;
      position: relative;
      background: #fff;
      &_showing {
        width: 100px;
        flex: 1;
        :first-child {
          margin-top: 4px;
          font-size: 18px;
        }
        :last-child {
          font-size: 15px;
          color: #797d82;
          margin-top: 8px;
        }
      }
      &_middle {
        flex: 1;
        :first-child {
          margin-top: 4px;
          font-size: 18px;
        }
        :last-child {
          font-size: 15px;
          color: #797d82;
          margin-top: 8px;
        }
      }
      &_right {
        display: flex;
        padding: 10px 0;
        line-height: 25px;
        color: #ff5f16;
        .right_momey {
          padding-right: 20px;
          font-size: 15px;
          :first-child {
            font-size: 10px;
          }
        }
        .buy_tickets {
          @include border-small;
          font-size: 14px;
          height: 25px;
          width: 50px;
          border-radius: 2px;
          position: relative;
          text-align: center;
        }
      }
    }
  }
}
</style>
