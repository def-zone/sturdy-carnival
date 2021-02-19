export const Search = () => {
    return (
        <div className="flex rounded-md" style={{backgroundColor: '#2d3653'}}>
            <div className="py-2 pl-3 text-gray-400 rounded"><i className="fas fa-search"></i></div>
            <input type="text" placeholder="Search documentation..." className="text-gray-400 outline-none py-2 px-3 w-full rounded-r-md" style={{backgroundColor: '#2d3653'}}/>
        </div>
    )
}