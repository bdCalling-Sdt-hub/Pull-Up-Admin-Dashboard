import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
// import baseAxios from "../../../../Config";
import Swal from "sweetalert2";
import { useCreateSupportMutation, useGetSupportQuery } from "../../../Redux/api/settingsApi";

const Support = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const [createPrivacy] = useCreateSupportMutation();
    const { data: getSupportData } = useGetSupportQuery();
    console.log("Data", getSupportData)

    const aboutUsDataSave =async () => {
        try {
            const response = await createPrivacy({ content }).unwrap();
            console.log("response", response)

            Swal.fire(response?.message, "", "success");

        } catch (err) {
            console.log(err);
            Swal.fire(err?.data?.message, "", "error");
        }
    };

    useEffect(() => {
        if (getSupportData) {
            setContent(getSupportData?.data?.content || "");
        }
    }, [getSupportData]);

    return (
        <div className="pt-5">
            <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => {
                    setContent(newContent);
                }}
            />
            <div
                onClick={aboutUsDataSave}
                className="cursor-pointer w-full h-12 mt-5 p-2.5 bg-[#D07E2B] rounded-lg justify-center items-center gap-2.5 inline-flex"
            >
                <div className="text-white text-lg font-semibold">
                    Save
                </div>
            </div>
        </div>
    );
};

export default Support;