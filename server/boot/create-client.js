module.exports = function(app) {
  app.dataSources.nholeDb.automigrate('Client', function(err) {
    if (err) throw err;
    app.models.Client.create([
      {
      firstname: 'Aurore',
      lastname: 'Malherbes',
      number: '0612345678',
      morning: true,
      lunch: true,
      afternoon: false,
      evening: false
    },
      {
      firstname: 'Christine',
      lastname: 'Malherbes',
      number: '0612345678',
      morning: true,
      lunch: false,
      afternoon: false,
      evening: false
    },
      {
      firstname: 'Franck',
      lastname: 'Malherbes',
      number: '0612345678',
      morning: false,
      lunch: false,
      afternoon: false,
      evening: true
    }
   ], function(err, clients) {
      if (err) throw err;

      console.log('Models created: \n', clients);
    });
  });
};
