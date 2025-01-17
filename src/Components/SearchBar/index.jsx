import { useContext, useEffect, useCallback, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { filterItems } from "../../utils/searchByType";

const SearchBar = () => {
  const { searchByTitle, setSearchByTitle, items, setFilteredItems } = useContext(ShoppingCartContext);
  const [searchType, setSearchType] = useState("By_TITLE"); // Default search type

  // Memoize the filterItems function to avoid unnecessary re-renders
  const memoizedFilterItems = useCallback(() => {
    filterItems({ items, input: searchByTitle, searchType, setFilteredItems });
  }, [items, searchByTitle, searchType, setFilteredItems]);

  useEffect(() => {
    if (items?.length > 0) {
      memoizedFilterItems();
    }
  }, [items, searchByTitle, searchType, memoizedFilterItems]);

  const handleSearch = (event) => {
    setSearchByTitle(event.target.value); // Update the search term
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    memoizedFilterItems(); // Trigger filter on submit
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event); // Trigger submit on Enter key press
    }
  };

  return (
    <div className="flex justify-center items-center w-full max-w-md mx-auto mt-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
        onChange={handleSearch}
        value={searchByTitle}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};


export default SearchBar;
