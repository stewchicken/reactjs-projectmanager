import React, { Component } from 'react';
import PropTypes from 'prop-types';



class ProjectItem extends Component {
    //pass to Projects 
    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
        return (
            <li className="ProjectItem">
                <strong>   {this.props.project.title} </strong> - {this.props.project.category}
                <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}> Delete </a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}

export default ProjectItem;

// nsf100bwugRiedberg
// LangeHstr41!