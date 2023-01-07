import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import ProjectsLayout from './ProjectsLayout';

export default class PreviousJobs extends Component {
    render() {
        return (
            <>
                <div className="bg-white mt-5 rounded-lg shadow-md border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-20 py-10">
                        <h3>Previous Jobs</h3>
                    </div>
                    <hr className="pt-5" />
                    <div className=" pb-10 pt-5">
                    {/* <ProjectsLayout Project={<SvgIcon type="Project" />}/> */}
                    </div>
                </div>

            </>
        );
    }
}
