import "./UserPanel.css";
import photo from "../assets/avatar.png";
import {AiOutlineCloseCircle} from "react-icons/ai"
export default function UserPanel(props) {
  return (
    <div className="container bg-light" id="user_panel">
    <AiOutlineCloseCircle onClick={props.close}/>
      <div className="row">
        <div className="col-4">
          <img src={photo} alt="profile" width={"100px"} />
        </div>
        <div className="col-8">
          <div>
            <p>First Name</p>
            <p>Sandeep</p>
          </div>
          <div>
            <p>UserName Name</p>
            <p>Sandeep</p>
          </div>
        </div>
      </div>
    </div>
  );
}
