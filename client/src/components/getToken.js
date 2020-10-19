import axios from "axios";
import Cookies from "js-cookie";
export const getToken = async () => {
  let token = Cookies.get("token");
  if (token) {
    try {
      let res = await axios.get("fastsync.herokuapp.com/auth/getuser/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data);
      return { username: res.data.username, token: token };
    } catch (error) {
      return null;
    }
  }
  return null;
};
