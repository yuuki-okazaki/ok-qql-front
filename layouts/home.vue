<template>
  <v-app>
    <my-header />
    このページはログイン前のレイアウト「home.vue」が使用されています。
    <my-footer />
  </v-app>
</template>

<script>
import myHeader from '~/components/shared/header.vue'
import myFooter from '~/components/shared/footer.vue'

export default {
  components: {
    myHeader,
    myFooter,
  },
}
</script>
