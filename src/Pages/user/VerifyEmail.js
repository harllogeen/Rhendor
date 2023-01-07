import React, { Component } from 'react';
import MyForm from '../../components/form/Form';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import * as Yup from 'yup';
import FormText from "../../components/form/FormText";
import FullButton from "../../components/form/FullButton";
import PageLink from "../../components/nav/PageLink";
import FormCheck from '../../components/form/FormCheck';
import Toggle from '../../components/features/Toggle';
import FormSelect from "../../components/form/FormSelect";

export default class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        let user = JSON.parse(sessionStorage.getItem('user'))
        this.state = { user: user }
    }
    render() {
        return (
            <>
                <DashboardLayout manageDarkMode={this.manageDarkMode}>
                    <div className="grow p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="text-center gray-text">Verify Email</h2>
                    </div>
                </DashboardLayout>
            </>
        );
    }
}
