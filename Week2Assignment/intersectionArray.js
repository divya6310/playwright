function intersection(arr1,arr2)
{
    for (let index = 0; index < arr1.length; index++) {
        for (let index2 = 0; index2 < arr2.length; index2++) {
        if(arr1[index] == arr2[index2])
        {
            arr1.splice(index,1);
        }
    }
}
    result = arr1.concat(arr2);
    return result;
}

console.log(intersection([1,2,3,4,5],[2,3,4,5,6]));
 