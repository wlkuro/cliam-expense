<template>
<v-container fluid>
  <v-layout
    column
  >
    <v-flex>
    <v-row>
        <VarietyExpensesList>
        </VarietyExpensesList>
    </v-row>
    <v-row>
        <ClaimingStatusList>
        </ClaimingStatusList>
    </v-row>
    <v-row>
        <AwaitingApprovalList>
        </AwaitingApprovalList>
    </v-row>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import VarietyExpensesList from "~/components/variety-expenses-list.vue";
import ClaimingStatusList from "~/components/claiming-status-list.vue";
import AwaitingApprovalList from "~/components/awaiting-approval-list.vue";

export default {
  components: {
    VarietyExpensesList,
    ClaimingStatusList,
    AwaitingApprovalList,
  }
}
</script>
