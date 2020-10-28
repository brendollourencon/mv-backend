const meli = require('mercadolibre-nodejs-sdk');
const superagent = require('superagent');

class MercadoLivreHelper {

  constructor() {
    this.urlApiMl = process.env.ML_URL_API;
    this.clientId = process.env.APP_KEY;
    this.secretKey = process.env.SECRET_KEY;
    this.urlRedirect = process.env.ML_URL_REDIRECT;
  }

  authenticateNewAccount = async(code) => {
    const apiInstance = new meli.OAuth20Api();
    const opts = {
      'grantType': 'authorization_code',
      'clientId': this.clientId,
      'clientSecret': this.secretKey,
      'redirectUri': this.urlRedirect,
      'code': code
    };

    return new Promise((resolve, reject) => {
      apiInstance.getToken(opts, (error, data, response) => {
        if(error) {
          reject(error);
        }
        resolve(response.body);
      });
    });
  }

  getInfoAccount = async(idUser, accessToken) => {
    const apiInstance = new meli.RestClientApi();

    return new Promise((resolve, reject) => {
      apiInstance.resourceGet(`/users/${idUser}`, accessToken, (error, data, response) => {
        if(error) {
          reject(error);
        }
        resolve(response.body);
      });
    });
  }

  refreshToken = async(refreshToken) => {
    const result = await superagent.post(`${this.urlApiMl}/oauth/token`, {
      grant_type: 'refresh_token',
      client_id: this.clientId,
      client_secret: this.secretKey,
      refresh_token: refreshToken
    });
    return result && result.body ? result.body : null;
  }

  createUserTest = async (accessToken) => {
    const result = await superagent.post(`${this.urlApiMl}/users/test_user?access_token=${accessToken}`, {
      site_id: 'MLB'
    });
    return result && result.body ? result.body : null;
  }
}

module.exports = MercadoLivreHelper