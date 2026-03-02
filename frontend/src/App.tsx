import { useState,useEffect } from 'react'
import {BooksList} from './components/BooksList'
import {SearchBar} from './components/Searchbar'
import './App.css'

type book = {
    title:string,
    star:number,
    price:number,
    img:string
    // 他のプロパティもあれば追加
}

function App() {
    const [search,setSearch] = useState('')

    const [books,setBooks] = useState<book[]>([])

    useEffect(()=>{
    fetch('http://localhost:8000/books')
    .then((res)=>res.json())
    .then((data)=>setBooks(data))
},[])

    const filteredBooks = search 
        ? books.filter((book)=>book.title.toLowerCase().includes(search.toLowerCase()))
        : books

    return (
        <div className="app">
            <SearchBar search={search} setSearch={setSearch}/>
            <BooksList books={filteredBooks}/>


        </div>
        )}


export default App
