
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`
    
    // let valor = 'Guilherme Silveira'

   

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
        console.log(props.valor)
    }
    return (
        <div className='campo-texto'>
            <label> {props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>       
    )
}

export default CampoTexto
