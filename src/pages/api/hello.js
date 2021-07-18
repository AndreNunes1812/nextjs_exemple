
export default (req, res) => {
  res.status(200).json({ 
    name: 'John Doe',
    metodo: req.method, 
    params: JSON.stringify(req.query),
    idade: +req.query.idade || 'Não informada' ,
    nome: req.query.nome
   })
}
