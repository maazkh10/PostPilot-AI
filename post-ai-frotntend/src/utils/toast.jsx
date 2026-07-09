import { toast } from "react-toastify";


export const notify = {
    success : (message) =>{
        toast.success(message , {
            style:{
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: "14px",
        borderRadius: "12px", // Matches your rounded-xl input layouts
        color: "#000000"
            }
        })
    },
    errror : (message) =>{
        toast.error(message, {
            style: {
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: "14px",
        borderRadius: "12px",
        color: "#000000"
            }
        })
    }
}