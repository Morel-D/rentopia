import checkIcon from "../../assets/icon/check.png";
import crossIcon from "../../assets/icon/cross.png";
import warnIcon from "../../assets/icon/warn.png";
import InfoIcon from "../../assets/icon/info.png";
import ConnectionIcon from "../../assets/icon/connection.png"


const SuccessMessage = ({title, description}) => 
{
   
   return <div className="row col-5" id="successBox">
        <div className="col col-2 d-flex align-items-center"><img src={checkIcon} class="img-fluid rounded-top"/></div>
        <div className="col text-start">
            <div className="row py-3">
                <div className="col">
                    <h2 className="heading-succ">Success</h2>
                    <p>The data has been inser successfully</p>
                </div>
                <div className="col-1 mx-4">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </div>
        </div>

    </div>

}


const ErrorMessage = ({title, description}) => 
{
   return <div className="row col-5" id="ErrorBox">
        <div className="col col-2 d-flex align-items-center"><img src={crossIcon} class="img-fluid rounded-top"/></div>
        <div className="col text-start">
            <div className="row py-3">
                <div className="col">
                    <h2 className="heading-error">Error</h2>
                    <p>Something went wrong please try back later</p>
                </div>
                <div className="col-1 mx-4">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </div>
        </div>
    </div>
}


const WarningMessage = ({title, description}) => 
{
   return <div className="row col-5" id="WarningBox">
        <div className="col col-2 d-flex align-items-center"><img src={warnIcon} class="img-fluid rounded-top"/></div>
        <div className="col text-start">
            <div className="row py-3">
                <div className="col">
                    <h2 className="heading-warning">Warning</h2>
                    <p>This might end upd updating your data</p>
                </div>
                <div className="col-1 mx-4">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </div>
        </div>
    </div>
}

const InfoMessage = ({title, description}) => 
{
   return <div className="row col-5" id="InfoBox">
        <div className="col col-2 d-flex align-items-center"><img src={InfoIcon} class="img-fluid rounded-top"/></div>
        <div className="col text-start">
            <div className="row py-3">
                <div className="col">
                    <h2 className="heading-info">Info</h2>
                    <p>This data contains useful info </p>
                </div>
                <div className="col-1 mx-4">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </div>
        </div>
    </div>
}


const ConnectionMessage = ({title, description}) => 
{
   return <div className="row col-5" id="ConnectionBox">
        <div className="col col-2 d-flex align-items-center"><img src={ConnectionIcon} class="img-fluid rounded-top"/></div>
        <div className="col text-start">
            <div className="row py-3">
                <div className="col">
                    <h2 className="heading-connection">Loss Connection</h2>
                    <p>Please check your internet connection </p>
                </div>
                <div className="col-1 mx-4">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </div>
        </div>
    </div>
}


export {SuccessMessage, ErrorMessage, WarningMessage, InfoMessage, ConnectionMessage }