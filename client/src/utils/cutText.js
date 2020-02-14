export default function cutText(content = '', maxLength) {
  if (content === null) {
    //console.error('CutText content is null');
    content = '';
  }
  if (maxLength < 1) {
    return console.error(`Error, maxLength lower than 1`);
  }
  if (content.length <= maxLength) {
    return content;
  }
  let cutString = content.substr(0, maxLength);
  return cutString.substr(0, cutString.lastIndexOf(' ')) + '...';
}
