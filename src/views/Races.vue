<template>
  <v-container
      id="rower-detail-view"
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
            icon="mdi-timer"
        >
          <template #title>
            Input a Race
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row v-for="(winner, idx) in winners" :key="winner">
                <v-col
                    cols="12"
                    md="6"
                >
                  <v-select
                      color="purple"
                      label="Winner"
                      :items="rowers"
                      item-text="last_name"
                      v-model="winners[idx]"
                  />
                  {{winner}}
                  {{idx}}
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                >
                  <v-select
                      color="purple"
                      label="Loser"
                      :items="rowers"
                      item-value="id"
                      item-text="last_name"
                      v-model="losers[idx]"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn v-on:click="winners.push('asdf')">Add Rowers</v-btn>
                </v-col>
                <v-col>
                  <v-btn v-on:click="team_size--">Remove Rowers</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn v-on:click="submitRower">Submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
    </v-row>
    {{winners}}
  </v-container>
</template>

<script>
import MaterialCard from "@/components/MaterialCard"
import {default as axios} from "axios"

export default {
  name: "Races.vue",
  components: {
    MaterialCard
  },
  data() {
    return {
      winners: [],
      losers: [],
      race: {
        first: "",
        second: "",
      },
      rowers: null,
    }
  },
  methods: {
    submitRower() {
      const tgt = process.env.VUE_APP_BASE_API + 'races/'
      axios.post(tgt, this.race)
          .then((response) => {
            // handle success
            console.log(response)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            // always executed
          })
    },
  },
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
  },
}
</script>

<style scoped>

</style>