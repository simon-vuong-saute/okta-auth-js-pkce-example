console.log('...building...');
console.log('Client ID: ' + process.env.OKTA_OAUTH2_CLIENT_ID);
console.log('Okta Org Url: ' + process.env.OKTA_CLIENT_ORGURL);
process.env.VUE_APP_OKTA_OAUTH2_CLIENT_ID=process.env.OKTA_OAUTH2_CLIENT_ID;
process.env.VUE_APP_OKTA_CLIENT_ORGURL=process.env.OKTA_CLIENT_ORGURL;