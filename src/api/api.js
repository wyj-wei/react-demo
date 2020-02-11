import axios from "../util/axios";

//获取所有用户
export function getUserList() {
  return axios({
    url: "/users",
    method: "get"
  });
}
