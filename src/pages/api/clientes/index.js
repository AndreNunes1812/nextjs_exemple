export default function cliente(req , res) {

  if(req.method === "GET") {
    handleGet(req, res);
  } else {
    res.status(405).send();
  }

  function handleGet(req, res) {
    res.status(200).json({ 
      id: 1,
      nome: 'André', 
      idade: 51,
      email: 'andre.nunes020770@gmail.com'
    })
  }
  
}