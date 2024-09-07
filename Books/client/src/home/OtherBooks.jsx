import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data.data.slice(8, 18)));
  }, []);
  return (
    <div>
      <BookCard books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
