import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledSearchbar from '../elements/StyledSearchbar';

const Searchbar = (props:any):JSX.Element => {
    const [value, setValue] = React.useState<string>("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        props.onSearch(e.target.value);
    }
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
                    value={value}
                    onChange={handleChange} 
                />
            </label>
        </StyledSearchbar>
    )
}

export default Searchbar;
