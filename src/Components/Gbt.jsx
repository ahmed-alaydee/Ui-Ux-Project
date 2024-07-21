import React from 'react'
import aiphoto from "../assets/ai.png";
import pepole from "../assets/people.png";
import imgComponents from "../assets/Comapnies Logo.png"
import { Link } from 'react-router-dom';
function Gbt() {
    return(
<>
<div className=' container mt-5'>
    
<div className=' d-flex align-content-between justify-content-end buut_btn'>
                  <Link to="/app" className='btn btn-danger'>Return to the home page</Link>
              </div>

        <div className="row header_home text-center">
          
        <div className="col-md-6">
        <h2>Let’s Build Something
              amazing with GPT-3
               OpenAI</h2>
               <p>GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing</p>
             
               <div class="input-group mb-3">
  <div class="input-group-append">
    <Link to="https://openai.com/index/gpt-4/" class="btn btn_btn btn-outline-danger" 
     type="button" id="button-addon2">Go To GPT-4 </Link>
  </div>
</div>
             
              <div className='buttom_img'>
                <img src={pepole} alt="" />
                <p>1,600 people requested access a visit in last 24 hours</p>
              </div>
           
       </div>
       <div className="col-md-6 ">
       <img className='img_img' src={aiphoto} alt="" />
       </div>
        </div>
        <div className='img_components'>
          <img src={imgComponents} alt="" />
        </div>
    </div>
</>
      

  )
}

export default Gbt;
