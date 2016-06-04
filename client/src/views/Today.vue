<template lang="jade">
#today
  #today-topbar
    topbar(title="每日博物展", :left-link="{ name: 'archive' }", :left-image="topbar.leftImage", left-alt="往期博物展", :right-link="{ name: 'login_oauth' }")
  #today-banner.am-margin-vertical
    .am-text-center
      span 物境未觉，与您一起发现时光里的珍物
      br
      span 共建游历初心的物件文化
      br
      span 感受万物欢喜，体会万物动情
  #today-galleries.am-container.am-padding-0
    .am-text-center.am-margin-xl(v-if="$loadingRouteData")
      span.am-icon-circle-o-notch.am-icon-spin.am-icon-lg
      h3.am-margin-top-xl 正在努力加载中...
    template(v-else)
      gallery.am-margin-bottom(v-for="entry in data", :data="entry.gallery", transition="scale-up-in")
      p.am-text-center 点击左上角查看更多往期博物馆
</template>

<script>
export default {
  data: function () {
    return {
      topbar: { leftImage: require('assets/archive.png') },
      data: null
    }
  },
  route: {
    activate: function (transition) {
      this.$root.configJweixin({
        share_content: {
          title: '每日博物展 - 物境未觉',
          desc: '物境未觉，与您一起发现时光里的珍物，共建游历初心的物件文化，感受万物欢喜，体会万物动情！',
          link: window.location.href,
          imgUrl: 'http://hiwu.ren/static/img/logo-black-1024.7747d72.png'
        }
      })

      transition.next()
    },
    data: function (transition) {
      this.$http({
        url: this.$root.apiUrl + '/SelectedGalleries/publicView',
        method: 'GET'
      }).then((res) => {
        transition.next({
          data: res.data.slice(0, 8)
        })
      })
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

#today-galleries {
  p.am-text-center { color: $grey; }
}
</style>
