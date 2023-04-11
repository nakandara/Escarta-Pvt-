
const connect = require("./../database/db")
const { ObjectId } = require('mongodb');
const Book = require("../models/Book")


exports.index = async (req, res) => {
    // const db = await connect();
    // const books = await db.collection("book").find().toArray();
    const books = await Book.find()
    res.send(books);
}


exports.store = async (req, res) => {
    // const db = await connect();

    // const data = {
    //     title: "power of  consistancy"
    // }
    // await db.collection('book').insertOne(req.body)

    try {
        await Book.create(req.body)
        res.status(201).json({ data: "books is stored" });
    } catch (error) {
        res.json(error.errors)
    }

}


exports.show = async (req, res) => {

    const _id = new ObjectId(req.params.id);
    // const db = await connect()
    // const book = await db.collection("book").find({ _id }).toArray()
    const book = await Book.find({ _id })
    res.json(book);
}



exports.update = async (req, res) => {
    const _id = new ObjectId(req.params.id);
    // const db = await connect();
    //await db.collection('book').updateOne({ _id }, { $set: req.body })
    await Book.updateOne({ _id }, { $set: req.body })

    res.send({ data: "Book is updated" });
}


exports.delete = async (req, res) => {
    const _id = new ObjectId(req.params.id);

    // const db = await connect();
    // await db.collection('book').deleteOne({ _id })
    await Book.deleteOne({ _id })


    // res.status(204).json();
    res.send({ data: "Book is deleted" });

}