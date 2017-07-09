<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper"></div>
      <div class="recomend-list">
        <h1 class="list-title">热门歌单推荐</h1>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme


</style>
