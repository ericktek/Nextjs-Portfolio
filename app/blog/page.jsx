import Image from "next/image";
import React from "react";
import Footer from "@/app/components/Footer";
import Pagination from "@/app/components/pagination";
import { notFound } from "next/navigation";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const Page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <section>
        <div className="container py-12 px-6 lg:py-20 sm:py-12 mx-auto max-w-5xl">
          <h2 className="text-center text-4xl xl:text-5xl lg:text-5xl font-bold max-w-4xl mb-6  text-orange-400 sm:text-4xl md:mx-auto">
            Hey, ericktek here!{" "}
            <span className="font-light pl-2 pr-1">
              Discover my stories and creative ideas
            </span>
            .
          </h2>

          <div className="bg-[url('/blog-img.jpg')] bg-cover rounded-lg ">
            <Image
              width={500}
              height={500}
              className="bg-black bg-opacity-75 object-fill w-full h-32 xl:h-56 lg:h-56 md:h-48 sm:h-40 rounded-lg px-6 my-24"
              src="/logo.svg"
              alt=""
            />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Recent Works
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {data.map((item) => (
              <div key={item._id} className="lg:flex">
                <a
                  className="min-w-max hover:opacity-90 ease-in-out"
                  href={`/blog/${item._id}`}
                >
                  <Image
                    width={500}
                    height={500}
                    className="object-cover w-full h-56 rounded-lg lg:w-64"
                    src={item.image}
                    alt={item.title}
                  />
                </a>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <span className="text-xs text-gray-500 ">
                    {item.createdAt?.toString()}
                  </span>
                  <a
                    href={`/blog/${item._id}`}
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    {item.title}
                  </a>

                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      // src={user.image ||  "/avatar.jpg"}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a className="text-gray-500 dark:text-gray-400 ">
                          <span className="absolute inset-0" />
                          ericktek
                        </a>
                      </p>
                      <p className="text-xs inline-block flex-none text-gray-500  overflow-ellipsis">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination />
      <Footer />
    </div>
  );
};

export default Page;
