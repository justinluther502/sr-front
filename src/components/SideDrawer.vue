<template>
  <v-navigation-drawer
      id="side-drawer"
      v-model="drawer"
      dark
      :right="$vuetify.rtl"
      :mini-variant.sync="mini"
      mini-variant-width="80"
      app
      absolute
      width="260"
  >

    <div class="px-2">
      <drawer-header/>

      <v-divider class="mx-3 mb-2"/>

      <drawer-list :items="items"/>
    </div>

    <template #append>
      <div class="pa-4 text-center">
        <v-btn
            block
            class="text-none"
            color="purple"
        >
          <v-icon left>
            mdi-card-account-mail
          </v-icon>
          Talk to us!
        </v-btn>
      </div>
    </template>

    <div class="pt-12"/>
  </v-navigation-drawer>
</template>

<script>
import { sync } from 'vuex-pathify'
import DrawerHeader from "@/components/widgets/DrawerHeader"
import DrawerList from "@/components/DrawerList"

export default {
  name: "SideDrawer.vue",
  components: {
    DrawerHeader,
    DrawerList
  },
  computed: {
    drawer: sync('drawer'),
    mini: sync('mini'),
  },
  data() {
    return {
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/',
        },
        {
          title: 'User Profile',
          icon: 'mdi-account',
          to: '/components/profile/',
        },
        {
          title: 'Rowers',
          icon: 'mdi-account-multiple',
          to: '/rowers/',
        },
        {
          title: 'Hulls',
          icon: 'mdi-anchor',
          to: '/hulls/',
        },
        {
          title: 'Crews',
          icon: 'mdi-account-group',
          to: '/crews/',
        },
      ]
    }
  }
}
</script>

<style lang="sass">
#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>