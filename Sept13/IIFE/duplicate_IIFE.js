let a=[1,2,4,5,7,1,5];
let b =[];

 (function ()
{
	let len = a.length;
	 for (var i =0;i<len;i++)
	 {
	 	if(b.indexOf(a[i]) === -1)
	 	{
	 		b.push(a[i]);
	 	}
	 }
console.log(b);
})

();