import ActivitiesController from './controllers/activities';

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Indoor Society API!',
    }),
  );

  app.get('/api/activities', ActivitiesController.list)
  app.post('/api/activities', ActivitiesController.create)
  app.get('/api/activities/:id', ActivitiesController.get)
  app.put('/api/activities/:id', ActivitiesController.update)
  app.delete('/api/activities/:id', ActivitiesController.destroy)
};
