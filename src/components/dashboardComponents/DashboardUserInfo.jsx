import { Col } from 'antd';
import { FaUserGroup } from 'react-icons/fa6';
import business from '../../assets/business.png'
import shopping from '../../assets/shopping.png'
import organization from '../../assets/organization.png'
import { useAllUsersQuery } from '../../Redux/api/dashboardApi';

const DashboardUserInfo = () => {

    const { data: allUserData } = useAllUsersQuery();
    // console.log("AllData", allUserData)

    // Filter the data to get only Business Account type
    const businessAccounts = allUserData?.data?.result?.filter(
        (user) => user?.accountType === 'business'
    );

    const organisationAccounts = allUserData?.data?.result?.filter(
        (user) => user?.accountType === 'organisation'
    );

    const shoppingAccounts = allUserData?.data?.result?.filter(
        (user) => user?.accountType === 'shopping'
    );

    // Get the length of Business Account type data
    const businessAccountsLength = businessAccounts ? businessAccounts.length : 0;
    const organisationAccountsLength = organisationAccounts ? organisationAccounts.length : 0;
    const shoppingAccountsLength = shoppingAccounts ? shoppingAccounts.length : 0;

    return (
        <div className="flex flex-row">
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <FaUserGroup size={60} />
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            {allUserData?.data?.result.length}
                        </p>
                        <p className="text-[20px] text-[#454545] font-light">
                            Total Account
                        </p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <img src={organization}></img>
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            {organisationAccountsLength}
                        </p>
                        <p className="text-[19px] text-[#454545] font-light">
                            Organization Account
                        </p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <img src={shopping}></img>
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            {shoppingAccountsLength}
                        </p>
                        <p className="text-[20px] text-[#454545] font-light">
                            Shopping Account
                        </p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <img src={business}></img>
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            {businessAccountsLength}
                        </p>
                        <p className="text-[20px] text-[#454545] font-light">
                            Business Account
                        </p>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default DashboardUserInfo;