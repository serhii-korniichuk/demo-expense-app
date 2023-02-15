import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    isAllowed: string | null;
    redirectPath?: string;
    children: any;
}

const ProtectedRoute: FC<Props> = (props) => {
    const {
        isAllowed,
        redirectPath = '/auth',
        children,
    } = props;

    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default ProtectedRoute;
