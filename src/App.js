import './scss/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'// <-- import styles to be used
import { useState } from 'react';



function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false)

  const submit = (event) => {
    event.preventDefault();
    setError(validation(email));
  }

  const validation = (email) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return "Please provide a valid email";
    } return;
  }
  const twitter = <FontAwesomeIcon icon={brands('twitter')} size="lg" />
  const facebook = <FontAwesomeIcon icon={brands('facebook')} size="lg" />
  const instagram = <FontAwesomeIcon icon={brands('instagram')} size="lg" />
  const Copyright = <FontAwesomeIcon icon={solid('copyright')} />


  return (
    <div className="App">
      <>
        <div className='top'>
          <h3>PING</h3>
          <div className='launching'>
            <p className='text'>We are launching</p>
            <p className='bold'>soon!</p>
          </div>
          <p className='sub'>  Subscribe and get notified</p>
        </div>

        <div className='form'>
          <form  >
            <input style={{
              borderColor: error ? 'rgb(248, 125, 125)' : '',
            }}
              type='email'
              name='email'
              placeholder='   example@email/com  '
            />
            <p className='error'>{error}</p>
          </form>

          <div className='button'>
            <button onClick={submit}>
              Notify Me
            </button>
          </div>

        </div>

        <div className='image'>
          <img src='/images/illustration-dashboard.png' alt='dashboard' />
        </div>

        <div className='icons'>
          <div className='facebook'>{facebook} </div>
          <div className='logo'>{twitter}</div>
          <div className='instagram'> {instagram}</div>

        </div>


        <div className='footer'>
          <footer>
            <p>{Copyright}  Copyright Ping. All rights reserved.</p>

          </footer>

        </div>
      </>
    </div >
  );
}

export default App;
