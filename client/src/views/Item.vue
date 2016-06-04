<template lang="jade">
#item
  #item-topbar
    topbar.am-margin-bottom-sm(:title="topbarTitle", :left-link="{ name: 'gallery', params: { gallery_id: data.galleryId } }")
    .am-text-center.am-margin-xl(v-if="$loadingRouteData")
      span.am-icon-circle-o-notch.am-icon-spin.am-icon-lg
      h3.am-margin-top-xl 正在努力加载中...
    .am-container.am-padding-0(v-else)
      #item-photo-wrapper.am-margin-0
        .am-u-sm-12.am-u-md-9.am-u-lg-6.am-u-sm-centered.am-padding-0
          img.am-img-responsive.am-center(:src="photo")
          .am-g.am-g-collapse.am-margin-top-sm(v-if="data.photos.length > 1")
            .am-u-sm-2.am-u-md-1.am-u-end(v-for="photo in data.photos", style="margin-right: 5px;")
              image-square(:src="photo.url", @click="change(photo.url)")
            .am-u-sm-2.am-u-md-1
              .am-margin-xs
                image-square.am-round(:src="data.hiwuUser.avatar")
      #item-desc-wrapper.am-margin-0
        .am-u-sm-12.am-u-md-9.am-u-lg-6.am-u-sm-centered.am-padding-0
          #item-desc.am-margin-top-sm.am-padding.am-padding-top-lg
            header#item-desc-header.am-margin-bottom-lg
              h2.am-text-xl.am-margin-0 {{ data.name }}
                img.am-fr(:src="likeImage")
                i.am-fr.am-icon-comments-o.am-margin-right
              span {{ date }} {{ data.city }}
              span.am-fr {{ data.likes }}
              span.am-fr.am-margin-right {{ data.comments.length }}
            #item-desc-content
              p(v-for="desc in descriptions") {{ desc }}
            #item-desc-divider
            #item-comments
              div(v-for="comment in data.comments")
                span(v-if="comment.toId == null") {{ comment.hiwuUser.nickname }}：
                spen(v-else) {{ comment.hiwuUser.nickname }} 回复 {{ comment.toUser.nickname }}：
                span {{ comment.content }}
</template>

<script>
export default {
  data: function () {
    return {
      data: {
        name: '加载中...',
        description: '',
        hiwuUser: { avatar: '' },
        photos: [{ url: '' }],
        comments: []
      },
      photo: '',
      likeImage: require('assets/icon-like.png')
    }
  },
  computed: {
    topbarTitle: function () {
      return this.$loadingRouteData ? '加载中' : this.data.hiwuUser.nickname + '的博物馆'
    },
    date: function () {
      var date = ''
      if (this.data.date_y > 0) {
        date += this.data.date_y + '年'
      }
      if (this.data.date_m > 0) {
        date += this.data.date_m + '月'
      }
      if (this.data.date_d > 0) {
        date += this.data.date_d + '日'
      }
      return date
    },
    descriptions: function () {
      return this.data.description.split('\n')
    }
  },
  route: {
    data: function (transition) {
      this.$http({
        url: this.$root.apiUrl + '/Items/' + this.$route.params.item_id + '/publicView',
        headers: {
          Authorization: this.$root.accessToken
        }
      }).then((res) => {
        this.data = res.data
        this.photo = this.data.photos[0].url

        this.$root.configJweixin({
          share_content: {
            title: this.data.name + ' - 物境未觉',
            desc: this.data.description.toString(),
            link: window.location.href,
            imgUrl: this.photo + '@!200x200'
          }
        })

        transition.next()
      })
    }
  },
  methods: {
    change: function (url) {
      this.photo = url
    }
  },
  components: {
    topbar: require('components/Topbar'),
    'image-square': require('components/ImageSquare')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#item-desc {
  background-color: #fff;
}

#item-desc-header {
  h2 {
    height: 40px;

    img {
      width: 36px;
      height: 36px;
    }

    i {
      color: $grey;
      font-size: 36px;
      line-height: 36px;
    }

    img, i {
      cursor: pointer;
    }
  }

  span {
    color: $grey;

    &.am-fr {
      width: 36px;
      text-align: center;
    }
  }
}

#item-desc-divider {
  background: $grey-lighter;
  height: 2px;
}

#item-comments div:first-child {
  margin-top: 16px;
}
</style>
