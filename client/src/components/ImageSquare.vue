<template lang="jade">
a.image-square(:style="style", v-link="href")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    href: {
      default: null
    }
  },
  computed: {
    style: function () {
      return {
        backgroundImage: 'url(' + this.src + '@!200x200)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.image-square {
  display: block;
  cursor: pointer;

  width: 100%;
  padding-bottom: 100%;

  background-position: center;
  background-size: cover;
}
</style>
