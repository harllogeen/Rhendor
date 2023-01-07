import React, { Component } from 'react';
import Button from '../form/Button';
import { BindThis } from 'des-utilities';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "hidden",
        };

        BindThis(this, ['toggle']);
    }

    toggle() {
        let modal = '';
        modal = document.getElementById(this.props.id)

        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden')
            modal.classList.add('flex')
        }
        else {
            modal.classList.add('hidden')
            modal.classList.remove('flex')
        }
    }

    componentDidMount() {
        if (!this.props.existingId) {
            const element = document.getElementById(this.props.id);
            const root = document.getElementById('modalRoot');

            root.appendChild(element);
        }
    }

    componentWillUnmount() {
        if (!this.props.existingId) {
            const element = document.getElementById(this.props.id);
            const root = document.getElementById('modalRoot');

            root.removeChild(element);
        }
    }

    render() {
        const modalClass = this.props.modalClass ? this.props.modalClass : "py-16 px-6 lg:px-8";
        const size = this.props.size ? 'max-w-' + this.props.size : 'max-w-lg';
        const id = this.props.id;
        return (
            <>
                <span onClick={this.toggle}>{this.props.trigger ? this.props.trigger : <Button text="Toggle" textSize="sm" />}</span>

                {
                    // if it's not an existing modal
                    !this.props.existingId &&
                    <div id={id} tabIndex="-1" aria-hidden="true" className={this.state.display + " bg-gray-400/60 dark:bg-gray-900/80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 w-full md:inset-0 h-modal md:h-full justify-center items-center"}>
                        <div className={"relative p-4 w-full h-auto " + size}>

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={this.toggle}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                                <div className={modalClass}>{this.props.children}</div>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
};
