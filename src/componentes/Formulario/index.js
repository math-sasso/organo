import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = [
        'Programação',
        'Frontend',
        'Data-Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Fui submetido")
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar os dados do colaborador</h2>
            < CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
            < CampoTexto obrigatorio={true}  label="Cargo"  placeholder="Digite o seu Cargo"/>
            < CampoTexto label="Imagem"  placeholder="Digite a sua Imagem"/>
            < ListaSuspensa obrigatorio={true}  label="Time" itens ={times}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>  
    )
}

export default Formulario
