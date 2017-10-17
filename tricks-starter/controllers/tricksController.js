const trick = require('../models/trick');

module.exports = {
  makeBlankTrick(req, res, next) {
    const blankTrick = {
      id: null,
      description: null,
      css_type: null,
    };
    res.locals.trick = blankTrick;
    next();
  },
  index(req, res, next) {
    trick.findAll()
      .then((tricks) => {
        res.locals.tricks = tricks;
        next();
      })
      .catch(err => next(err));
  },
  getOne(req, res, next) {
    trick.findById(req.params.id)
    .then((trick) => {
      res.locals.trick = trick;
      next();
    })
    .catch(err => next(err));
  },
  create(req, res, next) {
    trick.save(req.body)
      .then((trick) => {
        res.locals.trick = trick;
        next();
      })
      .catch(err => next(err));
  },
  // update(req, res, next) {
  //   //console.log(req.body, 'update controller');
  //   console.log('inside update function');
  //   //console.log(req.body);
  //   trick.update(req.body, req.params.id)
  //     .then((trick) => {
  //       console.log(trick);
  //       //res.locals.trick = trick;
  //     })
  //     .catch(err => next(err));
  // },
  destroy(req, res, next) {
    trick.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
  showTrickForm: (req, res) => {
    res.json({
      message: 'I’m the HTML form for new tricks. I post to /tricks',
    });
  },

};
