import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, bookPDFURL } =
    useLoaderData();

  return (
    <div className="mt-8 py-24 px-4 lg:px-16 xl:px-24">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={imageURL}
            alt={bookTitle}
            className="w-full h-auto max-w-sm rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            {bookTitle}
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            {bookDescription}
          </p>
          {bookPDFURL && (
            <a
              href={bookPDFURL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-28 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-black transition-all duration-300"
            >
              Read PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
