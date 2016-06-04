<template lang="jade">
a.item-card.am-g.am-g-collapse(v-link="link")
  .am-u-sm-4
    .am-margin-sm
      image-square(:src="data.photos[0].url", :href="link")
  .am-u-sm-8
    .am-margin-sm
      h3.am-text-lg {{ data.name }}
    .am-margin-sm {{ shortDescription }}
</template>

<script>
export default {
  data: function () {
    return {
      shortDescription: ''
    }
  },
  props: ['data', 'link'],
  attached: function () {
    setTimeout(() => {
      var eles = window.$(this.$el).find('.am-margin-sm')

      var lineNum = Math.floor((window.$(eles[0]).height() - window.$(eles[1]).height() - 20) / 25.6)
      var charNumPerLine = Math.floor(window.$(eles[2]).width() / 16)

      this.shortDescription = this.data.description.slice(0, (charNumPerLine - 1) * lineNum)
      if (this.shortDescription.length < this.data.description.length) {
        this.shortDescription += '...'
      }
    }, 50)
  },
  components: {
    'image-square': require('components/ImageSquare')
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.item-card {
  display: block;
  color: inherit;
  background-color: #fff;

  h3 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
