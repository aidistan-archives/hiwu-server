<template lang="jade">
a.gallery-card.am-padding-sm(v-link="{ name: 'gallery', params: { gallery_id: data.id } }")
  header.am-padding-horizontal-xs.am-margin-bottom-sm
    .thumb
      img.am-img-responsive.am-circle.am-fl(:src="data.hiwuUser.avatar", width="40", height="40")
    .title.am-margin-horizontal {{ data.hiwuUser.nickname }}「{{ data.name }}」
    .badge.am-text-sm {{ data.items.length }} 件
  .am-g.am-g-collapse
    .gallery-card-image-wrapper.am-u-sm-4.am-u-md-3.am-u-lg-2.am-u-end(v-for="item in featureItems", style="padding: 2px;")
      image-square(:src="item.photos[0].url", :href="{ name: 'item', params: { item_id: item.id } }")
</template>

<script>
export default {
  props: ['data'],
  computed: {
    featureItems: function () {
      return this.data.items.slice(0, 12)
    }
  },
  components: {
    'image-square': require('components/ImageSquare')
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.gallery-card {
  display: block;

  color: inherit;
  background-color: #fff;

  header {
    display: flex;
    align-items: center;

    .thumb,
    .badge {
      flex: none;
    }

    .title {
      flex: auto;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .badge {
      padding-top: 3px;
      color: $grey;
    }
  }
}

.gallery-card-image-wrapper {
  @media #{$small-only} {
    &:nth-child(n + 10) {
      display: none;
    }
  }
}
</style>
