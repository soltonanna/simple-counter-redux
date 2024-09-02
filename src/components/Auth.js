import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  function loginHandler(e){
    e.preventDefault();

    dispatch(authActions.login());

    localStorage.setItem("counter-auth", "true");
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value="some-email@gmail.com" />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value="some-pass123"/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
