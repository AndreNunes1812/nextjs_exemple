import Layout from '../components/Layout';

export default function Jsx() {
  const titulo = <h1>Jsx é um conceito Central</h1>

  function subtitulo() {
    return <h2>{"muito legal".toLowerCase()}</h2>  
  }   

  return (
    <Layout titulo="Entendendo o JSX">
      {titulo}      
      {subtitulo}
      <p> 
        { JSON.stringify({nome:'André', idade: 51})}
      </p>
    </Layout>
  )
}