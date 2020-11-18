export default{
updateSchedule(state, {day,isOpening,time}){
  console.log()
  isOpening
    ? state.pSchedule.schedule[day].opening = time
    : state.pSchedule.schedule[day].closing = time
}
}
