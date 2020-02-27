import React from "react";
import { connect } from "react-redux";
import { filterAll, filterByDone } from "../../redux/actions";

import { Button } from "../Button";

import "./Filter.css";

const Filter = ({ filterType, filterAll, filterByDone }) => {
  return (
    <div className="button-group">
      <span>Filter: </span>
      <Button
        className={`btn-filter btn-small ${
          filterType === "all" ? "active" : ""
        }`}
        title="All"
        onClick={() => filterAll()}
      />
      <Button
        className={`btn-filter btn-small ${
          filterType === "by done" ? "active" : ""
        }`}
        title="Done"
        onClick={() => filterByDone()}
      />
    </div>
  );
};

const mapState = ({ filterReducer: { filterType } }) => ({
  filterType
});

const mapDispatch = {
  filterAll,
  filterByDone
};

export default connect(mapState, mapDispatch)(Filter);
