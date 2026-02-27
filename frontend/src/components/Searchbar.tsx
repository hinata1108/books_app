type Props = {
    search:string
    setSearch:(search:string)=> void
}


export const SearchBar = ({search, setSearch}:Props) => {
    return (
        < input type="text"  value={search} onChange={(e)=> setSearch(e.target.value)}/>

    )
}