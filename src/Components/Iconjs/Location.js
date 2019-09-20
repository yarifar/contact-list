import React from 'react';

import Icon from '../Icons/location.svg'

export default (props)=>{
    return <img alt="icon" style={{width: props.width || 20}} src={Icon}/>
}