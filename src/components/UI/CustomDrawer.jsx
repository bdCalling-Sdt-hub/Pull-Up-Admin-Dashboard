/* eslint-disable react/prop-types */
import { Drawer } from 'antd';
import userpic from '../../assets/profile_user.png'
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



const CustomDrawer = ({ data, open, setOpen }) => {

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
      <Drawer title={data?.name} onClose={onClose} open={open}>
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
          <div className=' flex items-center gap-4 py-2'>
            <FaPhoneAlt color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{data?.number}</p>
          </div>
          <div className=' flex items-center gap-4 py-2'>
            <BsCalendar2Date color='#0071E3' />
            <p style={{ fontSize: "18px" }}>12/11/1997</p>
          </div>
          <div className=' flex items-center gap-4 py-2'>
            <CiLocationOn color='#0071E3' />
            <p style={{ fontSize: "18px" }}>abc 12 st avenue New York, USA</p>
          </div>

        </div>
      </Drawer>
    </>
  );
};
export default CustomDrawer;