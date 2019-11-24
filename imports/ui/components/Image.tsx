import React from 'react';
import FontAwesome from 'react-fontawesome';
import Moment from 'react-moment';

import StyledImage from '../elements/StyledImage';
import Spinner from './Spinner';

const image_url:string = "https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg";

const Image = (props:any):JSX.Element => {
    const { loading, mine, createdAt, content } = props;
    const renderContent = ():JSX.Element => {
        if(loading) {
            return <Spinner />
        } else if(!mine) {
            return (
                <>
                    <img
                        className="image"
                        alt=""
                        src={content}
                    />
                    <div className="image--overlay">
                    <div className="detailsContainer">
                        <div className="image--date">
                            <Moment format="HH:mm">
                                {createdAt}
                            </Moment>
                        </div>
                    </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <img
                        className="image"
                        alt=""
                        src={content}
                    />
                    <div className="image--overlay">
                        <div className="detailsContainer __date">
                            <div className="image--date">
                                <Moment format="HH:mm">
                                    {createdAt}
                                </Moment>
                            </div>
                            <FontAwesome 
                                style={{ color: 'white' }} 
                                name="check-double"
                            />
                        </div>
                    </div>
                </>
            )
        }
    }
    return (
        <StyledImage mine={mine}>
            {renderContent()}
        </StyledImage>
    )
}

export default Image;