import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledSearchbar from '../elements/StyledSearchbar';

const Searchbar = (props:any):JSX.Element => {
    return (
        <StyledSearchbar>
            <label className="searchbar--label">
                <FontAwesome 
                    name="search"
                    className="searchbar--icon"
                />
                <input 
                    className="searchbar--input" 
                    placeholder={props.placeholder}    
                />
            </label>
        </StyledSearchbar>
    )
}

export default Searchbar;
