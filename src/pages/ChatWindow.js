import Chats from "../components/Chats";
import "./ChatWindow.css";
export default function ChatWindow() {
  return (
    <section class="container-fluid shadow" id="section">
      <nav class="navbar">
        <div class="container text-white">
          <p id="username">Amaan</p>
        </div>
      </nav>
      <main class="position-relative overflow-auto" id="main">
        <section class="chats" id="all_chats">
          <Chats
            message="Hi there"
            timestamp="2.21"
            className="chat-incoming"
          />
          <Chats
            message="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem corrupti quia facilis deserunt ex maxime fuga commodi, reprehenderit nesciunt, voluptate praesentium voluptatum voluptates veritatis cum quaerat nostrum provident iusto!"
            timestamp="2.21"
            className="chat-outgoing"
          />
        </section>
      </main>
      <form id="form">
        <div class="input-group position-absolute bottom-0 end-0 m-0">
          <input
            id="chat"
            type="text"
            class="form-control"
            aria-describedby="send_button"
            autocomplete="off"
          />
          <button type="submit" id="send_button" class="btn btn-chat">
            send
          </button>
        </div>
      </form>
    </section>
  );
}
