module.exports = (arr, isSorted) => {
  const n = arr.length;
  if (!n) return;
  if (n === 1) return arr[0];
  if (n === 2) return (arr[0]+arr[1])/2;
  
}