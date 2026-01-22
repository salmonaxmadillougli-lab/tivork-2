import "./Navbar.css"
import logo from "../assets/logo.png"

function Navbar(){
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="">Furniture</a></li>
                    <li><a href="">Why Feather</a></li>
                    <li><a href="">Feather for Business</a></li>
                </ul>
                <img src={logo} alt="" />
                <ul>
                    <li><a href="">Check if We Deliver</a></li>
                    <li><a href="">Search</a></li>
                    <li><a href="">Account</a></li>
                    <li><a href="">🛒</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar