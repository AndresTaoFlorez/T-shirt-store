/**
 * 
 * @param {*} param0 
 * @param {Array<Object>} param0.items - Array of items to filter
 * @param {string} param0.input - Search term
 * @param {string} param0.searchType - Type of search (e.g., "By_TITLE", "By_CATEGORY")
 * @param {Function} param0.setFilteredItems - Function to update the filtered items
 * @description Filters the items based on the search term and search type, and updates the filtered items using the setFilteredItems function
 */
const filterItems = ({ items, input, searchType, setFilteredItems }) => {
  if (items && items.length > 0) {
    let filtered = [];

    if (searchType === "By_TITLE") {
      filtered = items.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
    } else if (searchType === "By_CATEGORY") {
      filtered = items.filter((item) =>
        item.category.name.toLowerCase().includes(input.toLowerCase())
      );
    }

    if (input.length > 0 && filtered.length === 0) {
      setFilteredItems([]); // If no matches, return an empty list
    } else {
      setFilteredItems(filtered);
    }
  } else {
    setFilteredItems(items);
  }
};

export { filterItems };