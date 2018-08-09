/**
 * execute-proxy
 * Created by dcorns on 8/8/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
const https = require('https');
const config = require('./config');
const executeProxy = (event) => {
  const params = event.pathParameters;
  console.log(params);
  const options = {
    hostname: 'api.smartsheet.com',
    path: event.path,
    method: event.httpMethod,
    headers: {
      'Authorization': 'Bearer ' + config.smartSheetToken
    }
  };
  if (params) options.pathParameters = params;
  console.log(options);
  let response = '';
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      res.on('data', chunk => {
        response += chunk;
        console.log(`Response: ${chunk}`);
      });
      res.on('end', function () {
        resolve(response);
      });
    });
    req.on('error', err => {
      reject(err);
    });
    req.end(() => {
      console.log('request end');
    });
  });
};
module.exports = executeProxy;