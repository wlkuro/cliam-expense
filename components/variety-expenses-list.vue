<template>
<v-container fluid>
  <v-card>
    <v-form ref="form" @submit.prevent>
      <v-card-title class="headline">
        申請種別
      </v-card-title>
      <v-card-text>
        <v-col class="d-flex" cols="12" sm="12">
          <v-select
          :items="items"
          label="Outlined style"
          outlined
          ></v-select>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-btn block outlined @click="submit">申請する</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</v-container>
</template>


<script>
export default {
  data() {
    return {
      error: null,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }
  },
  methods: {
    submit() {
      this.$router.push("/form/input");
    }
  }
}
</script>