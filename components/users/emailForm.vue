<template>
  <v-text-field
    v-model="setEmail"
    :rules="[rules.match]"
    :disabled="disabled"
    label="メールアドレスを入力"
    outlined
    required
    validate-on-blur
  />
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    rules: {
      match: (value) => /.+@.+\..+/.test(value) || 'フォーマット不正',
    },
  }),
  computed: {
    setEmail: {
      get() {
        return this.email
      },
      set(newVal) {
        return this.$emit('update:email', newVal)
      },
    },
  },
}
</script>
