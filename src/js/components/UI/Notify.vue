<template>
  <div>
    <loginModal v-show="showModalView === 'login'" @close="closeModalView"/>
  </div>
</template>

<script>
import loginModal from '@/components/UI/modals/Login.vue'
export default {
  name: "Notify",
  components: {loginModal},
  computed: {
    showModalView(){
      return this.$store.getters.getModalView
    }
  },
  methods: {
    closeModalView(){
      this.$store.dispatch('setModalView', null)
    }
  },
}
</script>

<style scoped>

</style>
