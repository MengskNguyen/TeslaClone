import React from 'react';

import carInfo from '~/assets/carInfo.json';
import Model from './Model/Model';

const { ...props } = carInfo[3];

const ModelY = () => {
    return (
        <div>
            <Model {...props} />
        </div>
    );
};

export default ModelY;
