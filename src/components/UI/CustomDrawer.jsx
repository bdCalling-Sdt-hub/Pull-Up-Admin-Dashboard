/* eslint-disable react/prop-types */
import { Drawer } from 'antd';
import { FaRegUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import star from '../../assets/Star.png'



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
              <img width={120} style={{ borderRadius: "5px" }} src={data?.image?.publicFileUrl} alt="" />
            </div>
            <div className="flex items-center justify-between">
              <p style={{ fontSize: "20px" }}>{data?.name}</p>
              <p className="flex items-center">
                <span>
                  <img src={star} alt="star" />
                </span>
                ({data?.averageRating})
              </p>
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
            <p style={{ fontSize: "18px" }}>{data?.name}</p>
          </div>
          <div className=' flex items-center gap-4 py-2'>
            <MdOutlineEmail color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{data?.email}</p>
          </div>
          <div className=' flex items-center gap-4 py-2'>
            <FaPhoneAlt color='#0071E3' />
            <p style={{ fontSize: "18px" }}>{data?.phoneNumber}</p>
          </div>

          {/* <p className="text-[#454545] mt-4">Helloo</p> */}

          {
            data?.accountType === "business" &&
            <div className="mt-4">
              <h3 className="text-[#454545] text-sm font-bold">About Shop:</h3>
              <p className="text-[#454545] mt-4">Name: {data.businessName}</p>
              <p className="text-[#454545] mt-4">Description: {data.businessDescription}</p>
              <p className="text-[#454545] mt-4">Email: {data.businessEmail}</p>
              <p className="text-[#454545] mt-4">Number: {data.businessNumber}</p>
              <p className="text-[#454545] mt-4">Website: {data.businessWebsite}</p>
              <p className="text-[#454545] mt-4">Package: {data.packageDuration}</p>
              <ul className="list-disc pl-4">
                {data?.openingHours?.map((hour, index) => (
                  <li key={index}>{hour}</li>
                ))}
              </ul>
            </div>
          }

          {
            data?.accountType === "organisation" &&
            <div className="mt-4">
              <h3 className="text-[#454545] text-sm font-bold">About Organisation:</h3>
              <p className="text-[#454545] mt-4">Name: {data.organisationName}</p>
              <p className="text-[#454545] mt-4">Description: {data.organisationDescription}</p>
              <p className="text-[#454545] mt-4">Email: {data.organisationEmail}</p>
              <p className="text-[#454545] mt-4">Number: {data.organisationNumber}</p>
              <p className="text-[#454545] mt-4">Website: {data.organisationWebsite}</p>
              <p className="text-[#454545] mt-4">Package: {data.packageDuration}</p>
              <ul className="list-disc pl-4">
                {data?.openingHours?.map((hour, index) => (
                  <li key={index}>{hour}</li>
                ))}
              </ul>
            </div>
          }

        </div>
      </Drawer>
    </>
  );
};
export default CustomDrawer;