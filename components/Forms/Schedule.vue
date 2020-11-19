<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <TypeScheduleRadioButton  :pName="pName" :pCanModify="pCanModify" />
      </v-col>
      <v-scroll-y-transition mode="out-in">
        <v-col v-if="!getAlwaysOpen" cols="12" id="hours">
            <HoursInput  v-for="(value, day) in pSchedule.schedule" :key="day" :data="value" :day="day"  />
        </v-col>
        </v-scroll-y-transition>
      <v-col>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import  TypeScheduleRadioButton from '@/components/TypeScheduleRadioButton'
import HoursInput from '@/components/HoursInput'
export default {
  components:{TypeScheduleRadioButton,HoursInput},
name: "Schedule",
  props:{
    id:{
      required:false,
      default:null,
    },
    pEnabled:{
      required:false,
      default:true
    },
    pRemarks:{
      required:false,
      default: ''
    },
    p24hs:{
      required:false,
      default:false
    },
    pFirstDay:{
      required:false,
      default:0
    },
    pName:{
      required:false,
      default:''
    },
    pSchedule:{
      type:Object,
      required:true
    },
    pCanModify:{
      required:true,
      type:Boolean,
    },
  },
  computed:{
    scheduleData(){
      return this.$store.getters['schedule/getSchedule']
    },
    getAlwaysOpen(){
      return this.$store.getters['schedule/getAlwaysOpen']
    }
  },
}
</script>

<style scoped>

</style>
