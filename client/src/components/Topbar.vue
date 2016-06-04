<template lang="jade">
.topbar
  .am-text-center.am-text-lg.am-padding-horizontal.am-padding-vertical-xs {{ title }}
    a.am-fl(v-link="leftLink", :style="{ visibility: leftLink ? 'visible' : 'hidden' }")
      img.am-margin-bottom-xs(v-if="leftImage", :src="leftImage", :alt="leftAlt", width="18", height="18")
      span.am-icon-fw(v-else, :class="['am-icon-' + leftIcon]")
    a.am-fr(v-link="rightLink", :style="{ visibility: rightLink ? 'visible' : 'hidden' }")
      img.am-margin-bottom-xs(src="../assets/logo-primary-48.png", width="25", height="25")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    leftLink: {
      default: false
    },
    leftImage: {
      type: String,
      default: false
    },
    leftAlt: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: 'chevron-left'
    },
    rightLink: {
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.topbar {
  position: relative;

  color: $primary;
  background: rgba($grey-darker, 0.85);
  letter-spacing: 1px;
  box-shadow: 0 1px 3px $grey-dark;

  a {
    color: $primary;
    width: 28.8px;
    height: 28.8px;
  }
}
</style>
