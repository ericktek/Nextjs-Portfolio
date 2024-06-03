'use client'
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
import SplitLongParagraphs from "../../components/SplitLongParagraphs";
import { notFound } from "next/navigation";
import { useSession } from "next-auth/react";

async function fetchPostData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Post not found');
  }

  return res.json();
}

const SinglePage = ({ params }) => {
  const { data: session, status } = useSession();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPostData(params.id);
        setPostData(data);
      } catch (error) {
        setError(true);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [params.id]);

  if (loading) {
    return <p className="container max-w-5xl px-8 py-10 mx-auto">Loading...</p>;
  }

  if (error || !postData) {
    return <p>Post not found</p>;
  }

  const date = new Date(postData.createdAt);
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
                {postData.title}
              </h2>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {postData.shortTitle}
              </p>

              <div className="flex items-center mt-6">
                <Image
                  width={500}
                  height={500}
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="/avatar.png"
                  alt=""
                />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {postData.username}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                    {postData.email}
                    </p>
                  </div>
              </div>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="object-cover w-full rounded-xl h-72 md:h-64 lg:h-72"
                src={postData.image}
                alt={postData.title}
              />
            </div>
          </div>
          <div className="container py-10">
            <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">
              In details
            </h1>
            <SplitLongParagraphs>
              <p>{postData.desc}</p>
            </SplitLongParagraphs>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex">
              <Image
                width={500}
                height={500}
                className="object-cover object-center w-10 h-10 rounded-full"
                src="/avatar.png"
                alt="avatar"
              />
              {session && (
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  {postData.username}
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                  {postData.email}
                  </p>
                </div>
              )}
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
