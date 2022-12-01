import './NavBar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
    <div className='navBar'>
        <ul className='navegador'>
            <li>
                <a href=""><img className='logo' src="/src/assets/components/img/logo cervecero.png" alt="logo" />
            </a>
            </li>
            <li>
                <a className='nav_link' href="">Alfajores</a>
            </li>
            <li>
                <a className='nav_link' href="">Golosinas</a>
                </li>
            <li>
                <a className='nav_link' href="">Chocolates</a>
                </li>
            <li>
                <a className='nav_link' href="">Papas fritas</a>
                </li>
            <li>
                <a className='nav_link' href="">Gaseosas</a>
                </li>
            <li>
                <a className='nav_link' href=""><CartWidget /></a>
                
            </li>
        </ul>
    </div>
    )
}
export default NavBar