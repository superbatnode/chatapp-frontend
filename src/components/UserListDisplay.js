import "./UserListDisplay.css"
import avatar from "../assets/avatar.png"
export default function UserListDisplay(props) {
      return (
    <button type="button" id="user-list" class="list-group-item list-group-item-action clearfix">
    <img src={avatar} width="30px" className="img-fluid mx-2" alt="avatar"/>
    { props.children}
    </button>
  );
}
