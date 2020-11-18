<template>
  <v-row justify="center" align="center" >
    <v-col cols="8">
      <formScheduleComponent
        pName="breakfast"
        :pCanModify="true"
        :pSchedule="scheduleData" />
    </v-col>
  </v-row>
</template>
<script>
import FormScheduleComponent from '@/components/Forms/Schedule'
export default{
  components:{FormScheduleComponent},
  data(){return{}},
  computed:{
    scheduleData(){
      return this.$store.getters['schedule/getSchedule']
    },
  },
}
</script>
