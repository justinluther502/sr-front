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
              <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                  <v-text-field
                      color="purple"
                      label="First Thing"
                      v-model="race.first"
                  />
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                >
                  <v-text-field
                      color="purple"
                      label="Second Thing"
                      v-model="race.second"
                  />
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
      race: {
        first: "",
        second: "",
      },
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
    }
  }
}
</script>

<style scoped>

</style>