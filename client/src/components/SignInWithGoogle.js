import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

class GoogleSocialAuth extends Component {
  googleLogin = async (accesstoken) => {
    let res = await axios.post("http://localhost:8000/rest-auth/google/", {
      access_token: accesstoken,
    });
    console.log(res);
    return await res.status;
  };
  googleResponse = async (response) => {
    let googleResponse = await this.googleLogin(response.accessToken);
    console.log(googleResponse);
    console.log(response);
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
