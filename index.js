// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array);


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0;i<a.length;i++){
	a[i]=a[i] * 2;
}
console.log(a);


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(" "));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join("+"));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(","));


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function quickSort(arr){ 
    for(var i=0;i<arr.length-1;i++){ 
        for(var j=i+1;j<arr.length;j++){ 
            if(arr[i]<arr[j]){/*如果前面的数据比后面的大就交换位置*/
                var list=arr[i]; 
                arr[i]=arr[j]; 
                arr[j]=list; 
            }  
        } 
    }  
    return arr; 
} 
a = quickSort(a);
console.log(a);


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr){
	var h = {};
	var maxNum = 0;
	var maxEle = null;
	for(var i=0;i<arr.length;i++){
		var b = arr[i];
		h[b] === undefined? h[b]=1 : (h[b]++);
		if(h[b]>maxNum){
			maxEle = b;
			maxNum = h[b];
		}
	}
	return '出现次数最多的元素为：'+ maxEle + ',出现的次数为：'+ maxNum;
}
console.log(findMost(a));
