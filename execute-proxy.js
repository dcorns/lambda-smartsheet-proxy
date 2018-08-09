/**
 * execute-proxy
 * Created by dcorns on 8/8/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
const https = require('https');
const config = require('./config');
const executeProxy = (req={data:{}}) => {
  const options = {
    hostname: 'api.smartsheet.com',
    path: '/2.0/users/me',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + config.smartSheetToken,
    },
  };
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      res.on('data', chunk => {
        console.log(`Response: ${chunk}`);
      });
    });
    req.on('error', err => {
      reject(err);
    });
    req.end(req.data, wres => {
      resolve(wres);
    });
  });
};
module.exports = executeProxy;