import React from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
import SplitLongParagraphs from "../../components/SplitLongParagraphs";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
const SinglePage = async ({ params }) => {
  const data = await getData(params.id);

  const date = new Date(data.createdAt)

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);


  return (
    <>
      <div className="min-h-screen">
        <div className="container max-w-5xl px-8 py-10 mx-auto">
          <div className="mt-8 flex lg:flex-row xl:flex-row lg:flex gap-14 lg:justify-between lg:items-center sm:flex flex-col-reverse">
            <div className="mt-6 lg:w-1/2 lg:mt-0 ">
              <span className="text-xs text-gray-500 ">
                {formattedDate}
              </span>

              <h2 className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                {data.title}{" "}
              </h2>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {data.shortTitle}
              </p>

              <div className="flex items-center mt-6">
                <Image
                  width={500}
                  height={500}
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    ericktek
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                width={500}
                height={500}
                className="object-cover w-full rounded-xl h-72 md:h-64 lg:h-72"
                src={data.image}
                alt=""
              />
            </div>
          </div>
          <div className="container py-10">
            <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">
              In details
            </h1>
            <SplitLongParagraphs>
              <p>{data.desc}</p>
            </SplitLongParagraphs>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex">
              <Image
                width={500}
                height={500}
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Author
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Erick Lema
                </p>
              </div>{" "}
            </div>

            <div className="flex">
              <span className="text-xs text-gray-500 ">
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
