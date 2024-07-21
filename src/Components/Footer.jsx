import React from 'react'
import "../Components/Footer.css"
import { Link } from 'react-router-dom'
import gpt from "../assets/GPT-3.png"
function Footer() {
  return (
    <>
        <div className=' container cont_footer'>
         <div className='row'>
    <div className="col-md-3"></div>
   
             <div className="col-md-6 count_text text-center">
                <h1>Do you want to step in to the <br/>future before others</h1>
                <Link className='btn'>Request Early Access</Link>
             </div>
             <div className="col-md-3"></div>
         </div>

         <div className="row footer_fot">
            <div className="col-md-3">
                <img src={gpt} alt="" />
                <p>Crechterwoord K12 182 DK<br/> Alknjkcb, All Rights Reserved</p>
            </div>

            <div className="col-md-3">
                <ul>
                    <li className=' active'>Links</li>
                    <li>Overons</li>
                    <li>Social Media</li>
                    <li>Counters</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="col-md-3">
            <ul>
                    <li className=' active'>Company</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="col-md-3">
            <ul>
                    <li className=' active'>Get in touch</li>
                    <li>Crechterwoord K12<br/> 182 DK Alknjkcb</li>
                    <li>01006082709</li>
                    <li>ahmedalayde@gmail.com</li>
                </ul>
            </div>

         </div>
      </div>
    </>

  )
}

export default Footer
