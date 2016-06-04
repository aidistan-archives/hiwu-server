<template lang="jade">
#home
  #home-slide-1.slide
    header
      img(src="../assets/home-title.png")
      .home-links.am-fr.am-hide-sm-only
        a.am-margin-right-lg(href="https://itunes.apple.com/cn/app/wu-jing-wei-jue/id1102745365", target="_blank")
          span.am-icon-apple.am-icon-sm
        span.am-margin-right-lg.am-icon-android.am-icon-sm
        span.am-margin-right-lg.am-icon-globe.am-icon-sm(v-link="{ name: 'today' }")
        a.am-margin-right-lg(href="http://weibo.com/hiwuren", target="_blank")
          span.am-icon-weibo.am-icon-sm
        span.am-icon-weixin.am-icon-sm(@click="showQRcode")
    p.am-center.am-text-lg 很久很久以前，奇怪的生物在地球上出现，他们可以制造物件，可以改变世界，他们被称为人类！
    img.am-img-responsive.am-center(src="../assets/home-slide-1.png", :style="imgStyle")
  #home-slide-2.slide
    p.am-center.am-text-lg 人类在地球的日子里，发明了很多物件，它们丰富生活，改变生活，也随著生活更新换代！
    img.am-img-responsive.am-center(src="../assets/home-slide-2.png", :style="imgStyle")
  #home-slide-3.slide
    p.am-center.am-text-lg 它们承载了往事，寄托了情怀，蕴藏了初心，与人一同相伴，游历独一无二的时光！
    img.am-img-responsive.am-center(src="../assets/home-slide-3.png", :style="imgStyle")
  #home-slide-4.slide
    p.am-center.am-text-lg 物境未觉，与您一起发现时光里的珍物，共建游历初心的物件文化，感受万物欢喜，体会万物动情！
    .home-links.am-text-center.am-margin-vertical
      a.am-margin-right-lg(href="https://itunes.apple.com/cn/app/wu-jing-wei-jue/id1102745365", target="_blank")
        span.am-icon-apple.am-icon-sm
      span.am-margin-right-lg.am-icon-android.am-icon-sm
      span.am-margin-right-lg.am-icon-globe.am-icon-sm(v-link="{ name: 'today' }")
      a.am-margin-right-lg(href="http://weibo.com/hiwuren", target="_blank")
        span.am-icon-weibo.am-icon-sm
      span.am-icon-weixin.am-icon-sm(@click="showQRcode")
    img.am-img-responsive.am-center(src="../assets/home-slide-4.png", :style="imgStyle")
    footer.am-text-xs.am-text-center.am-margin-xs
      div &copy;2015-2016 上海逗物信息技术有限公司
      div 沪ICP备15037655号-1
  #home-qrcode2wxmp.am-modal.am-modal-no-btn(tabindex="-1")
    .am-modal-dialog
      .am-modal-hd 物境未觉
        a.am-close.am-close-spin(href="javascript: void(0)", data-am-modal-close=true) &times;
      .am-modal-bd
        img.am-img-responsive(src="../assets/qrcode.jpg", alt="物境未觉公众号二维码")
</template>

<script>
export default {
  data: function () {
    return {
      slide: { no: 1, max: 4 },
      imgStyle: { maxHeight: 0 }
    }
  },
  ready: function () {
    this.initSlides()
    this.imgStyle = {
      maxHeight: window.$(window).height() -
        window.$('#home-slide-1').find('img:last-child').position().top + 'px'
    }
  },
  route: {
    activate: function (transition) {
      this.$root.configJweixin({
        share_content: {
          title: '物境未觉',
          desc: '物境未觉，与您一起发现时光里的珍物，共建游历初心的物件文化，感受万物欢喜，体会万物动情！',
          link: window.location.href,
          imgUrl: 'http://hiwu.ren/static/img/logo-black-1024.7747d72.png'
        }
      })

      transition.next()
    }
  },
  methods: {
    initSlides: function () {
      this.resizeSlides()
      window.$(window).scrollTop(0).resize(this.resizeSlides)

      var lastWheelTimeStamp
      window.$('body').on('wheel', (e) => {
        if (window.$('#home').length === 0) return
        if (!lastWheelTimeStamp || e.timeStamp - lastWheelTimeStamp > 500) {
          lastWheelTimeStamp = e.timeStamp
          if (e.originalEvent.deltaY > 0) {
            this.slideDown()
          } else {
            this.slideUp()
          }
        }
        return false
      })

      var Hammer = window.$.AMUI.Hammer
      var hammertime = new Hammer(document.getElementById('home'))
      hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL })
      hammertime.on('swipeup', this.slideDown).on('swipedown', this.slideUp)
    },
    resizeSlides: function () {
      window.$('#home .slide').css({
        width: window.$(window).width(),
        height: window.$(window).height()
      })
    },
    slideUp: function () {
      if (this.slide.no > 1) {
        window.$(window).smoothScroll({
          position: window.$('#home-slide-' + (--this.slide.no)).position().top
        })
      }
    },
    slideDown: function () {
      if (this.slide.no < this.slide.max) {
        window.$(window).smoothScroll({
          position: window.$('#home-slide-' + (++this.slide.no)).position().top
        })
      }
    },
    showQRcode: function () {
      window.$('#home-qrcode2wxmp').modal({ width: 268 })
    }
  },
  components: {
    topbar: require('components/Topbar'),
    gallery: require('components/GalleryCard')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#home {
  width: 100%;

  .slide { position: relative; }
  @media screen and (min-width: 641px) { .slide { padding: 40px; } }
  @media screen and (max-width: 640px) { .slide { padding: 20px; } }

  .am-icon-android {
    cursor: default;
    color: $grey-light;
  }

  .am-icon-apple,
  .am-icon-globe,
  .am-icon-weibo,
  .am-icon-weixin {
    cursor: pointer;
    color: $grey-dark;
  }

  p {
    font-family:'JetLinkMediumSt81f81195423';
    text-align: center;
    max-width: 600px;
    margin-top: 50px;
    margin-bottom: 70px;
  }

  footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
