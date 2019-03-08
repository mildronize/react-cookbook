import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    isActive: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setVisibilityFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
});

const FilterButton = ({ isActive, children, setVisibilityFilter }) => (
    <button
        onClick={() => setVisibilityFilter()}
        disabled={isActive} >
    {children}
    </button>
)

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);