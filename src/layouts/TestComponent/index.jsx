import React from 'react'
import InnerContent from "~/components/InnerContent";

import Package from "~/components/Package/index";
import Functional from "~/components/Functional/index";
import TeamContact from "~/components/TeamContact";
import ManageSolution from "~/components/ManageSolution";
import Banner from '~/components/Banner';
const TestComponen = () => {
    return (
        <div>
            <Banner />
            <InnerContent>
                <Functional />
                <Package />
                <TeamContact />
                <ManageSolution />
            </InnerContent>
        </div>
    )
}

export default TestComponen
