module.exports = {
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  // show406(err, req, res, next) {
  //   console.log('in error function');
  //   res.sendStatus(406);
  // },
  showTricks(req, res) {
    res.render('tricks/trick-index', {
      data: res.locals.tricks,
    });
  },
  showOne(req, res) {
    res.render('tricks/trick-single', {
      data: res.locals.trick,
      // console.log(res.locals.trick);
    });console.log(res.locals.trick);
  },
  // showAddForm(req, res) {
  //   res.render('tricks/trick-add');
  // },
  // showEditForm(req, res) {
  //   res.render('tricks/trick-edit', {
  //     data: res.locals.trick,
  //   });
  // },
  // handleCreate(req, res) {
  //   res.redirect('/tricks');
  // },
  // handleUpdate(req, res) {
  //   // console.log('in handle update');
  //   res.redirect(`/tricks/${req.params.id}`);
  // },
  // handleDelete(req, res) {
  //   res.redirect('/tricks');
  // },
};
