import React from 'react';

import carInfo from '~/assets/carInfo.json';
import Model from './Model/Model';

const { ...props } = carInfo[0];

const ModelS = () => {
    return (
        <div>
            <Model {...props} />
        </div>
    );
};

export default ModelS;
