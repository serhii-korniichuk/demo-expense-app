import { FC } from 'react';

import { Typography } from '@mui/material';

export const Logo: FC = () => {
  return (
    <div>
      <Typography variant="h3" color="text.primary">
        InCode
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Finance
      </Typography>
    </div>
  );
};
