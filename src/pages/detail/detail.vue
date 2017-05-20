<template>
    <div id='proCast'>
      <h1 class='tit'>项目详情页</h1>
      <div class="emptyBg">
      
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'proCast',
    data() {
      return {};
    }
  };

</script>

<style lang="scss">
  @import 'src/style/mixin';

  #list{
    @include wh(100%,100%);
   .tit{
     height:2.2rem;
     @include font(0.85rem, 2.2rem);
     color:$fc;
     text-align:center;
   }
     }
</style>