<template lang="jade">
#login.am-center
  .am-g.am-padding-xl
    .am-u-sm-8.am-u-sm-centered
      img.am-img-responsive.am-center(src="../../assets/logo-black-1024.png", alt="物境未觉")
  .am-g
    .am-u-sm-10.am-u-sm-centered
      a.am-btn.am-btn-success.am-btn-lg.am-btn-block.am-margin-bottom-lg(:href="weixinLink")
        i.am-icon-weixin.am-margin-right-sm
        span 微信登陆
      a.am-btn.am-btn-danger.am-btn-lg.am-btn-block.am-margin-bottom-lg(:href="weiboLink")
        i.am-icon-weibo.am-margin-right-sm
        span 微博登陆
  .am-g.am-margin-bottom.am-text-center
    a.am-link-muted.am-text-sm(v-link="{ name: 'login_account' }") 受邀用户登陆 &gt;
</template>

<script>
var qs = require('querystring')

export default {
  computed: {
    weixinLink: function () {
      return 'https://open.weixin.qq.com/connect/qrconnect?' + qs.stringify({
        appid: this.$root.oauth2.weixin,
        redirect_uri: window.location.href.split('?')[0],
        response_type: 'code',
        scope: 'snsapi_login',
        state: 'weixin'
      }) + '#wechat_redirect'
    },
    weiboLink: function () {
      return 'https://api.weibo.com/oauth2/authorize?' + qs.stringify({
        client_id: this.$root.oauth2.weibo,
        redirect_uri: window.location.href.split('?')[0],
        state: 'weibo'
      })
    }
  },
  created: function () {
    let params = qs.parse(window.location.href.split('?')[1])

    if (params.state === 'weixin' && params.code) {
      this.$http({
        url: this.$root.apiUrl + '/HiwuUsers/weixinLogin',
        method: 'POST',
        params: {
          appid: this.$root.oauth2.weixin,
          code: params.code
        }
      }).then((res) => {
        this.$root.login(res.data)
        this.$router.go({ name: 'today' })
      })
    } else if (params.state === 'weibo' && params.code) {
      this.$http({
        url: this.$root.apiUrl + '/HiwuUsers/weiboLogin',
        method: 'POST',
        params: {
          appid: this.$root.oauth2.weibo,
          code: params.code
        }
      }).then((res) => {
        this.$root.login(res.data)
        this.$router.go({ name: 'today' })
      })
    }
  },
  ready: function () {
    window.$('#login').height(window.$(window).height())
  }
}
</script>

<style lang="scss">
#login {
  max-width: 600px;

  .am-g:last-child { position: absolute; left: 0; bottom: 0; }
}
</style>
