import React from 'react'
import SvgIcon from 'des-svg-icons'
import { BindThis } from 'des-utilities';

export class RatingWithProgress extends React.Component {
    constructor(props) {
        super(props);

        BindThis(this, ['mapStars']);
    }

    mapStars() {
        let stars = [];

        for (let i = 0; i < this.props.stars; i++)
            stars.push(<SvgIcon type="LittleStar" />);

        return stars;
    }

    render() {
        const percentage = this.props.percentage ? this.props.percentage : Math.ceil(this.props.rating / (this.props.totalRating / 100));
        console.log(Math.ceil(this.props.rating / (this.props.totalRating / 100)))
        return (
            <div className="flex flex-row items-center space-x-3">
                <h3 className="mt-0">{this.props.stars}</h3>
                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row space-x-2 grow">
                    {this.mapStars()}
                </div>
                <div className=" dark:text-gray-400">
                    <span>({this.props.rating})</span>
                </div>
                <div className="bg-gray-200 rounded-full dark:bg-white w-[200px] h-[15px]">
                    <div className={`bg-blue-600 rounded-full h-full`} style={{width: `${percentage}%`}}>
                    </div>
                </div>
            </div>
        );
    }
}
