module.exports = db => {
  return {
    create: (req, res) => {
      db.models.Persons.create(req.body).then(() => {
        res.send({ success: true });
      }).catch(() => res.status(401));
    },

    update: (req, res) => {
      db.models.Persons.update(req.body, { where: { id: req.body.id } }).then(() => {
        res.send({ success: true })
      }).catch(() => res.status(401));
    },
//CASE WHEN liked IS TRUE THEN 'Da' ELSE 'Nu' END AS liked
    findAll: (req, res) => {
      db.query(`SELECT id, nume, cnp, varsta,masini
      FROM "Persons"
      ORDER BY id`, { type: db.QueryTypes.SELECT }).then(resp => {
        res.send(resp);
      }).catch(() => res.status(401));
    },

    find: (req, res) => {
      db.query(`SELECT id, nume, cnp, varsta,masini
      FROM "Persons"`, { type: db.QueryTypes.SELECT }).then(resp => {
        res.send(resp[0]);
      }).catch(() => res.status(401));
    },

    destroy: (req, res) => {
      db.query(`DELETE FROM "Persons" WHERE id = ${req.params.id}`, { type: db.QueryTypes.DELETE }).then(() => {
        res.send({ success: true });
      }).catch(() => res.status(401));
    }
  };
};
