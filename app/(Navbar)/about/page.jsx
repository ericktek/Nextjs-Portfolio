'use client';
import dynamic from 'next/dynamic';
import Footer from '../../components/Footer';

const Page = () => {
  const AnimatedNumbers = dynamic(
    () => import('react-animated-numbers'),
    { ssr: false }
  );

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-14 lg:py-16">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-orange-400 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className=" absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-orange-400 opacity-50 lg:w-32 lg:-ml-26 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Our</span>
            </span>{" "}
            Community on Social media
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            ericktek is a dynamic and innovative brand specializing in web, graphic design, UI/UX design, machine learning, and data analysis.
          </p>
        </div>
        <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
          <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-black rounded-sm transition-color sm:items-stretch sm:flex-row">
            <div className="px-12 py-8 text-center">
              <h6 className="flex flex-row justify-center text-orange-400 text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={95}
                  locale="en-US"
                  configs={(_) => ({
                    mass: 1,
                    friction: 100,
                    tension: 180,
                  })}
                />
                %
              </h6>
              <p className="text-center md:text-base">
                Quality of Software Product Delivery
              </p>
            </div>
            <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
            <div className="px-12 py-8 text-center">
              <h6 className="flex flex-row justify-center text-orange-400 text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={49805}
                  locale="en-US"
                  configs={[
                    { mass: 1, tension: 280, friction: 140 },
                    { mass: 1, tension: 200, friction: 120 },
                  ]}
                />
                +
              </h6>
              <p className="text-center md:text-base">
                Followers on Facebook Subscribers
              </p>
            </div>
            <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
            <div className="px-12 py-8 text-center">
              <h6 className="flex flex-row justify-center text-orange-400 text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={810}
                  locale="en-US"
                  configs={[
                    { mass: 1, tension: 280, friction: 140 },
                    { mass: 1, tension: 200, friction: 120 },
                  ]}
                />
                +
              </h6>
              <p className="text-center md:text-base">
                Followers on Instagram Subscribers
              </p>
            </div>
          </div>
        </div>
        <p className="mx-auto mb-4 text-gray-400 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
          Connect with ericktek on social media to stay updated on the latest projects and insights.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Page;
