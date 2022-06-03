<template>
  <div class="top py-3 pl-2 shadow p-3 mb-5 bg-white fixed-top w-100">
    <img :src="svgLogo" width="114px" height="23.26px" alt="Logo Conexa">
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
</style>
