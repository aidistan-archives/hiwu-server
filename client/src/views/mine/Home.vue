<template lang="jade">
#mine
  #mine-topbar
    topbar(title="我的博物馆", :right-link="{ name: 'today' }")
</template>

<script>
export default {
  data: function () {
    return {
      data: null
    }
  },
  route: {
    activate: function (transition) {
      this.$root.configJweixin({
        share_content: false
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
