import Navegador from '../components/Navegador';

export default function Inicio() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
      }}>
        <Navegador destino="/estiloso" text="Estiloso"/>
        <Navegador destino="/exemplo" text="Exemplo" color="#9400d3"/>
        <Navegador destino="/jsx" text="JSX" color="crimson"/> 
        <Navegador destino="/navegacao" text="Navegação #01" color="green"/> 
        <Navegador destino="/cliente/sp-2/123" text="Navegação #02" color="blue"/> 
        <Navegador destino="/estado" text="Navegação com Estado" color="pink"/> 
        
               
      </div>
    )
}