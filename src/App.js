import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatWindow from "./pages/ChatWindow";
import Register from "./pages/Register";
import Users from "./pages/Users";

export default function App() {
  const [socket, setsocket] = useState(null);
  const [user, setUser] = useState("");
  useEffect(() => {
    const sock = io("localhost:8000");
    setsocket(sock);
    console.log("imm r");
    return () => sock.close();
  }, []);
 const data = ()=> console.log('hi');
  useEffect(() => {
    socket && socket.emit("register", user );
  }, [user, socket]);

  const dataHanlder = (data) => {
    setUser(data);
  };
  return (
    <>
      <div className="d-flex">
        <Register data={dataHanlder} />
      </div>
    </>
  );
}
