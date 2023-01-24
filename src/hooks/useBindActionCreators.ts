import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

export const useBindActionCreators = (
  creators: ActionCreatorsMapObject<any>,
) => {
  const dispatch = useDispatch();

  const result = useMemo(
    () => bindActionCreators(creators, dispatch),
    [creators, dispatch],
  );

  return result;
};
