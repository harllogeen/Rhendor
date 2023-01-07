import React, { Component } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import Toggle from './../../components/features/Toggle';

export default class AppSettings extends Component {
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
        // if color-theme is set in local storage
        if (localStorage.getItem('color-theme')) {
            // convert to boolean from string and store in variable
            darkMode = localStorage.getItem('color-theme') === 'dark' ? true : false;
            // if not, set color-theme in local storage
        } else {
            localStorage.setItem('color-theme', 'light');
        }

        // set state
        this.state = {
            themeToggleDisplay: themeToggleDisplay,
            darkMode: darkMode,
        };

        // bind this to functions
        this.toggleDarkModeBtn = this.toggleDarkModeBtn.bind(this);
        this.manageDarkMode = this.manageDarkMode.bind(this);
    }

    // toggle dark mode button display
    toggleDarkModeBtn = () => {
        this.setState(function (state, props) {
            let themeToggleDisplay = !state.themeToggleDisplay;

            // set local storage value
            localStorage.setItem('theme-toggle-display', themeToggleDisplay);

            themeToggleDisplay
                ? document.getElementById('themeToggleBtn').classList.remove('hidden')
                : document.getElementById('themeToggleBtn').classList.add('hidden');

            return {
                themeToggleDisplay: themeToggleDisplay,
            }
        })
    }

    // toggle dark mode
    toggleDarkMode = () => {
        this.setState(function (state, props) {
            let darkMode = !this.state.darkMode;

            // change display theme
            // change color-theme in localStorage based on darkMode
            if (darkMode) {
                document.getElementById('themeToggleDarkIcon').classList.remove('hidden');
                document.getElementById('themeToggleLightIcon').classList.add('hidden');
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                // change toggle icon and remove class
                document.getElementById('themeToggleLightIcon').classList.remove('hidden');
                document.getElementById('themeToggleDarkIcon').classList.add('hidden');
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // toggle state
            return {
                darkMode: darkMode
            }
        })
    }

    // manage darkmode
    manageDarkMode = (darkMode) => {
        this.setState(function (state, props) {
            // toggle state
            return {
                darkMode: darkMode
            }
        })
    }

    render() {
        return (
            <>
                <DashboardLayout manageDarkMode={this.manageDarkMode}>
                    <div className="w-full flex justify-center min-h-screen py-4 lg:py-8">
                        <div className="grow sm:mt-[5%] lg:mt-[10%] p-4 max-w-lg h-fit bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 flex justify-center">
                            <form className="space-y-6" action="#">
                                <h3>App Settings</h3>
                                <div className="mt-8">
                                    {/* enable dark mode */}
                                    <div className="flex items-center mb-4">
                                        <Toggle toggled={this.state.darkMode} handleToggle={this.toggleDarkMode} label="Enable dark mode" name="enabledarkmode" id="enabledarkmode" groupClass="" labelclassName="order-last dark:text-gray-400" labelSize="text-base" />
                                    </div>

                                    {/* Theme toggle display */}
                                    <div className="flex items-center mb-4">
                                        <Toggle toggled={this.state.themeToggleDisplay} handleToggle={this.toggleDarkModeBtn} label="Display dark mode toggle" name="displaydarkmodebtn" id="displaydarkmodebtn" groupClass="" labelclassName="order-last dark:text-gray-400" labelSize="text-base" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="">
                    </div>
                </DashboardLayout>
            </>
        );
    }
}
