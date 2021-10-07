<template>
  <v-container
      id="hull-detail-view"
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
            v-if="show"
        >
          <template #title>
            Hull Detail—
            <small class="text-body-1">
              Edit Hull Data
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
                      label="Make"
                      v-model="hull.make"
                  />
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                >
                  <v-text-field
                      color="purple"
                      label="Size"
                      v-model="hull.size"
                  />
                </v-col>
                <v-col
                    cols="12"
                    md="3"
                >
                  <v-text-field
                      color="purple"
                      label="Year"
                      v-model="hull.year"
                      type="number"
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
            v-on:click="submitHull"
            dark
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
  name: "HullDetail.vue",
  components: {
    MaterialCard
  },
  data() {
    return {
      hull: null,
      show: false
    }
  },
  mounted() {
    const tgt = process.env.VUE_APP_BASE_API + 'hulls/' +
        this.$route.params.id + '/'
    axios.get(tgt)
        .then((response) => {
          // handle success
          this.hull = response.data
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
    submitHull() {
      const tgt = process.env.VUE_APP_BASE_API + 'hulls/' +
          this.$route.params.id + '/'
      axios.put(tgt, this.hull)
          .then((response) => {
            // handle success
            console.log(response)
            this.$router.push('/hulls')
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