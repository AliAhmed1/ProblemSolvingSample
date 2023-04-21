
var a= ["img","is" , "the", "pk", "pk","k","ls","img","img","img","img"]
// output 
// [{img:3}.{is:1},{the:1},{pk:1},{k:1},{Is:1}]

let obj = {}
// obj[a[0]] = 1
// obj[a[1]] += 1
// console.log(obj)


for(var i=0 ; i < a.length ; i++)
{
    // console.log(a[i])
    if(!obj[a[i]]) {obj[a[i]] = 1}

    if(obj[a[i]] <= 1){
        for(var j = i+1 ; j < a.length ; j++)
        {
            if(a[i] == a[j])
            {
                obj[a[i]]++;
            }
        }
    }
}

console.log(obj)
