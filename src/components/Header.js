import { LOGO_URL } from "../utils/constants"
import{useState} from "react"

const Header = () => {

    // let btnName = "Login"; local variable will not work it will update to logout but our UI dont render
    //ones this setbtnName is called it will *** re-render the complete header component
    //also when setbtn function called it create new variable btnname with updated value
    const [btnName, setbtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => { btnName=="Login"?setbtnName("Logout"):setbtnName("Login"); }}>{btnName }</button>
                </ul>
            </div>
        </div>
        
    );
};

export default Header ;