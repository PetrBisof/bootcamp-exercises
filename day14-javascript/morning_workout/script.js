const number = prompt('ID?');

const nidIsValid = (nid) => {
    if (Number.isNaN(parseInt(nid, 10)) || nid.length < 10 || parseInt(nid, 10) % 11 > 0 ) {
      return false;
    }
   
    return true;
  };

  console.log(nidIsValid(8611250164));
  




/*   Change this function so that it also checks that the number has exactly 10 digits; */