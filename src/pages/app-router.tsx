import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppDispatch, RootState } from '../core/store';
import { getUser } from '../core/user/user.slice';
import { Auth } from './auth';
import { Home } from './home';
import { AuthLayout, HomeLayout } from './layouts';

export const AppRouter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (isLoading) return null;

  return (
    <Routes>
      {!user ? (
        <Route element={<AuthLayout />}>
          <Route path={'/auth/login'} element={<Auth />} />
          <Route path={'/auth/register'} element={<Auth />} />
          <Route path='*' element={<Navigate to='/auth/login' replace />} />
        </Route>
      ) : (
        <Route path='' element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      )}
    </Routes>
  );
};
