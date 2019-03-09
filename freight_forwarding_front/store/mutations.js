export default {
  add(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  },
  changeheaderbaractive(state,val){
   state.headerbaractive =val;
  },
  SET_INFORMATION(state,val){
    state.information = val
  },
  DEL_INFORMATION(){
    state.information = null
  },
  SET_categorydata(val){
    state.categorydata = val
  },
  SET_TITLE(state,val){
    state.title  = val
  }
}
