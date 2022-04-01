import React from 'react'


const Home = () => {


  return (
    <>
    <section>
        <div className='work-container container'>
            <h1 className='main-heading text-center'><strong>Our Department</strong></h1>
            <p className='main-hero-para-2'>A hundred thousand grateful loves to your dear papa and mamma. 
                Is your<br/> poor brother recovered of his rack-punch? Oh, dear! Oh,
                 dear! How men <br/>should beware of wicked punch!</p>
            
            <div className='image-section display-flex justify-content-space-between'>
               <a href='/'> <img  src='./images/home2.png' alt=''></img> </a>
               <a href='/'> <img className='img-3'  src='./images/home3.png' alt=''></img> </a>
               <a href='/'>  <img  src='./images/home4.png' alt=''></img> </a>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default Home;