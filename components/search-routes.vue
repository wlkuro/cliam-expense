<template>
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
<script>
export default {
	props:{
		
	},
	data() {
		return {
			result: [],
			items: [
                {
                    price: '¥1,000',
                    route: '×線 ◯◯駅 ~ ××線 ◯◯駅',
                    via: '',
                },
                {
                    price: '¥500',
                    route: '×線 ◯◯駅 ~ ××線 ◯◯駅',
                    via: '経由：××線 ◯◯駅',
                },
                {
                    price: '¥1,200',
                    route: '×線 ◯◯駅 ~ ××線 ◯◯駅',
                    via: '経由：××線 ◯◯駅 , ××線 ◯◯駅',
                },
            ]
		}
	},
	methods: {
		
	}
}
</script>