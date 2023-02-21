const express = require('express')
const router = express.Router()
const dbConnection = require ('../config/dbConnection')
const connection=dbConnection()



router.get('/', function(req, res, next) {
  let pag = req.query.page-1
  let limite = 5
  if(!pag || pag<0){
    pag=0
  }
  connection.query(`SELECT * FROM news LIMIT ${pag},${limite}`, (error, result) =>{
    console.log(result)
    res.render('news/news', {
        news: result,
        atras: result[0].id_news-limite,
        adelante: result[0].id_news+limite
    })
  })
})

router.post('/', function(req, res, next) {

  console.log(req.body)
  const {title, news} = req.body

  connection.query('INSERT INTO news SET ?', { title, news }, (error,result) =>{
      res.redirect('/news')
  })

})


module.exports = router;