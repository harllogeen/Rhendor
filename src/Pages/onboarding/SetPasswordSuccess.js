import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import ResetLayout from '../../components/layouts/ResetLayout';
import Form from '../../components/form/Form';
import FullButton from '../../components/form/FullButton';
import PageLink from '../../components/nav/PageLink';
import Emoji from '../../assets/img/icon/emoji.svg';


// And now we can use these
export default class SetPasswordSuccess extends Component {
    render() {
        return (
            <ResetLayout SideTitle="Recover  your account" SideParagraph="We’ll guide you to recovering your account in a few steps"
            // headLink={(
            //     <>
            //         Don't have an account? <Link to="/register" className="my-nav-link text-base-400 hover:text-base-500 inline-block">Sign up</Link>
            //     </>
            // )}
            >
                <div className="w-2/3 xl:w-1/2 mx-auto">
                    <Form formClasses="light-border border-2 p-8">
                        <img src={Emoji} alt="Emoji" className="mx-auto pb-12"></img>
                        <p class Name="text-gray-800 pb-12">Your password has been reset successfully</p>
                        <FullButton text="Proceed to Login" type="submit" contClass="mt-12 lg:mt-10" textSize="sm" />
                    </Form>
                </div>
            </ResetLayout>
        );
    }
};
