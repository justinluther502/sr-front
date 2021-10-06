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
            color="primary"
            icon="mdi-account-outline"
            v-if="show"
        >
          <template #title>
            Rower Detail—
            <small class="text-body-1">
              Edit Rower Data
            </small>
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
                      label="First Name"
                      v-model="rower.first_name"
                  />
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                >
                  <v-text-field
                      color="purple"
                      label="Last Name"
                      v-model="rower.last_name"
                  />
                </v-col>
                <v-col
                    cols="12"
                    md="3"
                >
                  <v-slider
                      label="Height - ft"
                      discrete
                      min=3
                      max=8
                      step=1
                      thumb-label="always"
                      v-model="rower.height_ft"
                  />
                </v-col>
                <v-col
                    cols="12"
                    md="3"
                >
                  <v-slider
                      label="Height - in."
                      discrete
                      min=0
                      max=12
                      step=1
                      thumb-label="always"
                      v-model="rower.height_in"
                  />
                </v-col>
                <v-col
                    cols="12"
                    md="3"
                >
                  <v-text-field
                      color="purple"
                      label="MMR"
                      disabled
                      v-model="rower.mmr"
                  />
                </v-col>
                <v-col
                    cols="12"
                    md="3"
                >
                  <v-text-field
                      color="purple"
                      label="Stroke MMR"
                      disabled
                      v-model="rower.stroke_mmr"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-btn
            class="text-none"
            color="purple"
            v-on:click="submitRower"
        >
          <v-icon>
            mdi-hand-okay
          </v-icon>
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MaterialCard from "@/components/MaterialCard"

const axios = require('axios').default

export default {
  name: "UserProfile.vue",
  components: {
    MaterialCard
  },
  data() {
    return {
      rower: null,
      show: false
    }
  },
  mounted() {
    const tgt = process.env.VUE_APP_BASE_API + 'rowers/' +
        this.$route.params.id + '/'
    axios.get(tgt)
        .then((response) => {
          // handle success
          this.rower = response.data
          this.show = true
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
  },
  methods: {
    submitRower() {
      const tgt = process.env.VUE_APP_BASE_API + 'rowers/' +
          this.$route.params.id + '/'
      axios.put(tgt, this.rower)
          .then((response) => {
            // handle success
            console.log(response)
            this.$router.push('/rowers')
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            // always executed
          })
    }
  },
}
</script>

<style scoped>

</style>