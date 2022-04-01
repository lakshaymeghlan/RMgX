import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3 ">
                  <h1><strong>EDUMODO</strong></h1>
                  <p className='main-hero-para'>Edumodo focuses on creating magnificent education websites with ease.
                     Take the lead in the race with Learned.
                    </p>
                </div>

                <div className="col-6 col-lg-3">
                  <h3>FEATURED PROGRAMS</h3>
                  <ul>
                    <li>
                      <a href='#'>Fixed responsive issue</a>
                    </li>
                    <li>
                      <a href='#'>New portfolio grid layout</a>
                    </li>

                    <li>
                      <a href='#'>Tested & approved WP 3.6</a>
                    </li>

                    <li>
                      <a href='#'>Fixed google map issue
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h3>LEARNING</h3>
                  <ul>
                    <li>
                      <a href='#'>Our Plans</a>
                    </li>
                    <li>
                      <a href='#'>Free Trial</a>
                    </li>
                    <li>
                      <a href='#'>Academic Solutions</a>
                    </li>
                    <li>
                      <a href='#'>Business Solutions</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h3>SUPPORT FORUM</h3>
                  <div className="row">
                   
                     <p className='main-hero-para'>Write your email into below field and join our quick support</p>
                     <form class="form-inline email-form">
                        <div class="form-group mx-sm-3 mb-2">
                          <label for="staticEmail2" class="sr-only">Email</label>
                          <input type="Email" class="form-control" id="staticEmail2" />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                      </form>
                    

                  </div>
                </div>

              </div>
              <hr/>
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">copyright © </p>
              </div>

            </div>

          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer