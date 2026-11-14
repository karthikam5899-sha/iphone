import SearchBar from "../components/SearchBar";

const Search = () => (
  <main className="min-h-screen px-6 pb-20 pt-32">
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-3 text-center text-5xl font-bold">Search</h1>
      <p className="mb-10 text-center text-gray-500">Find the product you're looking for.</p>
      <SearchBar />
    </div>
  </main>
);

export default Search;