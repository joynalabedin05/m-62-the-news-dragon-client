import React from 'react';
import { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';

const PrivateRoute = () => {
    const {user} = useContext(AuthContex);
    return (
        <div>
            <h5>private route</h5>
        </div>
    );
};

export default PrivateRoute;