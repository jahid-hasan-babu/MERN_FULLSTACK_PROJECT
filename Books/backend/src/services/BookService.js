const BookModel = require("../model/BookModel");

const CreateBookServices = async (req) => {
  try {
    let reqBody = req.body;
    let result = await BookModel.create(reqBody);
    return {
      status: "success",
      message: "Book create successfully",
      result,
    };
  } catch (error) {
    return { status: "fail", message: "Book created fail" };
  }
};

const ReadBookServices = async (req) => {
  try {
    let result = await BookModel.find();
    return {
      status: "success",
      data: result,
    };
  } catch (error) {
    return { status: "fail", message: "Books not found" };
  }
};

const ReadBooksByCategoryServices = async (req) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    let result = await BookModel.find(query);
    return {
      status: "success",
      data: result,
    };
  } catch (error) {
    return { status: "fail", message: "Books not found" };
  }
};

const ReadBookByIdServices = async (req) => {
  try {
    let id = req.params.id;
    let filter = { _id: id };

    let result = await BookModel.findOne(filter);
    return {
      status: "success",
      data: result,
    };
  } catch (error) {
    return { status: "fail", message: "Book not found" };
  }
};

const UpdateBookServices = async (req) => {
  try {
    let id = req.params.id;
    let updateBookData = req.body;
    let filter = { _id: id };
    let updatedDoc = { $set: { ...updateBookData } };
    let options = { upsert: true };

    let result = await BookModel.updateOne(filter, updatedDoc, options);
    return {
      status: "success",
      message: "Book updated successfully",
      result,
    };
  } catch (error) {
    return { status: "fail", message: "Book update failed" };
  }
};

const DeleteBookServices = async (req) => {
  try {
    let id = req.params.id;
    let filter = { _id: id };

    let result = await BookModel.deleteOne(filter);
    return {
      status: "success",
      message: "Book deleted successfully",
      result,
    };
  } catch (error) {
    return { status: "fail", message: "Book deletion failed" };
  }
};

module.exports = {
  CreateBookServices,
  ReadBookServices,
  UpdateBookServices,
  ReadBooksByCategoryServices,
  ReadBookByIdServices,
  DeleteBookServices,
};
