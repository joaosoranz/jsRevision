function reverse(str) {

    //check input
    if(!str || str.length < 2 || typeof str !== 'string')
      return str;
  
    let result = '';
    for (let i = str.length; i >= 0; i--) {
      result += str.charAt(i);
    }
    return result;
  }
  
  console.log(reverse(435435));
  console.log(reverse('Joao Arantes Soranz'));

  function reverse2(str) {

    //check input
    if(!str || str.length < 2 || typeof str !== 'string')
      return str;
  
    const backwards = [];
    const totalItems = str.length - 1;
  
    for(let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]);    
    }
  
    return backwards.join('');
  }
  
  console.log(reverse2(435435));
  console.log(reverse2('Hey my name is John'));

  function reverse3(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverse3('Welcome my friend'));
  
  const reverse4 = str => str.split('').reverse().join('');
  
  console.log(reverse4('Started raining'));