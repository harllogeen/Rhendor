import React, { Component } from 'react';
import Service from './Service';
import DuplicateItems from './../features/DuplicateItems';
import { MyConfig } from '../../MyConfig';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HttpRequest, { ProcessHttpMessage } from 'des-http-processor';
import { toast } from 'react-toastify';
import { BindThis } from "des-utilities";

export default class ServicesGrid extends Component {

    render() {
        return (
            <>
                <div className="flex">
                    <div className={"flex flex-wrap mt-6 items-center justify-between w-full"}>
                        {
                            this.props.services?.map((service, key) => <Service key={key} {...service} />)
                        }
                    </div>
                </div>
            </>
        )
    }
}
