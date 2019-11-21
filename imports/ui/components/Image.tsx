import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledImage from '../elements/StyledImage';

const image_url:string = "https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg";

const Image = (props:any):JSX.Element => {
    return (
        <StyledImage mine={props.mine}>
            {!props.mine ? (
                <>
                    <img
                        className="image"
                        alt=""
                        src={image_url}
                    />
                    <div className="image--overlay">
                    <div className="detailsContainer">
                        <span className="image--date">11:33</span>
                    </div>
                    </div>
                </>
            ) : (
                <>
                    <img
                        className="image"
                        alt=""
                        src={image_url}
                    />
                    <div className="image--overlay">
                        <div className="detailsContainer __date">
                            <span className="image--date">11:33</span>
                            <FontAwesome 
                                style={{ color: 'white' }} 
                                name="check-double"
                            />
                        </div>
                    </div>
                </>
            )}
        </StyledImage>
    )
}

export default Image;