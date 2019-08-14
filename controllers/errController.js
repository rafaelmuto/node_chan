exports.err404 = (req, res) => {
  res.status(404).render('404');
};

exports.err500 = (err, req, res, nxt) => {
  res.status(500).render('500');
};
