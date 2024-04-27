/* eslint-disable react/prop-types */
import { Button, Drawer } from 'antd';
import userpic from '../../assets/profile_user.png'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



const CustomDrawerIncome = ({ data, open, setOpen }) => {

  console.log(data)
  // const [open, setOpen] = useState(false);
  // const showDrawer = () => {
  //   setOpen(true);
  // };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer title="John Doe" onClose={onClose} open={open}>
        <div>

          <div
            style={{ display: "flex", gap: "15px", borderBottom: "1px solid #dddddd", paddingBottom: "20px", marginBottom: "10px", alignItems: "center" }} >
            <div>
              <img width={120} style={{ borderRadius: "5px" }} src={userpic} alt="" />
            </div>
            <div style={{}}>
              <p style={{ fontSize: "20px" }}>{data?.name}</p>
            </div>
          </div>

          <div className=' flex items-center gap-4 py-2'>
            <FaRegUser color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{data?.name}</p>
          </div>
          <div className=' flex items-center gap-4 py-2'>
            <MdOutlineEmail color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{data?.email}</p>
          </div>

          <div className='bg-[#FAF6EF] p-4 rounded-lg mt-[60px]'>
            <p className='font-bold' style={{ fontSize: "18px" }}>Trx ID: {data?.trxId?.id}</p>

            <div className='flex justify-between mt-[36px]'>
              <p className='text-[#979798] text-[16px] py-2' style={{ fontSize: "18px" }}>Time & Date</p>
              <p className='text-black text-[18px] font-bold py-2' style={{ fontSize: "18px" }}>{data?.date}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[#979798] text-[16px] py-2' style={{ fontSize: "18px" }}>Payment Method</p>
              <p className='text-black text-[18px] font-bold py-2' style={{ fontSize: "18px" }}>{data?.trxId?.payment_method_types[0]}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-[#979798] text-[16px] py-2' style={{ fontSize: "18px" }}>Amount</p>
              <p className='text-black text-[18px] font-bold py-2' style={{ fontSize: "18px" }}>{'$ ' + data?.payment}</p>
            </div>
          </div>


          <div
            style={{
              position: "absolute",
              bottom: 10,
              width: "92%",
            }}
          >
            {/* <Button
              block
              style={{
                background: "black",
                color: "white",
                height: 50,
              }}
            // onClick={handlePrint}
            >
              Download
            </Button> */}
          </div>

        </div>
      </Drawer>
    </>
  );
};
export default CustomDrawerIncome;