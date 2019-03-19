/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 var count=0;
 for(var i=0;i<preferences.length;i++){
  var first_love=preferences[i],second_love=preferences[first_love-1],third_love=preferences[second_love-1];
  if(third_love-1==i&&second_love!=third_love)
      count++;}
return count/3;
 };
