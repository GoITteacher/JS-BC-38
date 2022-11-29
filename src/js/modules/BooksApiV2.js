import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { author: 'Pikimell' },
});

export class BooksAPI {
  static getBooks() {
    return axios2.get(`/books`);
  }

  static createBook(book) {
    return axios2.post(`/books`, book);
  }

  static updateBook(book) {
    const { id } = book;
    return axios2.patch(`/books/${id}`, book);
  }

  static resetBook(book) {
    const { id } = book;
    return axios2.put(`/books/${id}`, book);
  }

  static deleteBook(id) {
    return axios2.delete(`/books/${id}`);
  }
}

BooksAPI.getBooks();
