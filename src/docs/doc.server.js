module.exports = {
  servers: [
    {
      url: 'http://localhost:3001/api/v1/records', // url
      description: 'Local server', // name
    },

    {
      url: 'https://greve-fromage-47823.herokuapp.com/api/v1/records', // url
      description: 'Production server', // name
    },
  ],
};
