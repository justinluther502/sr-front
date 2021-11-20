<template>
  <v-container
      id="regular-tables-view"
      fluid
      tag="section"
  >
    <v-row justify="center">
      <v-col
          cols="12"
          md="8"
      >
        <material-card
            color="white"
            icon="mdi-account-outline"
        >
          <template #title>
            Top 8 —
            <small class="text-body-1">
              8 Rowers with highest MMRs
            </small>
          </template>
          <v-simple-table>
            <thead>
              <tr>
                <th>
                  Last Name
                </th>
                <th>
                  First Name
                </th>
                <th>
                  MMR
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="rower in rowers" :key="rower.id">
                <td>
                  {{ rower.last_name }}
                </td>
                <td>
                  {{ rower.first_name }}
                <td>
                  {{ rower.mmr.toFixed(2) }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>

        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {default as axios} from "axios"
import MaterialCard from "@/components/MaterialCard"

export default {
  name: "Dashboard.vue",
  components: {
    MaterialCard
  },
  data() {
    return {
      rowers: null,
    }
  },
  mounted() {
    const tgt = process.env.VUE_APP_BASE_API + 'rowers/'
    axios.get(tgt)
        .then((response) => {
          // sort rowers by descending mmr and take top 8
          this.rowers = response.data
              .sort((a, b) => b.mmr - a.mmr)
              .slice(0, 8)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
  },
}
</script>

<style scoped>

</style>