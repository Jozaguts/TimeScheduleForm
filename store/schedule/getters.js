export default{

  getSchedule(state){
    return state.pSchedule
  },
  getAlwaysOpen(state) {
    return state.pSchedule.alwaysOpen
  },
  getCanModify(state) {
    return state.pCanModify
  },
  getPName(state){
    return state.pName
  }
}

