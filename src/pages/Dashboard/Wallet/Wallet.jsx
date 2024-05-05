import DashboardPieChart from '../../../components/dashboardComponents/DashboardPieChart';
import { Col, Row } from 'antd';
import WalletUserInfo from './WalletUserInfo';
import TransactionHistory from './TransactionHistory';
import DashboardLineChart from '../../../components/dashboardComponents/DashboardLineChart';

const Wallet = () => {
    return (
        <div>
            <div>
                <Row gutter={6} className="mb-4">

                    <Col lg={16} className=''>
                        <div className='flex justify-between'>
                            <div className='w-[536px]'>
                                <DashboardPieChart />
                            </div>
                            <div>
                                <div className='w-[520px]'><WalletUserInfo /></div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <DashboardLineChart />
                        </div>
                    </Col>

                    <Col lg={8}>
                        <TransactionHistory />
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default Wallet;