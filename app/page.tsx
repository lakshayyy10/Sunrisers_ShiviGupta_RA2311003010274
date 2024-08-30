
import Layout from './layout';
import { signIn } from 'next-auth/react';
export default function HomePage() {
  return (
    <Layout>
{/* Navigation Bar */}
<nav className="bg-gray-900 text-white py-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="text-2xl font-bold">
      <a href="/">YourLogo</a>
    </div>

    {/* Navigation Links */}
    <div className="flex space-x-6">
      <a href="/" className="hover:text-gray-400">Home</a>
      <a href="/categories" className="hover:text-gray-400">Categories</a>
      <a href="/contact-us" className="hover:text-gray-400">Contact Us</a>
      <a href="/about-us" className="hover:text-gray-400">About Us</a>
    </div>

    {/* Search Bar */}
    <div className="relative flex items-center space-x-6">
      <input
        type="text"
        className="px-4 py-2 rounded-full text-black"
        placeholder="Search..."
      />
      <button className="absolute right-2 top-2 text-gray-500">
        
      </button>

      {/* Sign In Button */}
      <button

        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full text-sm font-semibold ml-4"
      >
        Sign In with Google
      </button>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold leading-tight">
              Streamlined Learning Management
            </h1>
            <p className="mt-6 text-lg">
              Centralize, Track, And Enhance Your Education Using Artificial Intelligence
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md shadow-md">
                Start Learning
              </a>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="lg:w-1/2">
            <img
              src="/path-to-your-image.png"
              alt="Learning Management Illustration"
              className="max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-purple-800 py-6">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="https://gemini-ai-chatbot-kohl-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
            <img src="/instagram.png" alt="Instagram" className="h-8 inline-block mr-2" />
            Instagram
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
            <img src="/github.png" alt="GitHub" className="h-8 inline-block mr-2" />
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
            <img src="/linkedin.png" alt="LinkedIn" className="h-8 inline-block mr-2" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* JEE & NEET Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20">
          
          {/* JEE Section */}
          <div className="text-center">
            <img
              src="/path-to-jee-image.png"
              alt="JEE"
              className="mx-auto w-48 h-48 rounded-lg"
            />
            <a href="/jee" className="block mt-6 bg-blue-400 hover:bg-blue-500 text-black py-2 px-8 rounded-full text-2xl font-bold">
              JEE
            </a>
          </div>

          {/* NEET Section */}
          <div className="text-center">
            <img
              src="/path-to-neet-image.png"
              alt="NEET"
              className="mx-auto w-48 h-48 rounded-lg"
            />
            <a href="/neet" className="block mt-6 bg-pink-400 hover:bg-pink-500 text-black py-2 px-8 rounded-full text-2xl font-bold">
              NEET
            </a>
          </div>

        </div>
      </section>

   {/* Continue Watching Section */}
   <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white h-screen flex items-center">
        <div className="container mx-auto">
          <h2 className="text-white text-4xl font-semibold mb-10 text-center">Continue Watching</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/mnt/data/image.png" alt="Thumbnail 1" className="rounded-lg w-full h-72 object-cover"/>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/mnt/data/image.png" alt="Thumbnail 2" className="rounded-lg w-full h-72 object-cover"/>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/mnt/data/image.png" alt="Thumbnail 3" className="rounded-lg w-full h-72 object-cover"/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
