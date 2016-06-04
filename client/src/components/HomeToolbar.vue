<template lang="jade">
.home-toolbar
  a.am-margin-right-lg(href="https://itunes.apple.com/cn/app/wu-jing-wei-jue/id1102745365", target="_blank")
    span.am-icon-apple.am-icon-sm
  a.am-margin-right-lg.am-icon-android.am-icon-sm
  a.am-margin-right-lg.am-icon-globe.am-icon-sm(v-link="{ name: 'today' }", href="javascript:;")
  a.am-margin-right-lg(href="http://weibo.com/hiwuren", target="_blank")
    span.am-icon-weibo.am-icon-sm
  a.am-icon-weixin.am-icon-sm(@click="showQRcode", href="javascript:;")
</template>

<script>
export default {
  methods: {
    showQRcode: function () {
      window.$('#home-qrcode2weixin').modal({ width: 268 })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.am-icon-android {
  color: $grey-light;
}

.am-icon-apple,
.am-icon-globe,
.am-icon-weibo,
.am-icon-weixin {
  color: $grey-dark;
}
</style>
