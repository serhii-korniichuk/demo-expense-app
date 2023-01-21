import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export const useAction = (actions: any[], deps?: any): any => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      return actions.map((action) => bindActionCreators(action, dispatch));
    },
    deps ? [dispatch, ...actions] : [dispatch],
  );
};
