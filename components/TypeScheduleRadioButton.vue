<template>
  <v-radio-group v-model="defaultValue" :readonly="!pCanModify" :persistent-hint="!pCanModify" hint="readonly" >
    <template v-slot:label>
        <strong class="text-capitalize" v-text="pName"/>
    </template>
    <v-radio v-for="radio in pRadioLabels" :key="radio.value" :value="radio.value">
      <template v-slot:label>
        <div class="d-flex flex-column">
          <p class="text-capitalize ma-0 white--text" v-text="radio.label"/>
          <small> e.g.
            <span class="text-capitalize" v-text="radio.hint"/>
          </small>
        </div>
      </template>
    </v-radio>
  </v-radio-group>
</template>
<script>
export default {
  props:{
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
      type:Boolean,
      required:true
    }
  },
  data () {
    return {
      defaultValue: '',
    }
  },
  mounted () {
    this.defaultValue = this.pRadioLabels.alwaysOpen.value
  }
}
</script>
