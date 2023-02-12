import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppDispatch } from 'store';
import { getSelf, userActions } from 'store/slices/user';

import { useBindActionCreators } from 'hooks/useBindActionCreators';

import { LocalStorage } from 'utils/local-storage';
import { errorNotification } from 'utils/notification';

import { routes } from 'constants/routes';

export const useAuth = () => {
  const { setLoading } = useBindActionCreators({ ...userActions });

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (LocalStorage.get('accessToken') || LocalStorage.get('refreshToken')) {
        dispatch(getSelf()).unwrap();
      } else {
        setLoading(false);
        navigate(routes.auth);
      }
    } catch (error) {
      errorNotification(error);
    }
  }, []);
};
