import React from 'react';
import useServices from '../../Hooks/useServices/useServices';
import SetTours from '../SetTours/SetTours';

const Tours = () => {
    const [services] = useServices([]);

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