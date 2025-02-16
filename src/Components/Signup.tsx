import React,{ useState }  from 'react';
import './Signup.css';

function Signup ()  {
  const [email, setEmail] = useState('');

  // Handle form submission fjskhfk siva loosu
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
      {/* IVA Logo */}
      <img src="/iva-logo.jpg" alt="IVA Logo" className="signup-logo" />

      {/* Signup Form */}
      <div className="signup-card">
        <h4 className="signup-heading">Create an Account</h4>

        {/* Email Signup Form */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail((e.target as HTMLInputElement).value)}required
          />
          <button type="submit">Sign Up with Email</button>
        </form>

        <p>Or</p>

        {/* Google Login */}
        <button className="social-button google">
          <img src="/Google-Logo.jpg"alt="Google Logo"/>
          Google
        </button>

        {/* Microsoft Login */}
        <button className="social-button microsoft">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
            alt="Microsoft Logo"/>
          Microsoft
        </button>

        {/* Legal Text */}
        <p className="legal-text">
          By clicking continue, you agree to our{' '}
          <a href="#">Terms of Service</a> and{' '}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
