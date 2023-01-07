import React, { Component } from 'react';




export default class ProjectsLayout extends Component {
    render() {

        const ProjectContClass = this.props.ProjectContClass ? this.props.ProjectContClass : '';
       
        return (
            <>

                <div className="mx-20">
                    <div className={ProjectContClass + ""}>
                    <div>{this.props.Project}</div>
                    </div>
                    </div>
            </>
        );
    }
}
