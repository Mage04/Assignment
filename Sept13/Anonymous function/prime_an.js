
var arr = [1, 2, 3, -5, 7, 9 , 4, 12, 22];

var prime = function(num) 
{
	 
  for (let start = 2; num > start; start++) 
  {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(arr.filter(prime));

