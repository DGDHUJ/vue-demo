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
  setnewmsg(state,val){
    state.closenewmsg =val;
   },
  SET_INFORMATION(state,val){
    state.information = val
  },
  DEL_INFORMATION(state){
    state.information = null
  },
  SET_categorydata(val){
    state.categorydata = val
  },
  OPEN_menu(state){
    state.toggleMenu = true
  },
  ClOSE_menu(){
    state.toggleMenu = false
  },
  SET_inquiryItem(state,obj){
    state.inquiryItem = obj
  },
  DEL_inquiryItem(){
    state.inquiryItem = null
  },
  SET_quotationIdList(state,data) {
    state.quotationIdList = data
  }
}
