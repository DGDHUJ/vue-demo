
export default {
  //getters sameaple using
  baseUrl:() =>{
    let host ='host';
    return host
  },
  //getters with params
  testgettersParams: () => (content) => {
    return content;
  },
  testgettersState: (state) => {
    return state.msg;
  }
}
