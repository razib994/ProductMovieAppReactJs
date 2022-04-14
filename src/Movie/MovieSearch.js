import React, {useEffect, useState} from 'react';

const MovieSearch = (props) => {
    const [searchText, setSearchText] = useState("");

    const handleData = (e) => {
setSearchText(e.target.value)
    }

useEffect(()=> {
props.onSearch(searchText);
},[searchText]);

    return (
        <div>
            <input type="text" name="search" placeholder="Movie Name Searching.." value={searchText} onChange={handleData} className="form-control"/>
        </div>
    );
}

export default MovieSearch;