<template>
<v-container fluid>
  <v-form ref="form" @submit.prevent>
    <v-card class="pa-2 ma-0">
      <v-card-title class="headline">
        申請種別
      </v-card-title>
        <v-card-text class="px-6">
          <p>申請する項目を選択してください。</p>
          <v-select
          :items="items"
          label="Outlined style"
          outlined
          @change="submit"
          ></v-select>
        </v-card-text>
    </v-card>
  </v-form>
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