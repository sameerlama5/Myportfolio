import React from 'react';
const Popupscontact = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='popupsContainer'
      >
        <div className='popupsRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='formContent'>
            <h1>What you want text me!</h1>
          <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="1b2fb8e3-cc14-4131-8f05-ef4c0aa80689"/>
          <input type="text" name="name" placeholder="Full name" required/>
          <input type="email" name="email" placeholder="Enter your email" required/>
          <input type="number" name="number" placeholder='Enter your number' required/>
          <textarea name="message" placeholder="Text me..." required></textarea>
          <button type="submit">SEND</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupscontact;