var conn = require('../models/main')

module.exports.doSome = function (d) {
  return new Promise(function(resolve, reject) {
    conn.query(`

      SELECT
        *
      FROM
        usuario
      WHERE
        usr = ?
      AND
        pass = ?

      `, [d.usr, d.pass],function(err, result, fields){
      if (err) {
        console.log('Hubo un error al traer la info', err);
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.getData = function () {
  return new Promise(function(resolve, reject) {
    conn.query(`

      SELECT
        *
      FROM
        file_multer
      WHERE
        activo = 1

      `, function (err, result, fields){
        if (err) {
          console.log('Hubo un error getData',err);
        } else {
          resolve(result)
        }
    })
  })
}

module.exports.doUpload = function (d) {
  var url = 'http://localhost:3003/upload/' + d
  return new Promise(function(resolve, reject) {
    conn.query(`

      INSERT INTO
        file_multer (nombre, url, activo)
      VALUES
        (?, ?, 1)

      `, [d, d],function (err, result, fields){
        if (err) {
          console.log('Hubo un error getData',err);
        } else {
          resolve(result)
        }
    })
  })
}

module.exports.doDelete = function (d) {
  console.log(d,'dddddd');
  return new Promise(function(resolve, reject) {
    conn.query(`

      UPDATE
        file_multer
      SET
        activo = 0
      WHERE
        id = ?

      `, [d.id], function(err, result, fields){
      if (err) {
        console.log('Hubo un error al desactivar');
      } else {
        resolve(result)
      }
    })
  })
}
