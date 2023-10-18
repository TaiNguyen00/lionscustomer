import React from 'react'
import InnerContent from "~/components/InnerContent";

import Package from "~/components/Package/index";
import Functional from "~/components/Functional/index";
import TeamContact from "~/components/TeamContact";
import ManageSolution from "~/components/ManageSolution";
const TestComponent = () => {
    return (
        <div>
            <InnerContent>
                <h1>
                    danh cho trang home
                </h1>
                <Functional />
                <Package />
                <TeamContact />
                <ManageSolution />
                <h1>//////////////////</h1>
            </InnerContent>
        </div>
    )
}

export default TestComponent
