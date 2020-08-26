<template>
  <div />
</template>
<script>
export default {
  fetch({ store }) {
    store.dispatch('userLogin', true)
  },
  created() {
    this.$router.replace('/')
  },
}
</script>
