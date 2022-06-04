<template>
  <div class="content-consultation">
    <h2>{{ consultation.patient.first_name }} {{ consultation.patient.last_name }}</h2>
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemConsultation',
  data: () => ({
    data: ''
  }),
  props: {
    consultation: { type: Object, required: true }
  },
  created () {
    const data = new Date(this.consultation.date)
    const formatData = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    const formatHour = `${data.getHours()}:${data.getMinutes()}`
    this.data = `${formatData} às ${formatHour}`
  }
}
</script>

<style lang="scss" scoped>

</style>
