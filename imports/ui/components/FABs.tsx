import React from 'react';

import FABItem from './FABItem';
import StyledFABs from '../elements/StyledFABs';

let fileInput:any;

const FABs = (props:any):JSX.Element => {
    const { onFabItemClick, onInputChange } = props;
    return (
        <StyledFABs fabVisible={props.fabVisible}>
            <FABItem onClick={onFabItemClick} iconName="image" bg="violet">
                <input 
                    accept="image/*" 
                    type="file" 
                    id="fileupload"
                    onChange={onInputChange}
                />
            </FABItem>
            <FABItem iconName="camera" bg="orange" />
            <FABItem iconName="file" bg="blue" />
            <FABItem iconName="user" bg="lightblue" />
        </StyledFABs>
    )
}

export default FABs;