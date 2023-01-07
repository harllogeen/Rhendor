import React, { Component, useState } from 'react';
import SvgIcon from '../icons/SvgIcon';
import { BindThis } from './BindThis';


export default class DarkMode extends Component {
    constructor(props) {
        super(props);

        let themeToggleDisplay = true;

        // Theme toggle display
        // if themeToggleDisplay is set in local storage
        if (localStorage.getItem('theme-toggle-display')) {
            // convert to boolean from string and store in variable
            themeToggleDisplay = JSON.parse(localStorage.getItem('theme-toggle-display'));

            // if not, set themeToggleDisplay in local storage
        } else {
            localStorage.setItem('theme-toggle-display', themeToggleDisplay);
        }


        let darkMode = false;
        // Dark mode
        // if theme or user preference is dark
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            // set theme, localStorage and toggle to dark
            localStorage.setItem('color-theme', 'dark');
            darkMode = true;
            document.documentElement.classList.add('dark');
            // else, set theme, localStorage and toggle to light
        } else {
            localStorage.setItem('color-theme', 'light');
            darkMode = false;
            document.documentElement.classList.remove('dark');
        }

        // set state
        this.state = {
            themeToggleDisplay: themeToggleDisplay,
            darkMode: darkMode,
        };

        // bind this to methods
        BindThis(this, ['toggleDarkMode', 'shareDarkMode']);

        // share dark mode value to other components
        this.shareDarkMode(darkMode);
    }

    // share dark mode value to other components
    shareDarkMode = (darkMode) => {
        if (this.props.manageDarkMode) {
            this.props.manageDarkMode(darkMode);
        }
    }


    // toggle dark mode
    toggleDarkMode = () => {
        this.setState(function (state, props) {
            let darkMode = !this.state.darkMode;

            // change display theme
            // change color-theme in localStorage based on darkMode
            if (darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // share dark mode value to other components
            this.shareDarkMode(darkMode);

            // toggle state
            return {
                darkMode: darkMode
            }
        })
    }

    render() {
        return (
            <div>
                {/* content, making dark mode a single source of truth for toggling dark mode */}
                {this.props.children}

                {/* dark mode button */}
                <button
                    id="themeToggleBtn"
                    onClick={this.toggleDarkMode}
                    type="button"
                    className={(this.state.themeToggleDisplay ? '' : 'hidden') + " text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-3 fixed bottom-2 left-2 z-30 opacity-40 hover:opacity-100"}
                >
                    {/* light to dark icon */}
                    <div className={(this.state.darkMode && "hidden") + " w-6 h-6"} id="themeToggleLightIcon" ><SvgIcon type="moon" /></div>

                    {/* dark to light icon */}
                    <div className={(!this.state.darkMode && "hidden") + " w-6 h-6"} id="themeToggleDarkIcon" ><SvgIcon type="sun" /></div>
                </button>
            </div>
        )
    }
}
