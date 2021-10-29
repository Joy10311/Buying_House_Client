import React from 'react';
import useServices from '../../Hooks/useServices/useServices';
import SetGuide from '../SetGuide/SetGuide';

const Blog = () => {
    const [services] = useServices([]);
    return (
        <div className="grid lg:grid-cols-3">
            {
                services.map(servi => <SetGuide
                    key={servi._id}
                    servi={servi}
                ></SetGuide>)
            }
        </div>
    );
};

export default Blog;