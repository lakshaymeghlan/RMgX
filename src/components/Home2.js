import React from 'react'

const Home2 = () => {
  return (
    <>

<section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              {/* <img src="./images/hero3.jpg" alt="aboutusIMg" /> */}
              <iframe className='video-section' width="560" height="315" src="https://www.youtube.com/embed/HndV87XpkWg" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen></iframe>
                  
              
            </div>

            
            <div className="col-12 col-lg-7 ">
            <h1 className='main-heading-2 text-center'><strong>Limitless learning, more possibilities </strong></h1>
            <p className='second-para'>The University of Rochester is one of the country's top-tier research universities. Our campuses are home 
                to 200 academic majors, more than 2,000 faculty and instructional staff, and some 10,000 students-approximately 
                half of whom are women.<br/>

                Learning at the University of Rochesy is also on a very personal scale. Rochester remains one of the smallest 
                and most collegiate among top research universities, with smaller classes, a low 10:1 student to teacher ratio, 
                and increased interactions with faculty.</p>

{/* 
                <div className="container">
                <div className='row'>
                <h1>4000</h1>
                <p>Students</p>

                <h1>260</h1>
                <p>Courses</p>

                <h1>5679</h1>
                <p>Hours Video</p>
                </div>
                </div> */}
                
                    


                </div>

              

            </div>
          </div>
        
      </section>
    
    </>
  )
}

export default Home2