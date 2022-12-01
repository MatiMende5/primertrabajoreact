import { Titulo } from '../Titulo/Titulo'
import './Lista de compras.css'

const ItemListConteiner = ({ saludo }) => {
    return (
        
        <section className="section">
            <Titulo titulo= '' subTitulo='Lista de compras'/>
            <br />
            <Titulo titulo= '' subTitulo='Gracias por tu compra!'/>
            </section>
    )
}
export default ItemListConteiner
