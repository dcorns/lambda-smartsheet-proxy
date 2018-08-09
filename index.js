/**
 * index
 * Created by dcorns on 8/8/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */

const executeProxy = require('./execute-proxy');
exports.handler = async (event) => {
  console.log(event);
  try{
    const result = await executeProxy(event);
    console.log('result');
    return {
      body:result,
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };
  }
  catch(e){
    return {status:400};
  }
};
