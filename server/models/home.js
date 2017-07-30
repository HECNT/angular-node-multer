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
