import { LinkPrimaryButton } from "./button";

const NotFound = () => {
    return ( 
        <div className="text-center py-5">
            This page is nowhere to be found
            <div className="py-5">
                <LinkPrimaryButton link="/" children="return Home" />
            </div>
        </div>
     );
}
 
export default NotFound;