<template>
  <v-app-bar
      id="top-app-bar"
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
        @click="drawer = !drawer"
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
import { sync } from 'vuex-pathify'

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
  computed: {
    drawer: sync('drawer'),
  },
}
</script>

<style scoped>

</style>