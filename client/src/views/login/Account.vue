<template lang="jade">
#login.am-center
  .am-g.am-padding-xl
    .am-u-sm-8.am-u-sm-centered
      img.am-img-responsive.am-center(src="../../assets/logo-black-1024.png", alt="物境未觉")
  .am-g
    .am-u-sm-10.am-u-sm-centered
      form.am-form
        .am-form-group
          input(type="text", v-model="username", placeholder="用户名")
        .am-form-group
          input(type="password", v-model="password", placeholder="密码")
        .am-form-group
          a.am-btn.am-btn-primary.am-btn-block(@click="login") 登陆
  .am-g.am-margin-bottom.am-text-center
      a.am-link-muted.am-text-sm(v-link="{ name: 'login_oauth' }") 社交账号登陆 &gt;
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  ready: function () {
    window.$('#login').height(window.$(window).height())
  },
  methods: {
    login: function () {
      if (this.username === '') return

      this.$http({
        url: this.$root.apiUrl + '/HiwuUsers/simpleLogin',
        method: 'POST',
        params: {
          username: this.username
        }
      }).then((res) => {
        this.$root.login(res.data)
        this.$router.go({ name: 'today' })
      })
    }
  }
}
</script>

<style lang="scss">
#login {
  max-width: 600px;

  .am-g:last-child { position: absolute; left: 0; bottom: 0; }
}
</style>
