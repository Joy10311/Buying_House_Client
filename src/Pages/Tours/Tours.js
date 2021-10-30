import React from 'react';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import useServices from '../../Hooks/useServices/useServices';
import SetTours from '../SetTours/SetTours';

const Tours = () => {
    const [services] = useServices([]);
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div class="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">

            </div>
        </div>
    }

    return (

        <div className="grid lg:grid-cols-3">

            {
                services.map(serv => <SetTours
                    key={serv._id}
                    serv={serv}
                ></SetTours>)
            }
        </div>

    );
};

export default Tours;