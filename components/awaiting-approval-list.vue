<template>
<v-container>
  <v-card>
    <v-card-title class="headline pb-0">
      承認待ち一覧
    </v-card-title>
    <v-card-text>
      <v-list two-line>
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-list-item 
              :key="item.documentNo"
              to="/approval/input"
              nuxt
            >
              <template>
                <v-list-item-content>
                  <v-list-item-title>申請日：{{item.claimedDate}}</v-list-item-title>
                  <v-list-item-subtitle>申請者：{{item.applicant}}</v-list-item-subtitle>
                  <v-list-item-subtitle>申請項目：{{item.category}}</v-list-item-subtitle>
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
</v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    documentNo:'001',
                    claimedDate: '2020/09/01',
                    applicant: '◯◯課 △△ △△',
                    category: '交通費申請',
                },
                {
                    documentNo:'002',
                    claimedDate: '2020/09/01',
                    applicant: '◯◯課 △△ △△',
                    category: '交通費申請',
                },
            ]
        }
    },
}
</script>