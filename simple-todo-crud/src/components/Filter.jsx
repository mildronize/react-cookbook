import React from 'react';
import store from '../store';

class Filter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isFilter: {
                SHOW_ALL: false,
                SHOW_ACTIVE: true,
                SHOW_COMPLETED: true,
            }
        }
    }

    handleFilter(event){
        const type = event.target.name;
        const root = store.getRoot();
        this.setState({
            isFilter: {
                SHOW_ALL: type === "SHOW_ALL" ? false : true,
                SHOW_ACTIVE: type === "SHOW_ACTIVE" ? false : true,
                SHOW_COMPLETED: type === "SHOW_COMPLETED" ? false : true,
            }
        });
        root.handleFilter(event); 
    }

    render() {
        
        return (
            <div>
                <button
                    name="SHOW_ALL"
                    disabled={!this.state.isFilter['SHOW_ALL']}
                    onClick={(e) => this.handleFilter(e)}
                >All</button>
                <button
                    name="SHOW_ACTIVE"
                    disabled={!this.state.isFilter['SHOW_ACTIVE']}
                    onClick={(e) => this.handleFilter(e)}
                >Active</button>
                <button
                    name="SHOW_COMPLETED"
                    disabled={!this.state.isFilter['SHOW_COMPLETED']}
                    onClick={(e) => this.handleFilter(e)}
                >
                Completed</button>
            </div>
        )
    }
}

export default Filter;