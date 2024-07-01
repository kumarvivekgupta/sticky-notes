import React from 'react';


export default function HomeApp() {
  return (
    <>
      <header className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to NotesApp</h1>
          <p className="text-xl mb-8">Your personal note-taking assistant</p>
          <div className="container mx-auto text-center mt-8">
            <a href="/notes" className="inline-block bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-full font-bold text-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out animate-pulse">Sign Up for Free</a>
          </div>
        </div>
      </header>


      <section id="features" className="py-20">

        <div className="relative w-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                  <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
                  <p className="text-gray-600">Create and manage your notes with a simple and intuitive interface.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                  <h3 className="text-xl font-bold mb-2">Organize Notes</h3>
                  <p className="text-gray-600">Pin and categorize your notes for easy access and organization.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                  <h3 className="text-xl font-bold mb-2">Mark then Check/Uncheck</h3>
                  <p className="text-gray-600">Your notes are stored securely with encryption and privacy features.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                  <h3 className="text-xl font-bold mb-2">Pin && Created Sorting</h3>
                  <p className="text-gray-600">Your notes are stored securely with encryption and privacy features.</p>
                </div>
              </div>
            </div>
          </div>

        </div>



      </section>

      

    </>
  );
}