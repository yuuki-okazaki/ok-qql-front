<template>
  <v-app>
    <div :is="currentHeader" />
    <v-content>
      <nuxt />
    </v-content>
    <my-footer v-if="!$store.state.loggedIn" />
  </v-app>
</template>

<script>
import myHeader from '~/components/shared/header.vue'
import loginHeader from '~/components/shared/loginHeader.vue'
import myFooter from '~/components/shared/footer.vue'

export default {
  components: {
    myHeader,
    loginHeader,
    myFooter,
  },
  computed: {
    currentHeader() {
      return this.$store.state.loggedIn ? 'loginHeader' : 'myHeader'
    },
  },
}
</script>
