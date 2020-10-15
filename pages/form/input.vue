<template>
<v-container fluid>
  <v-form ref="form" @submit.prevent>
  <v-card class="pa-2 ma-0">
      <v-card-title class="headline">
        申請種別
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
              outlined
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <DatePicker></DatePicker>
          </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col>
            <v-textarea
              label="申請理由"
              name="reason"
              value=""
              outlined
              hide-details
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
              outlined
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="出発駅"
              outlined
              hide-details
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="到着駅"
              outlined
              hide-details
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
            label="経由駅"
            outlined
            hide-details
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-checkbox
              label="往復料金を出す"
              v-model="roundTrip"
              class="mt-0"
            >
            </v-checkbox>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn block outlined @click="getRouteList">検索</v-btn>
      </v-card-actions>
  </v-card>
  <SearchRoute v-if="this.routeFlg" ref="SearchRoute"></SearchRoute>
  </v-form>
  
<v-btn class="my-5" outlined to="/" nuxt>一覧へ戻る</v-btn>
</v-container>
</template>
<script>
import DatePicker from "~/components/DatePicker.vue"
import SearchRoute from "~/components/search-routes.vue"

export default {
    components: {
      DatePicker,
      SearchRoute,
    },
    data() {
        return {
            date: null,
            appricantEmail: '',
            approverEmail: '',
            reason: '',
            from: '',
            to: '',
            roundTrip: false,
            routeFlg: false,
        }
    },
    methods: {
        getRouteList(){
            this.routeFlg = true
            
            this.$nextTick(function() {
              this.$refs.SearchRoute.getRoute()
            });
        },
        selectRoute() {
            const setData = {
              date: this.data,
              appricantEmail: this.appricantEmail,
              approverEmail: this.approverEmail,
              reason: this.reason,
              from: this.from,
              to: this.to,
              roundTrip: this.roundTrip,              
            }
            this.$store.commit('setFormData', setData)
        }
    },
}
</script>