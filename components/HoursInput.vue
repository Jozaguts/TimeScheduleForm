<template>
    <v-row justify="center" align="center">
      <v-container>
        <v-row>
          <v-col cols="12" md-="6" lg="6" class="d-flex justify-end align-center">
            <v-dialog
              width="350px"
            >
              <template v-slot:activator="{on}">
                <div class="d-flex flex-column flex-md-row flex-lg-row justify-md-center align-md-center justify-lg-center align-lg-center justify-left align-left">
                <div class="d-flex flex-column mr-1 " >
                  <span class=" font-weight-bold text-capitalize text-left text-lg-center text-md-center" >
                      {{day}}
                    </span>
                  <v-checkbox hide-details dense class="ma-0 pa-0" label="24hs"></v-checkbox>
                  <v-checkbox hide-details dense class="ma-0 pa-0" label="closed"></v-checkbox>
                </div>
                  <v-text-field
                  hide-details
                  outlined
                  label="opening"
                  :value="data.opening"
                  v-on="on"
                  prepend-inner-icon="mdi-clock"
                >

<!--                  <template v-slot:prepend >-->
<!--                    <span class="text-capitalize" >-->
<!--                      {{day}}-->
<!--                    </span>-->
<!--                    <v-checkbox label="24hs"></v-checkbox>-->
<!--                  </template>-->
                </v-text-field>
                </div>
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
          <v-col cols="12" md="6" lg="6" class="d-flex justify-center align-center">
            <v-dialog
              width="350px"
            >
              <template v-slot:activator="{on}">
                <v-text-field
                  outlined
                  hide-details
                  label="Closing"
                  v-model="data.closing"
                  v-on="on"
                  prepend-inner-icon="mdi-clock"
                >
                  <template  v-slot:append-outer >
                    <v-btn @click="appendComponent('ExtraHour')" color="primary"> +</v-btn>
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
        <v-scroll-y-transition :group="true" mode="out-in">
          <component v-for="field in fields" v-bind:is="field.type" :key="field.id"></component>
        </v-scroll-y-transition>
      </v-container>
    </v-row>
</template>

<script>
import ExtraHour from '@/components/ExtraHour'
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
  components:{
    ExtraHour
  },
  data(){
    return{
      start: null,
      end: null,
      switchFormat: true,
      fields:[],
      count:0
    }
  },
  computed:{
    format(){
      return this.switchFormat ? '24hr': 'ampm'
    }
  },
  methods:{
    appendComponent(type){
      this.fields.push({
        'type': type,
        id: `${type}${this.count++}`
      });
    },
    updateHour( day,isOpening, time){
      this.$store.commit('schedule/updateSchedule',{day,isOpening, time})
    }
  }
}
</script>
<!--<script type="x-template" id="form-input">-->
<!--<div>-->
<!--<label>Text</label>-->
<!--<input type="text" />-->
<!--</div>-->
<!--</script>-->

<!--<script type="x-template" id="form-select">-->
<!--<div>-->
<!--<label>Select</label>-->
<!--<select>-->
<!--  <option>Option 1</option>-->
<!--  <option>Option 2</option>-->
<!--</select>-->
<!--</div>-->
<!--</script>-->

<!--<script type="x-template" id="form-textarea">-->
<!--<div>-->
<!--<label>Textarea</label>-->
<!--<textarea></textarea>-->
<!--</div>-->
<!--</script>-->
