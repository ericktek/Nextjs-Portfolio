'use client';

import React from 'react';
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Footer from "app/components/Footer"

const Talk = () => {

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Thanks for contacting us, we will get back to you soon!');
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }
  return (
    <>

      <div className="min-h-screen isolate px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-100">
          For inquiries or collaborations, feel free to reach out!          </p>
          <div className="flex items-center justify-center space-x-2 mt-12">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <a className="text-xs text-center text-gray-500 dark:text-gray-400 ">
              Call: +255 769 500 360 Or
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 max-w-xl sm:mt-10"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="fname"
                  id="first-name"
                  required
                  autoComplete="given-name"

                  className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-orange-400 outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lname"
                  id="last-name"
                  autoComplete="family-name"
                  required

                  className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  required

                  className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required

                  className=" bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className=" none h-full rounded-md border-0 outline-none bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm"
                  >
                    <option>TZ +255</option>
                    <option>KE +254</option>
                    <option>UG +250</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-2  top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="number"
                  name="phone"
                  id="phone-number"
                  required

                  autoComplete="tel"
                  className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 pl-28 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-500  focus:ring-2 outline-none focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600  focus:ring-2 outline-none focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  required

                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit"
              className="block w-full rounded-md bg-orange-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-300 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      <div
        className="absolute inset-x-0 top-40 mt-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <Footer />

    </>
  );
};

export default Talk;


