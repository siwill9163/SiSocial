import "./register.css"

export default function Register(){
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SiSocial</h3>
                    <span className="loginDesc">Connent with friends and the world around on SiSocial</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="User Name" className="loginInput"/>
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <input placeholder="Comfirm Password" className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegButton">Already Have an Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}