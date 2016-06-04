<template lang="jade">
#gallery
  #gallery-topbar
    topbar.am-margin-bottom(:title="topbarTitle", :left-link="{ name: 'today' }")
  .am-text-center.am-margin-xl(v-if="$loadingRouteData")
    span.am-icon-circle-o-notch.am-icon-spin.am-icon-lg
    h3.am-margin-top-xl 正在努力加载中...
  .am-container.am-padding-0(v-else)
    #gallery-header.am-margin-top.am-margin-bottom-sm
      .am-u-sm-5.am-u-sm-centered
        img.am-img-responsive.am-circle.am-center(:src="data.hiwuUser.avatar")
      .am-u-sm-12.am-margin-top.am-padding-horizontal-lg
        h2.am-text-xl.am-text-center {{ title }}
        p(v-for="desc in descriptions") {{ desc }}
    #gallery-items.am-u-sm-12.am-u-md-6.am-u-lg-4.am-u-end(v-for="item in data.items")
        item(:data="item", :link="{ name: 'item', params: { item_id: item.id } }")
        .gallery-seperator(v-show="$index < data.items.length - 1")
</template>

<script>
export default {
  data: function () {
    return {
      data: {
        name: '',
        description: '',
        items: [],
        hiwuUser: {
          nickname: '',
          avatar: ''
        }
      }
    }
  },
  computed: {
    topbarTitle: function () {
      return this.data.hiwuUser.nickname === '' ? '加载中...' : this.data.hiwuUser.nickname + '的博物馆'
    },
    title: function () {
      return this.data.hiwuUser.nickname + '「' + this.data.name + '」'
    },
    descriptions: function () {
      return this.data.description.split('\n')
    }
  },
  route: {
    data: function (transition) {
      this.$http({
        url: this.$root.apiUrl + '/Galleries/' + this.$route.params.gallery_id + '/publicView',
        method: 'GET'
      }).then((res) => {
        this.data = res.data

        this.$root.configJweixin({
          share_content: {
            title: this.title + ' - 物境未觉',
            desc: this.data.description,
            link: window.location.href,
            imgUrl: this.data.hiwuUser.avatar
          }
        })

        transition.next()
      }, (res) => transition.abort())
    }
  },
  components: {
    topbar: require('components/Topbar'),
    item: require('components/ItemCard')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#gallery-header p {
  color: $grey-dark;
  text-align: justify;
}

#gallery-items {
  @media #{$small-only} {
    padding: 0;
  }
}

.gallery-seperator {
  background: transparent;
  height: 2px;
  border-left:10px solid #fff;
  border-right:10px solid #fff;
}
</style>
