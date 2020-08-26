<template>
  <v-container fluid fill-height>
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <nuxt-link to="/logout">
          ログアウト
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import TodoCard from '~/components/TodoCard.vue'

export default {
  layout({ store }) {
    return store.state.loggedIn ? 'default' : 'home'
  },
}
</script>
