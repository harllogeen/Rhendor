import React from "react";
import ResetSide from '../../components/ResetSide';

const ResetPassword = () => {
    return (
        <div className="h-screen">
            <div className="flex h-screen">
                <div className="bg-gbase-500">
                    <ResetSide />
                </div>
                <div>
                    <div>
                        <div>
                            <div className="h-screen flex flex-col">
                                <div className="md:mt-10 text-right">© 2022 Rhenda. All rights reserved.</div>
                                <div className="h-5/6 md:grow flex justify-center items-center">
                                    <div className="content-center flex"><div>
                                        <h2>We got you covered</h2>
                                        <p className="mt-6">We’ll walk you through to regain access to your account</p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div>© 2022 Rhenda. All rights reserved.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
