import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookCard from "../components/BookCard";

const BestSellerBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data.data.slice(0, 8)));
  }, []);
  return (
    <div>
      <BookCard books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellerBook;
