import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { authActions } from './store/auth-slice';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('counter-auth');
    if (storedUserLoggedInInformation === 'true') {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && (
        <>
          <UserProfile />
          <Counter />
        </>
      )}
    </>
  );
}

export default App;
