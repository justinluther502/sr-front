<template>
  <v-navigation-drawer
      id="side-drawer"
      v-model="drawer"
      dark
      :right="$vuetify.rtl"
      app
      width="260"
  >

    <div class="px-2">
      <drawer-header/>

      <v-divider class="mx-3 mb-2"/>

      <drawer-list :items="items"/>
    </div>

    <template #append>
      <div class="pa-4 text-center">
        <app-btn
            block
            class="text-none"
            color="secondary"
        >
          <v-icon left>
            mdi-card-account-mail
          </v-icon>
          Talk to us!
        </app-btn>
      </div>
    </template>

    <div class="pt-12"/>
  </v-navigation-drawer>
</template>

<script>
import DrawerHeader from "@/components/widgets/DrawerHeader"
import DrawerList from "@/components/DrawerList"

export default {
  name: "SideDrawer.vue",
  components: {
    DrawerHeader,
    DrawerList
  },
  props: {
    drawer: Boolean,
  }
}
</script>

<style scoped>

</style>