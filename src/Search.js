import React from 'react';
import classNames from 'classnames';

import './style.css';

const SearchComponent = ({ placeHolder, userSearch, clearSearch, searchData, searchSuggestions, searchTerm }) => {

  return (
    <div>
      <div className="btn-group search">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>

          <input
            type="text"
            className="form-control"
            placeholder={!placeHolder ? "Search..." : placeHolder}
            onChange={(event) => userSearch(event)}
            value={searchTerm} />

          {searchTerm !== ""
            ? <div className="reset">
                <a href="#" onClick={(event) => clearSearch(event)}>
                  <i className="fas fa-times"></i>
                </a>
              </div>
            : null
          }
        </div>

        {searchTerm !== ""
          ? <div className="dropdown-menu">
            {
              searchSuggestions.length > 0
              ? searchSuggestions.map((searchSuggestions, index) => {
                return (
                  <a
                    className="dropdown-item"
                    href={window.origin + "/" + searchSuggestions.route}
                    key={index}
                  >
                    {searchSuggestions.name}
                  </a>
                )
              })
              : <div className="dropdown-item">No result(s)</div>
            }
            </div>
          : null
        }
      </div>
    </div>
  )
}

export default SearchComponent;