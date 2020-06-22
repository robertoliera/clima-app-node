const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=39502da69f28d26e25c47180f56003f7`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
