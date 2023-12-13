

import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    // Extract user credentials from the form fields
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Check if email and password are not empty
    if (!email.trim() || !password.trim()) {
      console.error('Please provide valid email and password');
      return;
    }

    // Dispatch the login action with user credentials
    dispatch(authActions.login({ email, password }));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
