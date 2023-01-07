import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';



export default class RankingStars extends Component {
    render() {
        return (
            <>

                <div className="flex space-x-5">
                <div>
                <SvgIcon type="LittleStar" />
                </div>
                <div>
                <SvgIcon type="LittleStar" />
                </div>
                <div>
                <SvgIcon type="LittleStar" />
                </div>
                <div>
                <SvgIcon type="LittleStar" />
                </div>
                <div>
                <SvgIcon type="LittleStarPlain" />
                </div>
                </div>

            </>
        );
    }
}
