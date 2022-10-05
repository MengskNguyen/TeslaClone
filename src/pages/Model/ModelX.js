import React from 'react';

import carInfo from '~/assets/carInfo.json';
import Model from './Model/Model';

const { ...props } = carInfo[2];

const ModelX = () => {
    return (
        <div>
            <Model {...props} />
        </div>
    );
};

export default ModelX;
