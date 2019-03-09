import axios from 'axios';
// http response 拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data

  return response;
}, function (error) {
  // Do something with response error
  switch (error.response.status) {
    case 404:
      window.location.href = "/404";
      break;
    case 500:
      window.location.href = "/500";
      break;
  }
  return Promise.reject(error);
});




export default function ({
  $axios,
  redirect
}) {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
  })
  $axios.onError(error => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      case 404:
        redirect('/404')
        break;
      case 500:
        redirect('/500')
        break;
    }
  })
}
