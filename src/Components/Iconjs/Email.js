import React from 'react';

import Icon from '../Icons/email.svg'

export default (props)=>{
    return <img alt="icon" style={{width: props.width || 20}} src={Icon}/>
}