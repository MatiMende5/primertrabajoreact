import ItemListConteiner from "../ItemListConteiner/ItemListConteiner"
import NavBar from "../NavBar/NavBar"
import { Titulo } from "../Titulo/Titulo"

function ComponenteContainer () {
    let tituloApp = 'Kiosko 24'
    
        return (

        <>
        <Titulo titulo={tituloApp} subTitulo={'El Kioskito'} />
        <NavBar />
        <ItemListConteiner saludo={'Gracias por tu compra'} />
        </>
        )
    }
    

export default ComponenteContainer

