<template lang="jade">
a.gallery-line.am-padding-horizontal.am-padding-vertical-sm(v-link="link")
  .thumb
    img.am-img-responsive.am-circle(:src="data.hiwuUser.avatar", width="40", height="40")
  .title.am-margin-horizontal {{ title }}
  .badge.am-text-sm {{ data.items.length }} 件
</template>

<script>
export default {
  props: ['data', 'link'],
  computed: {
    title: function () {
      return this.data.hiwuUser.nickname + '「' + this.data.name + '」'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.gallery-line {
  color: inherit;
  background-color: #fff;

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
</style>
