import React from 'react'
import "../Components/SectionThrid.css"
import possibility from "../assets/possibility.png"
import { Link } from 'react-router-dom'
import blog from "../assets/blog01.png"
import blogTow from "../assets/blog02.png"
import blogThrid from "../assets/blog04.png"
import blogThri from "../assets/blog03.png"
import blogFour from "../assets/blog05.png"
function SectionThrid() {
  return (
    <>
    <div className=' container Thrid_Section'>
        <div className="row">

            <div className="col-md-6 section_photo">
             <img src={possibility} alt="possibility" />
           
            </div>

            <div className="col-md-6 Section_Text">
            <p>Request Early Access to Get Started</p>
            <h2>The possibilities are <br/> beyond your imagination</h2>
            <h3>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h3>
            <h5>Request Early Access to Get Started</h5>
            </div>
        </div>
      </div>
 
      <div className=' container Third_Section_Two' >
         <div className="row conten_con">
            <div className="col-md-8 col-sm-6">
             <p>Request Early Access to Get Started</p>
             <h2>Register today & start exploring the endless possiblities.</h2>
            </div>

            <div className="col-md-4 col-sm-6">
                <Link to="/" className='btn btn_btn2 '>Sign in </Link>
                </div>
         </div>
      </div>


      <div className=' container section_four'>
         <h1>A lot is happening, <br/>We are blogging about it.</h1>
         <div className="row ">
            <div className="col  text_tx">
            <div class="card-md-4 Card_1" >
                 <img src={blog} class="card-img-top" alt="..."/>
               <div class="card-body">
                   <p class="card-title">Sep 26, 2024</p>
                   <h2 class="card-text">GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
                   <h5>Read Full Article</h5>
                  
                 </div>
               </div>
            </div>

            <div className="col-md-4 text_txtow">

            <div class="card card_2">
               <img src={blogTow} class="card-img-top" alt="..."/>
               <div class="card-body">
               <p class="card-title">Sep 26, 2024</p>
                   <h2 class="card-text">GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
                   <h5>Read Full Article</h5>
 
                </div>
                </div>

                 <div class="card card_3" >
                   <img src={blogThrid} class="card-img-top" alt="..."/>
                   <div class="card-body">
                   <p class="card-title">Sep 26, 2024</p>
                   <h2 class="card-text">GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
                   <h5>Read Full Article</h5>
                   </div>
                 </div>
            </div>





            <div className="col-md-4 text_txtow">
             
            <div class="card card_2">
               <img src={blogThri} class="card-img-top" alt="..."/>
               <div class="card-body">
               <p class="card-title">Sep 26, 2024</p>
                   <h2 class="card-text">GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
                   <h5>Read Full Article</h5>
 
                </div>
                </div>

                <div class="card card_3" >
                   <img src={blogFour} class="card-img-top" alt="..."/>
                   <div class="card-body">
                   <p class="card-title">Sep 26, 2024</p>
                   <h2 class="card-text">GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
                   <h5>Read Full Article</h5>
                   </div>
                 </div>

                
            </div>

         </div>
      </div>
    </>

  )
}

export default SectionThrid
