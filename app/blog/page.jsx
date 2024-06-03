'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from 'app/components/Footer';
import { useSession } from "next-auth/react";

const fetchPosts = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();
  if (!data || data.length === 0) {
    throw new Error('No posts found');
  }

  return data;
};

const NotFound = () => (
  <div className="container py-12 px-6 lg:py-20 sm:py-12 mx-auto max-w-5xl text-center">
    <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
    <p className="text-xl mb-6">The page you are looking for does not exist.</p>
    <p className="text-md mb-2">Check your internet connection.</p>
    <a href="/" className="text-blue-500 underline">Go back to homepage</a>
  </div>
);

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <p className="container py-12 px-6 lg:py-20 sm:py-12 mx-auto max-w-5xl">Loading...</p>;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <div>
      <section>
        <div className="container py-12 px-6 lg:py-20 sm:py-12 mx-auto max-w-5xl">
          <h2 className="font-poppins text-center text-4xl xl:text-5xl lg:text-5xl font-extrabold max-w-4xl mb-6 text-orange-400 sm:text-4xl md:mx-auto">
            Hey, ericktek here!
            <span className="font-light pl-2 pr-1">
              Discover stories and creative ideas
            </span>
            .
          </h2>
          <div className="bg-[url('/blog-img.jpg')] bg-cover rounded-lg">
            <Image
              width={500}
              height={500}
              className="bg-black bg-opacity-75 object-fill w-full h-32 xl:h-56 lg:h-56 md:h-48 sm:h-40 rounded-lg px-6 my-24"
              src="/logo.svg"
              alt="Blog-image"
            />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Recent Works
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {posts && posts.length > 0 ? (
              posts.map((item) => (
                <div key={item._id} className="lg:flex">
                  <a className="min-w-max hover:opacity-90 ease-in-out" href={`/blog/${item._id}`}>
                    <Image
                      width={500}
                      height={500}
                      className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src={item.image}
                      alt={item.title}
                    />
                  </a>
                  <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <span className="text-xs text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <a
                      href={`/blog/${item._id}`}
                      className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
                    >
                      {item.title}
                    </a>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <Image
                        src="/avatar.png"
                        alt="avatar"
                        width={50}
                        height={50}
                        className="h-10 w-10 opacity-80 rounded-full object-cover bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a className="text-gray-500 dark:text-gray-400">
                            <span className="absolute inset-0" />
                            {item.username}
                          </a>
                        </p>
                        <p className="text-xs inline-block flex-none text-gray-500 overflow-ellipsis">
                          {item.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">No posts available</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
