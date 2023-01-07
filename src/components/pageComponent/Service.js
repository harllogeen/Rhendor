import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Service extends Component {
  constructor(props) {
    super(props);

    let route = this.props.add ? this.props.add : 'servicerhendors';
    let add = '';
    let user = JSON.parse(sessionStorage.getItem('user'));
    
    if (user === null)
      add = `/login/${route}/${props.id}`;
    else
      add = `/${route}/${props.id}`;

    this.state = { add }
  }

  textStyles = {
    fontFamily: 'Inter',
    fontWweight: '400',
    // lineHeight: '18px',
    letterSpacing: '0px',
    textSlign: 'center',

  }

  render() {
    const contClass = this.props.contClass ? this.props.contClass : '';
    return (
      <>
        <Link to={this.state.add}>
          <div className={`${contClass}`}>
            <div className={`mt-8 sm:mt-20 mx-2 p-2 sm:p-3 flex flex-col items-center text-center rounded-xl bg-gray-300 w-[120px] h-[200px] sm:h-[390px] sm:w-[318px]`}>
              <img src={this.props.image} alt="electrician" className="-mt-5 sm:-mt-11 w-[100%] h-[40%] xs:h-[60%] sm:w-[273px] sm:h-[217px] rounded-xl" />
              <h5 className="mt-2 sm:mt-6 text-[10px] sm:text-sm leading-none">{this.props.name}</h5>
              <span className="w-[15%] h-1 border-t-4 border-accent-400 mt-2 sm:mt-6"></span>
              <p className="mt-2 sm:mt-6 text-[6px] overflow-hidden sm:text-sm" style={this.textStyles}>{this.props.description}</p>
            </div>
          </div>
        </Link>
      </>
    )
  }
}
