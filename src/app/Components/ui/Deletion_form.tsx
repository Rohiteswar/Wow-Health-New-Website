"use client";
import React, { useState } from "react";

export default function DeleteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/jC-XxLAERrR", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phonenumber, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div className="mt-14 flex flex-col place-items-center">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="w-full px-4 py-12 md:py-24 lg:px-6 ">
          <div className="flex flex-col place-items-center">
            <div className="container prose max-w-3xl text-center">
              <div>
                <h2 className="text-3xl font-bold text-black">Account Deletion Request ✉</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Have questions? Send us a message and we will get back to you
                  shortly.
                </p>
              </div>
            </div>
            <div className="container max-w-sm space-y-8 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    className="text-slate-500 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="full-name"
                    placeholder="Enter your full name"
                    name="Fullname"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="text-slate-500 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="Enter your Email"
                    name="Email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="phonenumber"
                  >
                    Phone Number
                  </label>
                  <input
                    className="text-slate-500 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    value={phonenumber}
                    onChange={(e) => setphonenumber(e.target.value)}
                    id="phonenumber"
                    placeholder="Enter your phone number"
                    name="Phone Number"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Reason
                  </label>
                  <input
                    className="text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    placeholder="Enter your Reason"
                  />
                </div>
              </div>
              <div className="flex flex-col place-items-center">
                <button
                  type="submit"
                  className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
                >
                  Submit
                </button>
              </div>

              <br />
              
              <div className="space-y-4 text-black">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Contact information
                </h2>
                <div className="space-y-2">
                  <p className="font-medium">Email</p>
                  <p className="text-gray-500">mails.wowhealth@gmail.com</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-500">+91 9985232345</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Operating Address</p>
                  <p className="text-gray-500">
                    {" "}
                    Wow Health Centre, 23-15-112B,GS Raju Road Road, Near
                    Meesala Raja Rao Bridge, Vijayawada, Andhra Pradesh
                    PIN Code: 520011
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
