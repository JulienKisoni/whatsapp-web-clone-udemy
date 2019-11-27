import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledImageViewer from '../elements/StyledImageViewer';

const ImageViewer = (props:any):JSX.Element => {
    const { onIVClose , imageUrl } = props;
    return (
        <StyledImageViewer>
            <div className="IV--close">
                <FontAwesome 
                    name="times"
                    className="IV--icon"
                    onClick={onIVClose}
                />
            </div>
            <div className="IV--imageContainer">
                <img alt="" src={imageUrl} className="IV--image" />
            </div>
        </StyledImageViewer>
    )
}

export default ImageViewer;
