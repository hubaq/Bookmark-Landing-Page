import { useState } from 'react';
import Button from './Button';

const Update = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
    setError(false);
  }

  function handleSend() {
    if (email !== '') {
      if (!email.includes('.') || !email.includes('@')) {
        setError(true);
        setErrorMessage("Whoops, make sure it's an email ");
      } else {
        setEmail('');
        setError(false);
      }
    } else {
      setError(true);
      setErrorMessage('Whoops, this field is required ');
    }
  }
  return (
    <section className='update'>
      <div className='all'>
        <p>35,000+ already joined</p>
        <h1>Stay up-to-date with what we&apos;re doing</h1>
        <div className='contact'>
          {error && (
            <div className='cover'>
              <div className='errorDiv'>
                <p>{errorMessage}</p>
              </div>
            </div>
          )}
          <div className='inputContainer'>
            <input
              type='email'
              value={email}
              onChange={e => handleChange(e)}
              name='email'
              id='email'
              placeholder='Enter your email address'
            />
            {error && <img src='icon-error.svg' alt='' className='error' />}
          </div>
          <Button
            Class={`contact-btn ${error ? 'btn__error' : ''}`}
            name='Contact Us '
            onSend={handleSend}
          />
        </div>
      </div>
    </section>
  );
};

export default Update;
