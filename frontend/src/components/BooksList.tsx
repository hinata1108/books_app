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
        <div>
            {books.map((book)=>
            <div key={book.title}>
                <h2>{book.title}</h2>
                <p>Star:{book.star}</p>
                <p>Price:{book.price}</p>
                <img src={book.image} alt={book.title}/>
            </div>)}
        </div>
    )
}