import React from 'react'
import "../Components/Header_home.css"
import pepole from "../assets/people.png"
import aiphoto from "../assets/ai.png"
import imgComponents from "../assets/Comapnies Logo.png"
function Headerhome() {
  return (
    <>
    <div className=' container mt-5'>
        <div className="row header_home text-center">
          
        <div className="col-md-6">
        <h2>Let’s Build Something
              amazing with GPT-3
               OpenAI</h2>
               <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
             
               <div class="input-group mb-3">
                 <input type="text" class="w-75 input_inp" placeholder="Your Email Address" 
                 aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn btn_btn btn-outline-danger" type="button" id="button-addon2">Send Email </button>
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

export default Headerhome
