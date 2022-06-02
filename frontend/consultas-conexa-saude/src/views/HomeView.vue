<template>
  <h1>Home</h1>
</template>

<script>
export default {
  name: 'HomeView',
  mounted () {
    this.$http.get('http://localhost:3333/consultations?_expand=patient').then(res => {
      console.log(res)
    })
  }
}
</script>
