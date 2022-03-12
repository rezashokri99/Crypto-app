import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Notify = (text, type) => {
    if (type === "success") {
        return toast.success(text);
        
    } else if(type === "change") {
        return toast.info(text);
    }else {
        return toast.error(text);
    }
}
 
export default Notify;

