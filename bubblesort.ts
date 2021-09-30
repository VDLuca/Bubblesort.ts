function ordemCrescente(arr:number[]):number[]{
  arr = arr.slice();
  console.log("Array inicial " + arr);

  for( let i=0;i < arr.length ;i++){ 
    for(let j=0;j < arr.length-1;j++){

      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

        console.log(arr);
      }
    }
  }
  
  return arr;
}

function ordemDescrescente(arr:number[]):number[]{
  arr = arr.slice();
  console.log("Array inicial " + arr);

  for( let i=0;i < arr.length;i++){ 
    for(let j=0;j < arr.length-1;j++){

      if(arr[j] < arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

        console.log(arr);
      }
    }
  }
  
  return arr;
}


ordemCrescente([91,3,210,12,8,59,46,23]);

//   ordemDescrescente([91,3,210,12,8,59,46,23]);