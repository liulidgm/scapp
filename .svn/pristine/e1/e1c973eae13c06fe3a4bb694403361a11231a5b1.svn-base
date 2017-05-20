<template>
  <div ref="itemswrapper">
  <div id="index"  >
    <div id="swiper-container">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../assets/banner.png"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/banner.png"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/banner.png"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="tip_wrapper">
      <span></span>
      <div id="tip_container">
        <span>公告：</span>
        <span>只跑步，不跑路！</span>
      </div>
    </div>
    <div id="item_select_wrapper">
      <div class="item_select_title">
        <span></span>
        <span>精选项目</span>
      </div>
      <div id="item_list_wrapper" >
        <div class="item_list" v-for="item in items">
          <router-link to="/hello">
            <div class="item_title_container">
              <span class="item_title">三农稳健性很牛的项目</span>
              <span class="risk_level">中低</span>
              <span></span>
            </div>
            <div class="item_info">
              <div class="item_left">
                <div class="min_price"><span class="item_num">10</span>万元</div>
                <div class="min_price_tip">最低限购金额</div>
              </div>
              <div class="item_right">
                <div class="target_title"><span>目标金额 200万元</span><span class="item_stage">募集期</span></div>
                <div class="account_done"><span class="num_done">已募集 150万元</span><span class="progress">进度 75%</span></div>
              </div>
            </div>
          </router-link>
        </div>
    </div>

    </div>
  </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import { Swipe, SwipeItem } from 'mint-ui';
  import BScroll from 'better-scroll';
  import {projectGet} from '@/service/getData'

  const ERR_OK = '000';

  export default {
    data() {
      return {
        items:[]
      };
    },
    mounted() {
      //获取精选项目
      projectGet().then(res => {
        if(res.code === ERR_OK){
          this.items = res.projectList;
//          this.$nextTick(() => {
//            this._initScroll();
//          });
        }
      })

    },
    methods:{
      _initScroll() {
        if (!this.itemsScroll) {
          this.itemsScroll = new BScroll(this.$refs.itemswrapper, {
            click: true
          });
        }else{
          this.itemsScroll.refresh();
        }
        console.log(this.itemsScroll)

      }
    },
    components: {
      Swipe,
      SwipeItem
    }
  };

</script>

<style lang="scss">
  @import 'src/style/mixin';

  #index{
    font-size: 0;
    @include wh(100%,100%);
    overflow:hidden;
    #swiper-container{
      height: 8.55rem;
      .mint-swipe {
        .mint-swipe-item{
          img{
            @include wh(100%,auto);
          }
        }
      }
    }
    #tip_wrapper{
      position: relative;
      padding-left: 0.55rem;
      @include wh(100%,1.5rem);
      &::after{
        content: '';
        position: absolute;
        top:1.5rem;
        left:0;
        @include wh(100%,0.25rem);
        background: $bc;
      }
      #tip_container{
        font-size: 0.55rem;
        line-height: 1.5rem;
      }
    }
    #item_select_wrapper{
      margin-top: 0.25rem;
      .item_select_title{
        padding-left: 0.55rem;
        @include wh(100%,2rem)
        font-size: 0.8rem;
        line-height: 2rem;
        @include border-1px($bc)
      }
      #item_list_wrapper{
        padding-left: 0.55rem;
        .item_list{
          @include wh(100%,5.35rem);
          padding-left: 0.27rem;
          @include border-1px($bc)
          .item_title_container{
            @include wh(100%,2.15rem);
            .item_title{
              line-height: 2.15rem;
              font-weight: 600;
              margin-right: 0.85rem;
              font-size:0.65rem;
            }
            .risk_level{
              font-size: 0.55rem;
              color: $rc;
            }

          }
          .item_info{
            font-size: 0.55rem;
            .item_left{
              display: inline-block;
              position: relative;
              padding-right: 2.2rem;
              &:after{
                content: '';
                position: absolute;
                width:1px;
                height:1.67rem;
                right: 0;
                top:0.6rem;
                background: #ddd;
              }
              .min_price{
                color: #ff8e1d;
                font-size: 0.9rem;
                line-height: 1.4rem;
                .item_num{
                  color: #ff8e1d;
                  font-size: 1.3rem;
                  line-height: 1.4rem;
                }
              }
              .min_price_tip{
                font-size: 0.55rem;
                line-height: 1rem;
                color: #999;
              }
            }
            .item_right{
              display: inline-block;
              padding-left: 0.7rem;
              .target_title{
                font-size: 0.65rem;
                line-height: 1.4rem;
                .item_stage{
                  position: relative;
                  color: #ff8e1d;
                  padding-left: 1rem;
                  &:after{
                    content: '';
                    position: absolute;
                    left: 0.5rem;
                    top:0.2rem;
                    width:1px;
                    height: 0.55rem;
                    background: #ddd;
                  }
                }
              }
              .account_done{
                font-size: 0.55rem;
                line-height: 1rem;
                .num_done{
                  color: #999;
                }
                .progress{
                  position: relative;
                  color: #999;
                  padding-left: 1rem;
                  &:after{
                    content: '';
                    position: absolute;
                    left: 0.5rem;
                    top:0.1rem;
                    width:1px;
                    height: 0.55rem;
                    background: #ddd;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
