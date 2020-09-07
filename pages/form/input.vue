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
            <v-text-field
              label="利用日"
              name="moving-date"
              value=""
              v-bind:hint="this.exsampleDate"
              persistent-hint
              outlined
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
  <template v-if="this.routeFlg">
    <v-card class="mt-2">
      <v-card-title class="pb-0">
        検索結果
      </v-card-title>
      <v-card-text>
        <v-list two-line>
          <v-list-item-group>
            <template v-for="(item, index) in items">
              <v-list-item 
                :key="item.price"
                to="/form/confirm"
                nuxt
              >
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.price"></v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.route"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.via"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  </v-form>
  
<v-btn class="my-5" outlined to="/" nuxt>一覧へ戻る</v-btn>
</v-container>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            exsampleDate: '', 
            date: null,
            roundTrip: false,
            routeFlg: false,
            items: [
                {
                    price: '¥0,000',
                    route: '×線 ◯◯駅 ~ ××線 ◯◯駅',
                    via: '',
                },
                {
                    price: '¥0,000',
                    route: '×線 ◯◯駅 ~ ××線 ◯◯駅',
                    via: '経由：××線 ◯◯駅',
                },
                {
                    price: '¥0,000',
                    route: '×線 ◯◯駅 ~ ××線 ◯◯駅',
                    via: '経由：××線 ◯◯駅 , ××線 ◯◯駅',
                },
            ]
        }
    },
    mounted() {    
        this.exsampleDate = '例：' + this.$moment().format('YYYY/MM/DD');
    },
    methods: {
        getRouteList(){
            this.routeFlg = true
        },
    },

}
</script>