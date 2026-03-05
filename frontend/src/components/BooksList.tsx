import React from 'react';
import {SearchText} from './Searchtext'

type Book = {
    title: string;
    star: number;
    price: number;
    img: string;
}

type Props = {
    books: Book[],
    searchText: string
}

export const BooksList = ({ books, searchText='' }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
                <div key={index} className="rounded-2xl border bg-white p-4 shadow-md">
                    <img src={book.img} alt={book.title} className="w-full h-48 object-cover rounded-lg mb-3" />
                    <h2 className="text-lg font-bold mb-2"><SearchText text={book.title} highlight={searchText} /></h2>
                    <p className="text-yellow-500">★ {book.star}</p>
                    <p className="text-gray-700 font-semibold">¥{book.price.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}