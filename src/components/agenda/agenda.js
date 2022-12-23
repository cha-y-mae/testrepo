import React from 'react'
import './agenda.css'
import CAIRLogo from '../../assets/CAIR-logo.png'

function agenda() {
    return (
        <div className="agenda">

            <h1>Register for the workshop</h1>
         
            <p className="welcome-text"> If you would like to attend the workshop, you can request an invitation by filling out <a style={{fontWeight: 'bold', color:'black'}} href="https://docs.google.com/forms/d/e/1FAIpQLSevSyer8QbS-VhC4hnitdOHnHznQ4lnzq9qCYRXg-zxKhIATA/viewform?vc=0&c=0&w=1&flr=0">this form.</a></p>
            <br></br>

   <h2>Acknowledgements</h2>

                    <p className="welcome-text"> We would like to thank Chaimae Abouzahir for creating and managing the website and the NYU Abu Dhabi Engineering Division for sponsoring the workshop </p>
                    

                 <img src={CAIRLogo} alt="logo"/>
    </div>
    )
}

export default agenda


