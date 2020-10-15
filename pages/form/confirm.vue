<template>
<v-container fluid>
  <v-form ref="form" @submit.prevent>
    <v-card class="pa-2 ma-0">
      <v-card-title class="headline">
        申請種別 - 確認
      </v-card-title>
      <v-card-text>        
        <v-row>
          <v-col>
            <v-text-field
              label="申請者 メールアドレス"
              name="appricant-email"
              value=""
              hint="例）xxxxxxx@xxxxxxxxxx.co.jp"
              persistent-hint
              readonly
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="利用日"
              name="moving-date"
              value=""
              hide-details
              readonly
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col>
            <v-textarea
              label="申請理由"
              name="reason"
              value=""
              hide-details
              readonly
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="申請先 メールアドレス"
              name="approver-email"
              value=""
              hint="例）xxxxxxx@xxxxxxxxxx.co.jp"
              persistent-hint
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="出発駅"
              value=""
              hide-details
              readonly
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="経由"
              value=""
              hide-details
              readonly
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="到着駅"
              value=""
              hide-details
              readonly
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="料金"
              value=""
              outlineds
              hide-details
              readonly
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row class="ma-0">
          <v-col cols="6">
            <v-btn outlined block @click="$router.go(-1)">戻る</v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn outlined block color="primary" to="/form/completed" nuxt>決定</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-form>
</v-container>
</template>

<script>
export default {
  computed : {
    confirmData() {
      console.log(this.$store.state.formData)
    }
  }
    
}
</script>