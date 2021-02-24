const redis = require("redis");

const getClient = () => {
  return redis.createClient({
    host: "ec2-54-77-170-18.eu-west-1.compute.amazonaws.com",
    port: 31929,
    password:
      "pce645556c0992b06d88179b144aa6bcd9a1b414c5be10ad0ebbeb1f5006552bb",
  });
};

module.exports.getClient = getClient;
