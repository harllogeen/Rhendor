import React from 'react';
import LandingTemplate from '../../components/layouts/LandingTemplate';
import Emoji from '../../assets/img/others/emoji.svg';


// And now we can use these
const ResetNewPasswordSuccess = () => {
    return (
        <LandingTemplate>
            <div className="flex flex-wrap">
                <div className="w-1/2 bg-blue-900 py-80">
                    <h3 className="mt-135 text-center mt-256 pt-115 text-white">Recover  your account </h3>
                    <p className="text-white text-center mt-6">We’ll walk you through to regain access to your account</p>

                    <div className="pt-32 mb-6 ml-10">
                        <p>© 2022 Rhenda. All rights reserved.</p>
                    </div>
                </div>
                <div className="w-1/2 bg-white h-256">
                    <p className="py-6 ml-80">Don't have an account? <a href="#" className="text-blue-900">Sign up</a></p>
                    <hr />
                    <form>
                        <div className="px-5 mt-32 mx-40 mb-24 border-2 border-gray py-10 rounded-lg mr-40 mb-60">
                            <img src={Emoji} alt="Emoji" className="w-100 h-98 ml-24 mb-12"></img>
                            <p className="text-sm">Your password has been reset successfully</p>
                            <button type="submit" className="container bg-blue-900 border mt-8 border-gray-300 text-white text-sm rounded-md">Proceed to Login</button>
                        </div>
                    </form>
                    <div className="flex">
                        <div className="w-1/2">
                            <p className="flex items-center ml-5 text-sm"><svg className="mb-0 p-8 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>Still having problem?</p>
                        </div>
                        <div className="w-1/2">
                            <p className="ml-24 text-sm mb-0"><a href="#" className="text-blue-900">Terms of Service</a>|<a href="#" className="text-blue-900">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>




        </LandingTemplate>
    );
};

export default ResetNewPasswordSuccess;
