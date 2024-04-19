import React from 'react';

function HomePage() {
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 lg:w-1/3 sm:w-2/3 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome 👋 abc, You are Successfully Logged In!
        </h1>
        <button className="px-6 py-3 mt-6 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition duration-200 ease-in-out">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default HomePage;
