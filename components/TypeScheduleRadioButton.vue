<template>
  <v-radio-group :value="alwaysOpen" :readonly="!pCanModify" :persistent-hint="!pCanModify" hint="readonly" >
    <template v-slot:label>
        <strong class="text-capitalize" v-text="pName"/>
    </template>
      <v-radio v-for="radio in pRadioLabels" :key="radio.value" :value="radio.value" @change="toggleAlwaysOpen(radio.value)" >
        <template v-slot:label>
          <div class="d-flex flex-column">
            <p class="text-capitalize font-weight-bold ma-0" v-text="radio.label"/>
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
            value: true
          },
          selectedHours:{
            label:'open on selected hours',
            hint: 'input your own hours',
            value: false
          }
        }
      }
    },
  },
  computed:{
    alwaysOpen(){
        return this.$store.getters['schedule/getAlwaysOpen']
    },
    pCanModify(){
      return this.$store.getters['schedule/getCanModify']
    }

  },
  methods:{
    toggleAlwaysOpen(newValue){
      return this.$store.commit('schedule/toggleAlwaysOpen', newValue)
    }
  }
}
</script>
