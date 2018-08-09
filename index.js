/**
 * index
 * Created by dcorns on 8/8/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */

const executeProxy = require('./execute-proxy');
exports.handler = async (event) => {
  const result = await executeProxy();
  console.log('result');
  return result;
};
