"use client";
import Link from "next/link";
import { Chat, WhatsAppIcon } from "./Icons";
import { useState } from "react";
import dynamic from "next/dynamic";

const ChatBox = dynamic(() => import("./ChatBox"), { ssr: false });

export default function PopupButtons() {
  const [openModal, setOpenModal] = useState(false);
  const [newMessage, setNewMessage] = useState(null);

  const handleModal = () => {
    document.body.classList.toggle("modal-open");
    setOpenModal(!openModal);
  };

  return (
    <div>
      <ChatBox
        handleModal={handleModal}
        openModal={openModal}
        setNewMessage={setNewMessage}
      />

      <div className="fixed bottom-0 right-0 p-4 xl:m-8 z-100 flex flex-col gap-8">
        <Link
          href="https://wa.me/+917026252255?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          className="block w-full h-auto cursor-pointer"
          title="chat on whatsapp"
        >
          <WhatsAppIcon className="drop-shadow-xl w-12" />
        </Link>

        <button
          className="block  cursor-pointer w-12 h-12 bg-primary-600 active:bg-primary-300 transition rounded-full mb-12 drop-shadow-md"
          onClick={handleModal}
          title="chat online"
        >
          <Chat className="w-12 h-12 p-2 text-black" />

          {newMessage && (
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500  border-2 border-buffer border-white-200 rounded-full -top-1 -end-1"></div>
          )}
        </button>
      </div>
    </div>
  );
}
