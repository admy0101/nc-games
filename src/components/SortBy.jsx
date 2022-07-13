import React from 'react';
import { Link} from 'react-router-dom';

const SortBy = () => {


    return (
        <div>
        <div className ="dropdown link-btn">Sort by:</div>
        <div className="dropdown-content">
            <Link className="sort-by" to={`/most-recent`}>Most Recent</Link>
        </div>
        </div>
    );
};

export default SortBy;