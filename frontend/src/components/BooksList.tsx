type book= {
    title:string,
    star:number,
    price:number,
    image:string

}

type Props = {
    books:book[]
}


export const BooksList = ({books}:Props)=> {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book)=>
            <div key={book.title} className="rounded-2xl border bg-white p-4 shadow-md">
                <h2>{book.title}</h2>
                <p>Star:{book.star}</p>
                <p>Price:{book.price}</p>
                <img src={book.image} alt={book.title}/>
            </div>)}
        </div>
    )
}