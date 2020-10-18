import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import Cookies from "js-cookie";

class GoogleSocialAuth extends Component {
  googleLogin = async (accesstoken) => {
    let res = await axios.post("auth/googleLogin/", {
      access_token: accesstoken,
    });
    console.log(res.data);
    Cookies.set("token", res.data.access_token, {
      sameSite: "none",
      secure: true,
    });
    return await res.status;
  };
  googleResponse = async (response) => {
    let googleResponse = await this.googleLogin(response.accessToken);
  };
  render() {
    return (
      <GoogleLogin
        clientId="818473956781-kd61kmfsfbfu73m2o8g6d86qn3rhbjo2.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={this.googleResponse}
        onFailure={this.googleResponse}
        style={{ width: "100%" }}
        fullWidth
      />
    );
  }
}

export default GoogleSocialAuth;
