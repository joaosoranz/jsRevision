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