import UserListDisplay from "../components/UserListDisplay";
import photo from "../assets/avatar.png";
import { IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import UserPanel from "./UserPanel";
export default function Users() {
  const [search, setSearch] = useState(false);
  const [setting, setSetting] = useState(false);

  return (
    <>
      <div
        class="offcanvas offcanvas-start show"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">
            <span className="mx-2">
              <img src={photo} alt="profile" width="40px" />
            </span>
            Sandeep
          </h5>
          <ul className="nav">
            <li className="nav-item p-1">
              <IoSettingsOutline
                size={"1.5em"}
                onClick={() => setSetting((prev) => !prev)}
              />
            </li>
            <li className="nav-item p-1">
              <IoSearchOutline
                size={"1.5em"}
                onClick={() => setSearch((prev) => !prev)}
              />
            </li>
          </ul>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          {search && (
            <form id="form">
              <div class="input-group">
                <input
                  id="chat"
                  type="text"
                  class="form-control"
                  aria-describedby="send_button"
                  autocomplete="off"
                />
                <button type="submit" id="send_button" class="btn btn-chat">
                  search
                </button>
              </div>
            </form>
          )}
          <div class="list-group">
            <UserListDisplay>Sandeep</UserListDisplay>
            <UserListDisplay>Sandeep</UserListDisplay>

            <UserListDisplay>Sandeep</UserListDisplay>
            <UserListDisplay>Sandeep</UserListDisplay>
          </div>
        </div>
      </div>
      {
        setting && <UserPanel close={()=>setSetting(false)}/>
      }
    </>
  );
}
