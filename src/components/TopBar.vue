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
        class="hidden-md-and-up"
        @click="drawer = !drawer"
    />
    <v-btn
    class="ml-3 mr-4"
    elevation="1"
    fab
    small
    @click="mini = !mini"
  >
    <v-icon>
      {{ mini ? 'mdi-format-list-bulleted' : 'mdi-dots-vertical' }}
    </v-icon>
  </v-btn>

    <v-toolbar-title
        class="font-weight-light text-h5"
        v-text="$route.name"
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
  computed: {
    drawer: sync('drawer'),
    mini: sync('mini'),
  },
}
</script>

<style scoped>

</style>