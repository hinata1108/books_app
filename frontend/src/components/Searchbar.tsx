type Props = {
    search:string
    setSearch:(search:string)=> void
}


export const SearchBar = ({search, setSearch}:Props) => {
    return (
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}placeholder="書籍を検索..."
        className="w-full max-w-2xl mx-auto mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
}