import React from "react";
import Image from "next/image";
import { Input } from "antd";

import contactImg from "/public/assets/images/contactImg.jpg";
import ContactItems from "@/common/ContactItems";
import { send } from "@/lib/sendMailAction";
import { Bio } from "@/data/constants";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-28 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 capitalize">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="Contact"
                />
              </div>
              <div>
                <h2 className="py-2">{Bio.name}</h2>
                <p>{Bio.title}</p>
                <p className="text-gray-600 py-2">
                  {Bio.location} · Open to full-time and freelance opportunities.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect</p>
                <ContactItems />
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form method="post">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phoneNum"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      autoComplete="off"
                      defaultValue={Bio.phone}
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    autoComplete="off"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 mt-4"
                  formAction={send}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
