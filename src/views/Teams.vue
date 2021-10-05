<template>
  <v-container
      id="regular-tables-view"
      fluid
      tag="section"
  >
    <section class="mb-12 text-center">
      <h1 class="mb-2 text-h3">Racing Hulls</h1>
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
            Date
          </th>
          <th class="primary--text">
            Hull ID
          </th>
        </tr>
        </thead>

        <tbody>
        <tr
            v-for="boat in boats"
            :key="boat.id"
        >
          <td>{{ boat.id }}</td>
          <td>{{ boat.date }}</td>
          <td>{{ boat.hull }}</td>
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
  name: 'TeamsView',
  components: {
    MaterialCard,
  },
  data() {
    return {
      boats: null,
    }
  }
  ,
  mounted() {
    const tgt = process.env.VUE_APP_BASE_API + 'boats/'
    axios.get(tgt)
        .then((response) => {
          // handle success
          this.boats = response.data
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
