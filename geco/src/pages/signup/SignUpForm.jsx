import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = 'https://rich-teal-spider-tux.cyclic.app/z1/userlogin'; 

      const response = await axios.post(apiUrl, {
        email,
        password
      });

      console.log('API response:', response.data);

      // Check the status from the API response
      if (response.data.status === 'success') {
        // If login is successful, redirect to "/home"
        console.log("login is success");
        history.push('/game');
        // setIsAuthenticated(true);
      } else {
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
	<section className="contact-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6">
              <div id="contact-map" />
            </div> */}
            <div className="col-lg-6 pl-45">
              <div className="section-title title-style-three mb-20">
                <h2>SIGNUP TO THE <span>SIMULATOR</span></h2>
              </div>
              <br></br>
              <br></br>
              <br></br>
              {/* <div className="contact-info-list mb-40">
                <ul>
                  <li><i className="fas fa-map-marker-alt" />Walking Park, Los Angeles, Brockland, USA</li>
                  <li><i className="fas fa-envelope" />info@cloux.com</li>
                </ul>
              </div> */}
              {/* <textarea name="message" id="message" placeholder="Write Message..." defaultValue={""} /> */}
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Email"  value={email}
                      onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Password" value={password}
                      onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                  </div>
                  <br></br>
                  <button>SIGNUP</button>
                </form>
                <br></br>
                  <button>LOGIN</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SignUpForm