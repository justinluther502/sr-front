<template>
  <v-list
      expand
      nav
      v-bind="$attrs"
      v-on="$listeners"
  >
    <template v-for="(item, i) in items">
      <drawer-list-group
          v-if="item.items"
          :key="`group-${i}`"
          :item="item"
      />

      <drawer-list-item
          v-else
          :key="`item-${i}`"
          :item="item"
      />
    </template>
  </v-list>
</template>

<script>
import DrawerListGroup from "@/components/DrawerListGroup"
import DrawerListItem from "@/components/DrawerListItem"

export default {
  name: "DrawerList.vue",
  components: {
    DrawerListGroup,
    DrawerListItem,
  },

  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style scoped>

</style>