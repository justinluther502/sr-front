<template>
  <v-app-bar
      app
      absolute
      class="v-bar--underline"
      color="transparent"
      :clipped-left="$vuetify.rtl"
      :clipped-right="!$vuetify.rtl"
      height="70"
      flat
  >
    <v-app-bar-nav-icon
        @click="toggleDrawer"
    />

    <v-toolbar-title
        class="font-weight-light text-h5"
        v-text="title"
    />
    <v-spacer/>
    <go-home/>
    <account/>
  </v-app-bar>
</template>

<script>
import Account from "@/components/widgets/Account"
import GoHome from "@/components/widgets/GoHome"

export default {
  name: "TopBar.vue",
  components: {
    Account,
    GoHome
  },
  data() {
    return {
      title: "Open Water",
    }
  },
  methods: {
    toggleDrawer () {
      this.$emit('toggleDrawer')
    }
  }
}
</script>

<style scoped>

</style>