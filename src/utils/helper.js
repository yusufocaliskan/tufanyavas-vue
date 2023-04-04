/**
 * Keyword'e göre filtler..
 * @param {string} keyword aranacak kelime
 */
export function filteredItems(data, keyword) {
  return data.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  });
}
