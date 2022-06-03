<template>
  <div class="top fixed-top">
    <img :src="svgLogo" class="img-responsive" width="114px" height="23.26px" alt="Logo Conexa">
  </div>
</template>

<script>
export default {
  name: 'CustomHeader',
  data: () => ({
    svgLogo: require('../assets/svg/logo-conexa.svg')
  })
}
</script>

<style lang="scss" scoped>
.top{
  background: #FFFFFB;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 17px;
}
@media(max-width: 767px){
  img{
    margin: auto;
  }
  .top{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
