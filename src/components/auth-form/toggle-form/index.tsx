import { FC, useMemo } from 'react';
import { Box } from '@mui/material';

import { content } from './config';

import { ToggleFormProps } from './types';

import styles from './toggle-form.module.scss';

export const ToggleForm: FC<ToggleFormProps> = ({ haveAccount, onClick }) => {
  const currentContent = useMemo(
    () => (haveAccount ? content.signIn : content.signUp),
    [haveAccount],
  );

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
      <Box>
        <span className={styles.text}>{currentContent.text} </span>
        <a onClick={onClick} className={styles.button}>
          {currentContent.button}
        </a>
      </Box>
    </Box>
  );
};
