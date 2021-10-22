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
                <v-col>
                  <v-date-picker
                      color="primary"
                      landscape
                      v-model="picker"
                  ></v-date-picker>
                </v-col>
                <v-col v-if="rowersLoaded && hullsLoaded">
                  <v-row dense>
                    <v-col align="center">
                      <h3>Boats</h3>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-select
                          color="purple"
                          label="Winning Boat"
                          :items="hulls"
                          item-text="make"
                          v-model="winboat"
                          return-object
                      />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-select
                          color="purple"
                          label="Losing Boat"
                          :items="hulls"
                          item-text="make"
                          v-model="loseboat"
                          return-object
                      />
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col>
                      <v-divider/>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-row dense>
                        <v-col align="center">
                          <h3>Winners</h3>
                        </v-col>
                      </v-row>
                      <v-row
                          dense
                          v-for="(winner, idx) in winners"
                          :key="idx"
                      >
                        <v-col>
                          <v-select
                              color="purple"
                              label="Winner"
                              :items="rowers"
                              item-text="last_name"
                              v-model="winners[idx]"
                              return-object
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                      <v-row dense>
                        <v-col align="center">
                          <h3>Losers</h3>
                        </v-col>
                      </v-row>
                      <v-row
                          dense
                          v-for="(loser, idx) in losers"
                          :key="idx"
                      >
                        <v-col>
                          <v-select
                              color="purple"
                              label="Loser"
                              :items="rowers"
                              item-text="last_name"
                              v-model="losers[idx]"
                              return-object
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col align="center">
                      <v-btn
                          shaped
                          color="cyan"
                          v-on:click="addCrewMembers">
                        Bigger Boat
                      </v-btn>
                    </v-col>
                    <v-col align="center">
                      <v-btn
                          shaped
                          color="cyan"
                          v-on:click="removeCrewMembers">
                        Smaller Boat
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-divider/>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col align="center">
                      <h3>Other Info</h3>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col>
                      <v-checkbox v-model="draw" label="Was this a draw?"/>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col>
                      <v-btn
                          block
                          v-on:click="submitRace"
                          color="primary"
                          dark
                      >
                        Submit
                      </v-btn>
                    </v-col>
                  </v-row>

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
      rowersLoaded: false,
      hullsLoaded: false,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() *
          60000)).toISOString().substr(0, 10),
      draw: false,
      winners: [null],
      losers: [null],
      winboat: null,
      loseboat: null,
      race: {
        first: "",
        second: "",
      },
      rowers: null,
      hulls: null
    }
  },
  methods: {
    addCrewMembers() {
      this.winners.push('')
      this.losers.push('')
    },
    removeCrewMembers() {
      this.winners.pop()
      this.losers.pop()
    },
    getRowers() {
      const tgt = process.env.VUE_APP_BASE_API + 'rowers/'
      axios.get(tgt)
          .then((response) => {
            // handle success
            this.rowers = response.data
            this.rowersLoaded = true
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            // always executed
          })
    },
    getHulls() {
      const tgt = process.env.VUE_APP_BASE_API + 'hulls/'
      axios.get(tgt)
          .then((response) => {
            // handle success
            this.hulls = response.data
            this.hullsLoaded = true
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            // always executed
          })
    },
    submitRace() {
      const tgt = process.env.VUE_APP_BASE_API + 'races/'
      let race = {}
      race.date = this.picker
      race.winner_hull = this.winboat
      race.loser_hull = this.loseboat
      race.winner_crew = this.winners
      race.loser_crew = this.losers
      race.draw = this.draw

      axios.post(tgt, race)
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
    this.getRowers()
    this.getHulls()
  },
}
</script>

<style scoped>

</style>