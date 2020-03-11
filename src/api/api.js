import axios from "../util/axios";

//获取所有用户
export function getUserList(params) {
  return axios({
    url: "/users",
    method: "get",
    params
  });
}

//查找用户
export function getSearchList(params) {
  return axios({
    url: "/search/repositories",
    method: "get",
    params
  });
}
