"use client"
export default function Search({search, setSearch, handleSearch}) {
    return (
      <div className="search-engine text-black w-full flex justify-around items-center mb-8 mt-2.5">
        <input
          type="text"
          placeholder="Enter City Name"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="border-none rounded-md bg-black text-white text-lg outline-none cursor-pointer p-3.5" onClick={handleSearch}>Search Weather</button>
      </div>
    );
  }