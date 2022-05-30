exports.getDataById = (model, id, res) => {
  const data = model
    .findByPk(id)
    .then((data) => data)
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving with id ${id}`,
      });
    });

  return data;
};

exports.getDataByConds = (model, condition, res) => {
  const data = model
    .findOne({ where: condition })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: `Error retrieving with condition ${condition}`,
      });
    });

  return data;
};

exports.getSomeDataByConds = (model, condition, res) => {
  const data = model
    .findAll({ where: condition })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: `Error retrieving with condition ${condition}`,
      });
    });

  return data;
};

exports.createData = (model, rawData, res) => {
  model
    .create(rawData)
    .then((data) => console.log(`Data successfully inserted.`))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating data.",
      });
    });
};

exports.updateData = (model, newData, res) => {
  model
    .update(newData.dataValues, {
      where: { id: newData.dataValues.id },
    })
    .then((data) => console.log(`Data successfully updated.`))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating data.",
      });
    });
};
