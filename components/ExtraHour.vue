<template>
<v-row>
  <v-col  cols="12" md="6" lg="6" class="d-flex justify-end align-center">
    <v-dialog
      width="350px"
    >
      <template v-slot:activator="{on}">
          <v-text-field
            outlined
            hide-details
            label="Opening"
            :value="openingValue"
            v-on="on"
            prepend-inner-icon="mdi-clock"
            class="custom-opening-input"
          >
          </v-text-field>
      </template>
      <v-time-picker
        v-model="start"
        :max="end"
        :format="format"
        @click:minute="updateHour(day, true, start)"
        width="350px"
        color="primary"
      >
        <template v-slot:default>
          <v-col>
            <v-switch
              v-model="switchFormat"
              :label="`${switchFormat ? '24HR': 'AM-PM'}`"
            ></v-switch>
          </v-col>
        </template>
      </v-time-picker>
    </v-dialog>
  </v-col>
  <v-col cols="12" md="6" lg="6" class="d-flex justify-start align-center">
    <v-dialog
      width="350px"
    >
      <template  v-slot:activator="{on}">
          <v-text-field
            class="custom-closing-input"
            outlined
            hide-details
            label="Closing"
            v-model="data.closing"
            v-on="on"
            prepend-inner-icon="mdi-clock"
          >
            <!--            <template  v-slot:append-outer >-->
            <!--              <v-btn  color="primary"> +</v-btn>-->
            <!--            </template>-->
          </v-text-field>
      </template>
      <v-time-picker
        v-model="end"
        :format="format"
        :min="start"
        @click:minute="updateHour(day, false, end)"
        width="350px"
        color="primary"
      >
        <template v-slot:default>
          <v-col>
            <v-switch
              v-model="switchFormat"
              :label="`${switchFormat ? '24HR': 'AM-PM'}`"
            ></v-switch>
          </v-col>
        </template>
      </v-time-picker>
    </v-dialog>
  </v-col>
</v-row>
</template>

<script>
export default {
name: "AditionalHour",
  data(){
    return{
      start: null,
      end: null,
      switchFormat: true,
      fields:[],
      count:0,
      openingValue:'',
      data:''

    }
  },
  computed:{
    format(){
      return this.switchFormat ? '24hr': 'ampm'
    }
  },
  methods:{
    updateHour(){

    }
  }
}
</script>


<style scoped>
.custom-opening-input {
  max-width: 230px !important;
}
.custom-closing-input{
  max-width: 300px;
}
</style>
