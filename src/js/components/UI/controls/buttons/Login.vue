<template>
  <button class="btn btnPrimary" @click="setModalView('login')">Login button</button>

</template>

<script>
export default {
  name: "Login",
  methods: {
    setModalView(view) {
      this.$store.dispatch('setModalView', view)
    }
  }
}
</script>

<style scoped>

</style>
