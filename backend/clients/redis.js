const redis = require("redis");

const getClient = () => {
  return redis.createClient({
    host: "ec2-54-246-220-96.eu-west-1.compute.amazonaws.com",
    port: 12959,
    password:
      "p806447d3e63a2da26ccd141be01f8e7dc575f268cac1532f6a541b0bb33ba0e6",
  });
};

module.exports.getClient = getClient;
