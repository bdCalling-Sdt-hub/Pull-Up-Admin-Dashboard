import { Col } from 'antd';
import { FaUserGroup } from 'react-icons/fa6';

const DashboardUserInfo = () => {
    return (
        <div className="flex flex-row">
            <Col>
                <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
                    <div className="pr-6">
                        <FaUserGroup size={60} />
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            780
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
                        <FaUserGroup size={60} />
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            780
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
                        <FaUserGroup size={60} />
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            780
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
                        <FaUserGroup size={60} />
                    </div>
                    <div>
                        <p className="text-black500 text-[20px] font-semibold">
                            780
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