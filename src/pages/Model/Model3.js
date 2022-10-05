import React from 'react';

import carInfo from '~/assets/carInfo.json';
import Model from './Model/Model';

const { ...props } = carInfo[1];

const Model3 = () => {
    return (
        <div>
            <Model {...props} />
        </div>
    );
};

export default Model3;
