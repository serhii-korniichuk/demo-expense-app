/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { PureComponent } from 'react';
import { errorNotification } from 'utils/notification';

import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { routes } from 'constants/routes';

import { Logo } from 'components/common/logo';

import styles from './error-boundary.module.scss';

export class ErrorBoundary extends PureComponent<any> {
  state = { error: null };

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  // eslint-disable-next-line
  componentDidCatch(error: any, errorInfo: any) {
    errorNotification(error);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return error ? (
      <div className="w-100 d-flex align-center justify-center h-100vh">
        <div className={styles.wrapper}>
          <Logo />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="70vh"
          >
            <Box>
              <Typography variant="h2" color="text.primary">
                Oops, something went wrong 😢
              </Typography>
            </Box>
            <Box mt={6}>
              <Link to={routes.home}>Home</Link>
            </Box>
          </Box>
        </div>
      </div>
    ) : (
      children
    );
  }
}
