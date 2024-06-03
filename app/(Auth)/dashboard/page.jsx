'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react'; 
import useSWR from 'swr';
import Footer from 'app/components/Footer';


const Dashboard = () => {
  const session = useSession();
  const router = useRouter(); 

  const [title, setTitle] = useState('');
  const [shortTitle, setShortTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [image, setImage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const validateURL = (url) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-zA-Z0-9\\$\\-\\_\\+\\.\\!\\*\\(\\)\\,]+\\.)+[a-zA-Z]{2,})|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?' + // port and path
      '(\\?[;&a-zA-Z0-9@:%_\\+.~#?&//=]*)?' + // query string
      '(\\#[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?$', 'i' // fragment locator
    );
    return !!pattern.test(url);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setImage(value);

    if (!validateURL(value)) {
      setErrorMessage('Please enter a valid URL.');
    } else {
      setErrorMessage('');
    }
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    session.status === 'authenticated' ? `/api/posts` : null,
    fetcher
);
const filteredPosts = data ? data.filter(post => post.username === session.data.user.name) : [];

  
  if(session.status === "loading") {
    return (   
      <div className="flex justify-center items-center min-h-screen" role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if(session.status === "unauthenticated") {
    router?.push("/login");
    return null;
  }

  if(session.status === "authenticated") {

    const handleSubmit = async (e) => {
      e.preventDefault();
       // Use state variables for form values
       const titleValue = title;
       const shortTitleValue = shortTitle;
       const imageValue = image;
       const descValue = desc;

      if (!validateURL(image)) {
        setErrorMessage('Please enter a valid URL.');
        return;
      }    

      try {
        await fetch(`api/posts`, {
          method: "POST",
          body: JSON.stringify({
            title: titleValue,
            shortTitle: shortTitleValue,
            image: imageValue,
            desc: descValue,
            username: session?.data?.user?.name,
            email:session?.data?.user?.email
          }),
        });
        setSuccessMessage("Post added successfully!");

        // Clear input values after successful submission
        setTitle('');
        setShortTitle('');
        setImage('');
        setDesc('');
        mutate()

      } catch (error) {
        console.log(error);
      }
    }
    const handleDelete = async (id) => {
      try {
        await fetch(`/api/posts/${id}`, {
          method: "DELETE"
        })
        mutate()
      } catch (error) {
        console.log(error)
      }
    }


    return(
     <>
      <section className="mx-auto max-w-5xl px-5 container flex-nowrap items-center justify-center min-h-screen text-gray-600 body-font relative">

        <div className="container px-5 py-12 lg:py-24 mx-auto flex sm:flex-nowrap flex-wrap-reverse">

          <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10  flex items-start justify-start relative">

          <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
            { isLoading ? 
            (<center> <div className="flex justify-center items-center" role="status">
        <svg aria-hidden="true" className="flex justify-center center items-center w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only flex justify-center items-center" >Loading...</span>
      </div> </center>) : filteredPosts?.map((post) => (
              <div key={post._id} className="lg:flex">
                <a
                  className="min-w-max hover:opacity-90 ease-in-out"
                >
                  <Image
                    height={500}
                    width={500}
                    className="object-cover h-52 lg:h-32 xl:h-32 md:h-32 rounded-lg lg:w-36"
                    src={post.image}
                    alt={post.title}
                  />
                </a>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <div className='flex flex-row gap-4 justify-between'>
                  <span className="text-xs text-gray-500 ">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span onClick={() => handleDelete(post._id)} className='text-xs text-red-500 hover:text-red-400 cursor-pointer '>Delete</span>

                  </div>
                  <a
                    className="text-base font-normal text-gray-800  dark:text-white "
                  >
                    {post.title}
                  </a>

                 
                </div>
              </div>
            ))}
        </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:m-0 pb-12 ">
            <h2 className="text-gray-100 text-3xl mb-2 font-medium title-font">Add New Article</h2>
            <form onSubmit={handleSubmit}>
            {successMessage && <p className="text-green-500">{successMessage}</p>} 

              <div className="relative mb-4">
                <label htmlFor="title" className="leading-7 text-sm text-gray-100">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" className="w-full bg-transparent rounded border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="shortTitle" className="leading-7 text-sm text-gray-100">Short Description</label>
                <input type="text" value={shortTitle} onChange={(e) => setShortTitle(e.target.value)} name="shortTitle" className="w-full bg-transparent rounded border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="image" className="leading-7 text-sm text-gray-100">Image Link</label>
                <input value={image} onChange={handleChange} name="image" className="w-full bg-transparent rounded border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}

              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-100">In Detail Description</label>
                <textarea id="message" value={desc} onChange={(e) => setDesc(e.target.value)} name="disc" className="w-full bg-transparent rounded border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required/>
              </div>
              <button type="submit" className="text-white w-full bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded text-lg">Post</button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
    );
  }
};

export default Dashboard;
