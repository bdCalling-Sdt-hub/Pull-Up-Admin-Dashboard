/* eslint-disable react/prop-types */
import { Drawer } from 'antd';
import { FaRegUser } from "react-icons/fa";
import { MdLocationOn, MdOutlineDescription } from "react-icons/md";
import dayjs from 'dayjs';
import { BiTime } from 'react-icons/bi';
import showImage from '../../utils/showImage';



const CustomDrawerEvent = ({ data, open, setOpen }) => {

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
      <Drawer title={data?.eventData?.name} onClose={onClose} open={open}>
        <div>

          <div
            style={{ display: "flex", gap: "15px", borderBottom: "1px solid #dddddd", paddingBottom: "20px", marginBottom: "10px", alignItems: "center" }} >
            <div>
              <img width={120} style={{ borderRadius: "5px" }} src={showImage(data?.eventData?.image?.path)} alt="" />
            </div>
            <div className="flex items-center justify-between">
              <p style={{ fontSize: "20px" }}>{data?.eventData?.name}</p>
              {/* <p className="flex items-center">
                <span>
                  <img src={star} alt="star" />
                </span>
                ({data?.averageRating})
              </p> */}
            </div>

            {/* <div className="flex items-center justify-between">
              <h1 className="text-[#454545] text-lg">{data?.name}</h1>
              <p className="flex items-center">
                <span>
                  <img src={star} alt="star" />
                </span>
                ({data.rating})
              </p>
            </div> */}
          </div>

          <div className=' flex items-center gap-4 py-2'>
            <FaRegUser color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{data?.eventData?.name}</p>
          </div>
          <div className=' flex items-center gap-4 py-2'>
            <MdLocationOn color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{data?.eventData?.location}</p>
          </div>
          <div className=' flex items-center gap-4 py-2'>
            <BiTime color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{dayjs(data?.eventData?.dateTime).format('dddd, h:mmA')}</p>
          </div>
          <div className=' flex items-center gap-4 py-2'>
            <MdOutlineDescription color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{data?.eventData?.description}</p>
          </div>

          {/* <p className="text-[#454545] mt-4">Helloo</p> */}

          {
            data?.userData.length > 0 &&
            <div className="mt-4">
              <h3 className="text-[#454545] text-sm font-bold">Join User</h3>

              {data?.userData?.map((userData) => (
                // <Avatar key={data.id} src={userData?.image?.publicFileUrl} />
                <div key={data.id} className='bg-[#fff] rounded-md px-2 shadow-md'>
                  <p className="text-[#454545] mt-4">Name: {userData?.name}</p>
                  <p className="text-[#454545] mt-4">Email: {userData.email}</p>
                  <p className="text-[#454545] mt-4">Number: {userData.phoneNumber}</p>
                </div>
              ))}


            </div>
          }

        </div>
      </Drawer>
    </>
  );
};
export default CustomDrawerEvent;