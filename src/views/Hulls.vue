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
        title="Hulls"
        color="white"
    >
      <v-simple-table>
        <thead>
        <tr>
          <th class="primary--text">
            ID
          </th>
          <th class="primary--text">
            Make
          </th>
          <th class="primary--text">
            Size
          </th>
          <th class="primary--text">
            Year
          </th>
          <th/>
        </tr>
        </thead>

        <tbody>
        <tr
            v-for="hull in hulls"
            :key="hull.id"
        >
          <td>{{ hull.id }}</td>
          <td>{{ hull.make }}</td>
          <td>{{ hull.size }}</td>
          <td>{{ hull.year }}</td>
          <td>
            <v-btn
                color="purple"
                dark
                top
                left
                fab
                x-small
                :to="{ name: 'Hull Detail', params: { id: hull.id }}"
            >
              <v-icon>mdi-account-edit</v-icon>
            </v-btn>
          </td>
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
  name: 'HullsView',
  components: {
    MaterialCard,
  },
  data() {
    return {
      hulls: null,
    }
  }
  ,
  mounted() {
    const tgt = process.env.VUE_APP_BASE_API + 'hulls/'
    axios.get(tgt)
        .then((response) => {
          // handle success
          this.hulls = response.data
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
