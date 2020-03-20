import Activity from '../database/models/activity';

class ErrNotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

const create = async (req, res, next) => {
  try {
    const activity = await Activity.create({
      title: req.body.title,
      description: req.body.description,
    });

    res.status(201).send(goal);
  } catch (e) {
    next(e);
  }
}

const list = async (req, res, next) => {
  try {
    const activities = await Activity.findAll();

    res.status(200).send(activities);
  } catch (e) {
    next(e);
  }
}

const get = async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);

    if (!activity) {
      throw new ErrNotFound('Activity Not Found');;
    }

    res.status(200).send(activity);
  } catch (e) {
    next(e);
  }
}

const update = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const activity = await Activity.findByPk(id);

    if (!activity) {
      throw new ErrNotFound('Activity Not Found');;
    }

    const updated = await activity.update({
      title: title || activity.title,
      description: description || activity.description,
    });

    res.status(200).send(updated);
  } catch (e) {
    next(e);
  }
}

const destroy = async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);

    if (!activity) {
      throw new ErrNotFound('Activity Not Found');;
    }

    await activity.destroy();

    res.status(204).send();
  } catch (e) {
    next(e);
  }
}

export default {
  create,
  update,
  list,
  destroy,
  get,
};