<template>
  <v-container
      id="regular-tables-view"
      fluid
      tag="section"
  >
    <section class="mb-12 text-center">
      <h1 class="mb-2 text-h3">Rowing Roster</h1>
    </section>

    <material-card
        icon="mdi-clipboard-text"
        icon-small
        title="Rowers"
        color="accent"
    >
      <v-simple-table>
        <thead>
        <tr>
          <th class="primary--text">
            ID
          </th>
          <th class="primary--text">
            Last
          </th>
          <th class="primary--text">
            First
          </th>
          <th class="primary--text">
            Height
          </th>
          <th class="primary--text">
            MMR
          </th>
        </tr>
        </thead>

        <tbody>
        <tr
            v-for="rower in rowers"
            :key="rower.id"
        >
          <td>{{ rower.id }}</td>
          <td>{{ rower.last_name }}</td>
          <td>{{ rower.first_name }}</td>
          <td>{{ rower.height_ft }}' {{ rower.height_in }}"</td>
          <td>{{ rower.mmr }}</td>
        </tr>
        </tbody>
      </v-simple-table>
    </material-card>
    <v-card-text style="height: 100px; position: relative">
      <v-fab-transition>
        <v-btn
            color="pink"
            dark
            top
            left
            fab
            to="new/"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>
  </v-container>
</template>

<script>
import MaterialCard from "@/components/MaterialCard"

const axios = require('axios').default
export default {
  name: 'RowersView',
  components: {
    MaterialCard,
  },
  data() {
    return {
      rowers: null,
    }
  }
  ,
  mounted() {
    const tgt = process.env.VUE_APP_BASE_API + 'rowers/'
    axios.get(tgt)
        .then((response) => {
          // handle success
          this.rowers = response.data
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
  }
  ,
}
</script>
