<template>
<v-container fluid>
  <v-card class="pa-2 ma-0">
    <v-card-title class="headline">
      経費申請 - 承認 / 却下 / 承認待ち
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field
            label="申請日"
            value=""
            hide-details
            readonly
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="申請No."
            value=""
            hide-details
            readonly
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="利用日"
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
            hide-details
            readonly
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="承認者"
            name="authorizer"
            value=""
            hide-details
            readonly
            append-icon="mdi-check-bold"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-5">
        <v-col cols="12">
          <v-textarea
            label="コメント"
            name="comment"
            value=""
            hide-details
            readonly
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="承認者"
            value=""
            hide-details
            readonly
            append-icon="mdi-cancel"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-btn class="my-5" outlined to="/" nuxt>一覧へ戻る</v-btn>
</v-container>
</template>

<script>
export default {
    
}
</script>