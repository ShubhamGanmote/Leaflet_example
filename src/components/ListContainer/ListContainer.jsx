import React from 'react';

import './ListContainer.css';

const trimString = string => {
  if (string.length === 0) {
    return false;
  } else {
    return string.substr(0, 10) + '...';
  }
};

const ListContainer = props => {
  const searchResults = props.searchResults.map(result => {
    return (
      <li key={result.id}>
        <div>
          <div>
            <span className="image-span-class"></span>
          </div>
          <div>
            <span>{trimString(result.label)}</span>
            <span>2,834sq ft</span>
            <span>$302k</span>
            <span>Office</span>
          </div>
        </div>
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className="search-list-container">
        <span className="search-heading">Search Results</span>
        <div className="search-results-container">
          <ul className="search-results-list">{searchResults}</ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListContainer;
