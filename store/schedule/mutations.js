export default{
  updateSchedule(state, {day,isOpening,time}){
    isOpening
      ? state.pSchedule.schedule[day].opening = time
      : state.pSchedule.schedule[day].closing = time
  },
  toggleAlwaysOpen(state,payload){
    state.pSchedule.alwaysOpen = payload
  },
  toggleCanModify(state, payload){
    state.pCanModify = payload
  },
  setPName(state,payload){
  state.pName = payload
  }
}
