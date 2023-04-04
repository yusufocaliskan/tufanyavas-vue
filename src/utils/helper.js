/**
 * Keyword'e göre filtler..
 * @param {string} keyword aranacak kelime
 */
export function filteredItems(data, keyword) {
  return data.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  });
}

/**
 * x time ago der :)
 * @param {mixed} time
 * @returns string
 */
export function timeAgo(time) {
  const timestamp = new Date(time);
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else {
    return `${days} days ago`;
  }
}
