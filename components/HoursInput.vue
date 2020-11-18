<template>
    <v-row justify="center" align="center">
      <v-col class="d-flex justify-center align-center">
        <v-dialog
          width="350px"
        >
          <template v-slot:activator="{on}">
            <v-text-field
              outlined
              label="Opening"
              :value="data.opening"
              v-on="on"
              prepend-inner-icon="mdi-clock"
            >
              <template v-slot:prepend >
                <span class="text-capitalize" >
                {{day}}
                </span>
              </template>
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
      <v-col class="d-flex justify-center align-center">
        <v-dialog
          width="350px"
        >
          <template v-slot:activator="{on}">
            <v-text-field
              outlined
              label="Closing"
              v-model="data.closing"
              v-on="on"
              prepend-inner-icon="mdi-clock"
            >
              <template  v-slot:append-outer >
                <v-btn color="primary"> +</v-btn>
              </template>
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
name: "HoursInput",
  props:{
    day:{
      required:true,
      type:String
    },
    data:{
      required:true,
      type:Object
    }
  },
  data(){
    return{
      start: null,
      end: null,
      switchFormat: true
    }
  },
  computed:{
    format(){
      return this.switchFormat ? '24hr': 'ampm'
    }
  },
  methods:{
    updateHour( day,isOpening, time){
      this.$store.commit('schedule/updateSchedule',{day,isOpening, time})
    }
  }
}
</script>

<style scoped>
.append-outer{
 margin: 0 !important;
}
</style>
