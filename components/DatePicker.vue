<template>
  <v-menu
    v-model="fromDateMenu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        label="利用日"
  	    name="moving-date"
        readonly
        :value="fromDateDisp"
        v-on="on"
  	    v-bind:hint="exsampleDate"
  	    persistent-hint
        outlined
      ></v-text-field>
    </template>
    <v-date-picker
      locale="jp-ja"
  	  :day-format="date => new Date(date).getDate()"
      v-model="fromDateVal"
	  :reactive="true"
	  :landscape="true"
      no-title
      @input="fromDateMenu = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
  export default {
    data() {
      return {
	    exsampleDate: '',
        fromDateMenu: false,
        fromDateVal: null,
      };
    },
	mounted() {
	  const today = this.$moment().format('YYYY/MM/DD');
	  this.exsampleDate = '例：' + today;
    },
	computed: {
	  fromDateDisp: {
		  get(){
			return this.formatedDate();
		  },
		  set(val){
			this.fromDateVal = val;
		  }
	  }
	  
	},
	methods: {
	  formatedDate (){
        if (!this.fromDateVal) return null
  
        const [year, month, day] = this.fromDateVal.split('-')
        return `${year}/${month}/${day}`
	  }
	}
  };
</script>