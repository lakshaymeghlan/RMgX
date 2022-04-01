import React from 'react';


const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-11 col-lg-7 header-left-side d-flex justify-content-center flex-column align-items-start'>
                    <h2 className='display-2'> Innovation for education<br/> and society</h2>
                    <p className='main-hero-para'>Our interdisciplinary majors and minors mean you can chart your own course for academic success.</p>
                        
                        <div className='input-group mt-3'>
                        
                            
                            <button className="input-group-button">Visit Our Campus</button>
                        </div>
                </div>

                <div className='col-12 col-lg-5 header-right-side d-flex justify-content-center flex-column align-items-center'>
                    <img className='home-img' src='./images/home.png'></img>
                    
                </div>

            </div>
        </section>

    </header>
    
    </>
  )
}

export default Header;