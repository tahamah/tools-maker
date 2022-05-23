import React from 'react'
// import { Helmet } from 'react-helmet-async'

const Spinner = () => {
    return (
        <div className=" overflow-hidden  max-w-screen ">
            {/* <Helmet>
                <title>Loading . . . .</title>
            </Helmet> */}
            <div className="flex h-screen items-center justify-center">
                <img
                    className="h-[50vh] w-[50vh]  "
                    src="https://i.ibb.co/54kzY0V/Spinner-1s-200px.gif"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Spinner
