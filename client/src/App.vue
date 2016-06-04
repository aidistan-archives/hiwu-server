<template lang="jade">
#app
  router-view
  #modal.am-modal.am-modal-no-btn(tabindex="-1")
    .am-modal-dialog
      .am-modal-hd {{ modal.title }}
        a.am-close.am-close-spin(href="javascript: void(0)", data-am-modal-close="true") &times;
      .am-modal-bd
</template>

<script>
export default {
  data: function () {
    return {
      userId: this.$utils.getCookie('userId') || null,
      accessToken: this.$utils.getCookie('accessToken') || null,
      oauth2: {
        weixin: 'wx92f55323cbadd8e8',
        weibo: '3167931574'
      },
      modal: {}
    }
  },
  computed: {
    apiUrl: function () {
      if (process.env.NODE_ENV === 'development') {
        return 'http://hiwu.ren/api'
      } else {
        return window.location.protocol + '//' + window.location.host + '/api'
      }
    },
    isLoggedIn: function () {
      return this.userId !== null
    }
  },
  methods: {
    popup: function (title) {
      this.modal = {
        title: title
      }

      window.$('#modal').modal({
        closeViaDimmer: 0
      })
    },
    login: function (accessToken) {
      this.userId = accessToken.userId
      this.$utils.setCookie('userId', accessToken.userId, 14)
      this.accessToken = accessToken.id
      this.$utils.setCookie('accessToken', accessToken.id, 14)
    },
    logout: function () {
      this.userId = null
      this.$utils.setCookie('userId', '', 0)
      this.accessToken = null
      this.$utils.setCookie('accessToken', '', 0)
    },
    configJweixin: function (options) {
      let wx = window.wx

      this.$http({
        url: this.$root.apiUrl + '/Hiwu/jweixinSignature',
        method: 'GET',
        params: {
          url: window.location.href.split('#')[0]
        }
      }).then((res) => {
        wx.config(window.$.extend(res.data, {
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
          ]
        }))

        wx.ready(() => {
          if (options.share_content) {
            wx.onMenuShareTimeline(options.share_content)
            wx.onMenuShareAppMessage(options.share_content)
            wx.onMenuShareQQ(options.share_content)
            wx.onMenuShareWeibo(options.share_content)
            wx.onMenuShareQZone(options.share_content)
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">
@import './variables.scss';

body {
  background-image: url('./assets/background.jpg');
}

.am-container {
  max-width: 1200px;
}

.v-transition {
  width: 100%;
	position: relative;
	top: 0;
	left: 0;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
}

.scale-up-in-transition { @extend .v-transition; }
.scale-up-in-enter { animation: scaleUpIn .7s ease both; }

@keyframes scaleUpIn {
  from { opacity: 0; transform: scale(.8); }
  to { }
}

@keyframes easeRightIn {
  from { transform: translateX(100%);  }
  to { }
}

@keyframes easeLeftOut {
  from { }
  to { transform: translateX(-100%); }
}

@keyframes fallOut {
	0% { transform: rotateZ(0deg); }
	20% { transform: rotateZ(10deg); animation-timing-function: ease-out; }
	40% { transform: rotateZ(17deg); }
	60% { transform: rotateZ(16deg); }
	100% { transform: translateY(100%) rotateZ(17deg); }
}
</style>
