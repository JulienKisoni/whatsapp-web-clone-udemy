import React from 'react';

import FABItem from './FABItem';
import StyledFABs from '../elements/StyledFABs';

let upfile;

const FABs = (props:any):JSX.Element => {
    const upload = () => {
        console.log('upfile', upfile);
        upfile.click();
    }
    return (
        <StyledFABs fabVisible={props.fabVisible}>
            <FABItem onClick={upload} iconName="image" bg="violet">
                <input accept="image/*" type="file" ref={el => upfile = el}/>
            </FABItem>
            <FABItem iconName="camera" bg="orange" />
            <FABItem iconName="file" bg="blue" />
            <FABItem iconName="user" bg="lightblue" />
        </StyledFABs>
    )
}

export default FABs;