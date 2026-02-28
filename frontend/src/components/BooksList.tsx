import React from 'react';

type Book = {
    title: string;
    star: number;
    price: number;
    image: string;
}

type Props = {
    books: Book[];
}

export const BooksList = ({ books }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
                <div key={`${book.title}-${index}`} className="rounded-2xl border bg-white p-4 shadow-md">
                    <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-lg mb-3" />
                    <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                    <p className="text-yellow-500">★ {book.star}</p>
                    <p className="text-gray-700 font-semibold">¥{book.price.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}