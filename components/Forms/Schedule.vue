<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <TypeScheduleRadioButton :pName="pName" :pCanModify="pCanModify" />
      </v-col>
      <v-col cols="12">

      </v-col>
    </v-row>

  </v-form>
</template>

<script>
import  TypeScheduleRadioButton from '@/components/TypeScheduleRadioButton'
export default {
  components:{TypeScheduleRadioButton},
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
    pRadioLabels:{
      type:Object,
      required:false,
      default: function() {
        return {
          alwaysOpen:{
            label:'always open',
            hint: 'parks, beaches, streets',
            value: 'always_open'
          },
          selectedHours:{
            label:'open on selected hours',
            hint: 'input your own hours',
            value:'selected_hours'
          }
        }
      }
    },
    pCanModify:{
      required:true,
      type:Boolean,
    },
    pSchedule:{
      type:Object,
      required:true,
    }
  },
}
</script>

<style scoped>

</style>
