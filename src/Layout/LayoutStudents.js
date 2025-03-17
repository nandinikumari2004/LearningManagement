import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
// import Dashboard from "../Dashboard/Dashboard";
import Students from "../Students/Students";

const LayoutStudents = () => {
    return (
        <>
            <div className="layout">
                <div className="main-container">
                    <Sidebar />
                    <div className="content">
                        <Header className="header" />
                        <Students className="students" />
                        {/* <Dashboard className="dashboard" /> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default LayoutStudents;