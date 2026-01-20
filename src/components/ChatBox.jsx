"use client";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL, {
  autoConnect: true,
  transports: ["websocket"],
}); // backend URL

export default function ChatBox({ openModal, handleModal }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [roomId, setRoomId] = useState(null);
  const [userName, setUserName] = useState("");
  const [typing, setTyping] = useState(false);
  const [online, setOnline] = useState(false);

  const messagesRef = useRef(null);

  // Assign username (localStorage)
  useEffect(() => {
    let visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      visitorId =
        "maria_user_" + Math.floor(Math.random() * 10 ** 8).toString(36);
      localStorage.setItem("visitorId", visitorId);
    }

    setUserName(visitorId);
    console.log(visitorId);
    socket.on("admin:joined", ({ adminName }) => {
      setOnline(true);
      console.log("You are chating with ", adminName);
    });
    socket.emit("visitor:join", { visitorId });
    socket.on("room:joined", (id) => {
      setRoomId(id);
      loadHistory(id);
    });
    socket.on("message:new", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("typing:start", ({ sender }) => {
      if (sender === "admin") setTyping(true);
    });

    socket.on("typing:stop", () => setTyping(false));

    return () => {
      socket.off("room:joined");
      socket.off("message:new");
      socket.off("typing:start");
      socket.off("typing:stop");
    };
  }, []);

  // Connect to backend & load messages

  const sendMessage = (e) => {
    e.preventDefault();
    if (!roomId || !text.trim()) return;

    socket.emit("visitor:message", { roomId, message: text });
    socket.emit("typing:stop", {
      roomId,
      sender: "visitor",
    });
    setText("");
  };

  /* LOAD PREVIOUS MESSAGES */
  async function loadHistory(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chat/${id}/messages`,
    );
    const data = await res.json();
    setMessages(data);
  }

  return (
    <div
      className={`z-200 transform ${
        openModal ? " scale-100" : " scale-0 translate-x-1/2 translate-y-1/2"
      } tranasform transition fixed inset-0 flex flex-col justify-end p-2`}
    >
      <div
        className={` mx-auto w-full 2xl:w-1/4 xl:w-1/3 lg:w-1/2 lg:mr-0 h-screen md:h-1/2 max-h-screen shadow-sm z-300 flex flex-col justify-between  bg-white shadow-xl rounded-sm border-t border-neutral-200`}
      >
        <div className="flex justify-between items-start bg-white text-neutral-700 w-full shadow-md p-4">
          <div className="block">
            <p className="text-lg">Maria Concepts</p>
            {online && (
              <div className="text-sm opacity-80 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Online</span>
              </div>
            )}
          </div>
          <button
            title="close chatbox"
            className="hover:bg-neutral-200 rounded-full text-4xl text-center transition"
            onClick={handleModal}
          >
            <svg
              className="m-2 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="M6.5 8.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V9.584l-3.732 3.733a.45.45 0 1 1-.636-.636L5.413 8.95H2.5a.449.449 0 1 1 0-.9zm6.182-6.368a.45.45 0 0 1 .637.636L9.586 6.05H12.5a.45.45 0 0 1 0 .9h-4l-.09-.01a.45.45 0 0 1-.36-.44v-4a.45.45 0 0 1 .9 0v2.914z"
              />
            </svg>
          </button>
        </div>

        <div
          ref={messagesRef}
          className="flex flex-col justify-end w-full h-full overflow-y-auto pb-4  gap-y-6 p-4"
        >
          {messages.length === 0 ? (
            <div className=" text-md text-left p-4 self-start">
              <p className="shadow-lg xl:py-3 py-2 px-4 text-left w-full block bg-amber-100 text-neutral-900 rounded-e-full rounded-es-full">
                How can we assist you?
              </p>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-3/4 ${
                    msg.sender === "visitor"
                      ? " text-right ml-auto"
                      : "text-left mr-auto"
                  }`}
                >
                  {/* <span className="text-xs font-normal text-neutral-400 mx-2">
                    {new Date(msg.createdAt).toLocaleTimeString("en-IN", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </span> */}
                  <div
                    className={`shadow-lg xl:py-3 py-2 px-4 text-left ${
                      msg.sender === "visitor"
                        ? "rounded-s-full rounded-se-full bg-amber-200 text-neutral-600"
                        : "rounded-e-full rounded-es-full bg-amber-100 text-neutral-900"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}

              <div
                className={`${typing ? "opacity-100" : "opacity-0"} transition text-left mr-auto text-neutral-400 text-xs text-gray-400 text-left`}
              >
                Typing…
              </div>
            </>
          )}
        </div>

        <form
          onSubmit={sendMessage}
          className="block w-full flex justify-between p-4 bg-white"
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            autoComplete={"false"}
            className="flex-1 bg-neutral-200 rounded-full p-3 px-6 text-neutral-900 foxus:ring-1"
          />
          <button
            title="send message"
            className="bg-none text-neutral-600 hover:text-neutral:500 transition px-4 rounded-s-full rounded-se-full cursor-pointer"
          >
            <svg
              width="2.286em"
              height="2em"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 8"
            >
              <path fill="currentColor" d="m0 0l8 3.5L0 7l1-3q5-.5 0-1" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
