import axios from "axios";

let config = {
  baseURL: "https://api.github.com",
  // timeout: 5000 // Timeout
  // withCredentials: true, // Check cross-sit e Access-Control
};

const _axios = axios.create(config);
_axios.interceptors.request.use(
  function(config) {
    if (localStorage.access_token) {
      config.headers.token = localStorage.access_token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// //respone拦截器
_axios.interceptors.response.use(
  response => {
    // console.log(1111)
    if (response.status !== 200) {
      return Promise.reject("error");
    }
    return response.data;
  },
  error => {
    //默认除了2XX之外的都是错误的，就会走这里
    if (!error) {
      return;
    }
    let { status } = error.response;
    if (error && status) {
      let errMsg = {
        400: "请求出错",
        401: "请登录后再操作",
        403: "拒绝访问",
        408: "请求超时",
        500: "服务器内部错误",
        501: "服务未实现",
        502: "网关错误",
        503: "服务不可用",
        504: "网关超时",
        505: "http版本不受支持"
      };
      console.log(errMsg, error.response.status);
      // console.log("err:" + );
    }
    return Promise.reject(error);
  }
);

export default _axios;
