export default function cutText(content, maxLength) {
  if (maxLength < 1) {
    return console.log(`Error, maxLength lower than 1`);
  }
  if (content.length <= maxLength) {
    return content;
  }
  let cutString = content.substr(0, maxLength);
  return cutString.substr(0, cutString.lastIndexOf(' ')) + '...';
};
