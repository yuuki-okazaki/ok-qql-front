<template>
  <v-app>
    <my-header />
    <v-content>
      <!-- ここに自由に追記 -->
    </v-content>
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
  data: () => ({
    appName: process.env.APP_NAME,
  }),
}
</script>
