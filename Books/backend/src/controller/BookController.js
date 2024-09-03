const {
  CreateBookServices,
  ReadBookServices,
  ReadBooksByCategoryServices,
  UpdateBookServices,
  ReadBookByIdServices,
  DeleteBookServices,
} = require("../services/BookService");

exports.CreateBook = async (req, res) => {
  let result = await CreateBookServices(req);
  res.status(201).json(result);
};

exports.ReadAllBook = async (req, res) => {
  let result = await ReadBookServices(req);
  res.status(200).json(result);
};

exports.ReadBookByCategory = async (req, res) => {
  let result = await ReadBooksByCategoryServices(req);
  res.status(200).json(result);
};

exports.ReadBookById = async (req, res) => {
  let result = await ReadBookByIdServices(req);
  res.status(200).json(result);
};

exports.UpdateBook = async (req, res) => {
  let result = await UpdateBookServices(req);
  res.status(200).json(result);
};
exports.DeleteBook = async (req, res) => {
  let result = await DeleteBookServices(req);
  res.status(200).json(result);
};
