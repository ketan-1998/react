import React from "react";
import { useState } from "react";
const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    street: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    notification: "",
  });
  function formHandler(e) {
    e.preventDefault();
    console.log(formData);
  }
  function changeHandler(e) {
    const { type, name, value, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div className="bg-slate-700 min-h-screen select-none text-slate-100">
      <div className="w-10/12 mx-auto p-10 shadow-md">
        <form className="w-10/12 mx-auto space-y-4" onSubmit={formHandler}>
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="font-mono capitalize">
              first Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="firstName"
              className="p-1 outline-none bg-slate-100 text-slate-900 rounded-lg"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="font-mono capitalize">
              last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="lastName"
              className="p-1 outline-none bg-slate-100 border text-slate-900 rounded-lg"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-mono capitalize">
              email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className="p-1 outline-none bg-slate-100 text-slate-900 rounded-lg"
              onChange={changeHandler}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-mono capitalize" htmlFor="country">
              country
            </label>
            <select
              id="country"
              name="country"
              className="p-1 border-none outline-none rounded-lg bg-slate-100 text-slate-900"
              value={formData.country}
              onChange={changeHandler}
            >
              <option value="india1">india1</option>
              <option value="india2">india2</option>
              <option value="india3">india3</option>
              <option value="india4">india4</option>
              <option value="india5">india5</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="street" className="font-mono capitalize">
              street address
            </label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="street address"
              className="p-1 outline-none bg-slate-100 text-slate-900  rounded-lg"
              onChange={changeHandler}
              value={formData.street}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="font-mono capitalize">
              city
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="city"
              className="p-1 outline-none bg-slate-100 text-slate-900  rounded-lg"
              onChange={changeHandler}
              value={formData.city}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="state" className="font-mono capitalize">
              state
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="state"
              className="p-1 outline-none bg-slate-100 text-slate-900  rounded-lg"
              onChange={changeHandler}
              value={formData.state}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="zip" className="font-mono capitalize">
              zip
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="zip"
              className="p-1 outline-none bg-slate-100 text-slate-900  rounded-lg"
              onChange={changeHandler}
              value={formData.zip}
            />
          </div>
          <div className="space-y-3">
            <p className="font-mono capitalize text-xl">email</p>
            <div className="space-y-1">
              <div className="flex gap-1 items-baseline">
                <input
                  type="checkbox"
                  name="comments"
                  checked={formData.comments}
                  id="comments"
                  onChange={changeHandler}
                />
                <div>
                  <label className="capitalize font-mono" htmlFor="comments">
                    comments
                  </label>
                  <p className="capitalize font-mono opacity-70">
                    get notified when someones posts a comments on a posting
                  </p>
                </div>
              </div>
              <div className="flex gap-1 items-baseline">
                <input
                  type="checkbox"
                  name="candidates"
                  onChange={changeHandler}
                  checked={formData.candidates}
                  id="candidates"
                />
                <div>
                  <label className="capitalize font-mono" htmlFor="candidates">
                    candidates
                  </label>
                  <p className="capitalize font-mono opacity-70">
                    get notified when a candidate applies for a job{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 items-baseline">
                <input
                  type="checkbox"
                  name="offers"
                  checked={formData.offers}
                  id="offers"
                  onChange={changeHandler}
                />
                <div>
                  <label className="capitalize font-mono" htmlFor="offers">
                    offers
                  </label>
                  <p className="capitalize font-mono opacity-70">
                    get notified when someones posts a comments on a posting
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-mono capitalize text-xl">push notification</p>
            <p className="font-mono capitalize">
              these are delivered via sms to your mobile phone
            </p>
            <div>
              <div className="flex gap-1 items-center ">
                <input
                  type="radio"
                  id="everything"
                  name="notification"
                  value="everything"
                  onChange={changeHandler}
                  checked={formData.notification === "everything"}
                />
                <label htmlFor="everything">everything</label>
              </div>
              <div className="flex gap-1 items-center ">
                <input
                  type="radio"
                  name="notification"
                  id="sae"
                  value="same as email"
                  onChange={changeHandler}
                  checked={formData.notification === "same as email"}
                />
                <label htmlFor="sae">same as email</label>
              </div>
              <div className="flex gap-1 items-center ">
                <input
                  type="radio"
                  name="notification"
                  id="npn"
                  value="no push notification"
                  onChange={changeHandler}
                  checked={formData.notification === "no push notification"}
                />
                <label htmlFor="npn">no push notification</label>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-slate-500 px-4 py-1 rounded-sm font-mono capitalize text-slate-800 font-semibold">
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
