<template>
  <v-fade-transition mode="out-in">
    <v-app>
      <top-bar
          v-on:toggleDrawer="drawer = !drawer"
      />
      <side-drawer :drawer="drawer"
      />
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </v-fade-transition>
</template>

<script>
// Styles
import '@/styles/overrides.sass'
import TopBar from "@/components/TopBar"
import SideDrawer from "@/components/SideDrawer"

export default {
  name: 'App',
  metaInfo: {
    title: 'Open Water',
    titleTemplate: '%s | Open Water',
    htmlAttrs: {lang: 'en'},
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
  },
  components: {
    TopBar,
    SideDrawer
  },
  data() {
    return {
      drawer: false
    }
  }
}
</script>
