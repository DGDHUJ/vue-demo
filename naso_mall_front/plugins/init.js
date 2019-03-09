import axios from 'axios';
import store from "~/store/index";
axios.get(store().state.headerUrl + '/init').then(({data})=>{

  // 添加百度统计、谷歌统计
  var baidu_script = window.document.createElement("script");
  baidu_script.type = "text/javascript";
  baidu_script.text = data.data.mall.baidu_analytics_js;


  var google_params = JSON.parse(data.data.mall.google_analytics_js);
  var google_script = window.document.createElement("script");
  google_script.type = "text/javascript";
  google_script.src = google_params.src;

  var google_script_fn = window.document.createElement("script");
  google_script_fn.type = "text/javascript";
  google_script_fn.text = google_params.code;

  window.document.body.appendChild(baidu_script);
  window.document.body.appendChild(google_script);
  window.document.body.appendChild(google_script_fn);

  return data.data.mall.baidu_analytics_js
})
