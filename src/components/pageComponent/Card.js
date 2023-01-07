import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import ClientContactBtn from './ClientContactBtn';
import UserDescription from './UserDescription';
import UserDistance from './UserDistance';

import Rating from './Rating';
import UserTotalJobs from './UserTotalJobs';
import RankingStars from '../features/RankingStars.js.js';
import Modal from '../features/Modal';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import ChatBoxFooter from './ChatBoxFooter';
import * as Yup from 'yup';
import FormTextArea from '../form/FormTextArea';
import MyForm from '../form/Form';
import Button from '../form/Button';



export default class Card extends Component {
    render() {
        const imgClass = this.props.imgClass ? this.props.imgClass : '';
        const contClass = this.props.contClass ? this.props.contClass : 'flex-row';
        const header = this.props.header ? this.props.header : '';
        return (
            <>
                <div className={"bg-white p-2 rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex " + contClass}>
                    {/* card image */}
                    {/* <img className={imgClass} src={this.props.image} alt={this.props.imgAlt} /> */}
                    {/* {
                        this.props.image &&
                        (
                            <div>
                                <NavLink to="/profile#AccountCard">
                                    <SvgIcon className="mx-5" type="Client" />
                                </NavLink>
                            </div>
                        )
                    } */}

                    {/* header */}
                    {
                        header && (
                            <div>{header}</div>
                        )
                    }

                    {/* content */}
                    {
                        this.props.children && (
                            <div>{this.props.children}</div>
                        )
                    }
                </div>
            </>
        );
    }
}
