import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import { authActions } from '../store/auth-slice';
import classes from './Header.module.css';

const Header = () => {
  const [isAuthToken, setIsAuthToken] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("counter-auth");
    dispatch(authActions.logout());
    setIsAuthToken(false);
  }, [dispatch]);

  useEffect(() => {
    const authToken = localStorage.getItem("counter-auth");
    setIsAuthToken(!!authToken);
  }, [isAuth]);

  return (
    <header className={classes.header}>
      <h1>Counter App</h1>

      {isAuthToken && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
