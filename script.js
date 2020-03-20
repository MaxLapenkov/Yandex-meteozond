let diffs = [  
    [1, 0],  
    [0, 1],  
    [1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
  
  ];
  function yandex(diffs) {  
  let sumLeft = 0;
  let sumRight = 0;
  
  diffs.forEach(item => {
    sumLeft += item[0];
    sumRight += item[1];
  });
  
  function change(index, sum) {
     for(let i = 0; i < diffs.length; i++) {
       if (sum != 0 && sum % 2 == 0) {
        if(diffs[i][index] != 0) {
          diffs[i][index] *= -1;
          sum += diffs[i][index] * 2;
        }
      } 
      
    }
  
  }
  
  change(0, sumLeft);
  change(1, sumRight);
  
  if(sumLeft % 2 != 0) {
    diffs = null;
  }
  if(sumRight % 2 != 0) {
    diffs = null;
  }
  
  return diffs;
  }
  
  yandex(diffs);

