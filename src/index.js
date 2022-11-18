module.exports = function toReadable (number) {

    var result, b;
    function word (number1){
        switch (number1) {
            case 0: return ('zero');
            case 1: return ('one');
            case 2: return ('two');
            case 3: return ('three');
            case 4: return ('four');
            case 5: return ('five');
            case 6: return ('six');
            case 7: return ('seven');
            case 8: return ('eight');
            case 9: return ('nine');
        }
    };

    function word1 (number1){
        switch (number1) {
            case 1: return ('ten');
            case 2: return ('twenty');
            case 3: return ('thirty');
            case 4: return ('forty');
            case 5: return ('fifty');
            case 6: return ('sixty');
            case 7: return ('seventy');
            case 8: return ('eighty');
            case 9: return ('ninety');
        }
    };

    function word3 (number1){
        switch (number1) {
            case 10: return ('ten');
            case 11: return ('eleven');
            case 12: return ('twelve');
            case 13: return ('thirteen');
            case 14: return ('fourteen');
            case 15: return ('fifteen');
            case 16: return ('sixteen');
            case 17: return ('seventeen');
            case 18: return ('eighteen');
            case 19: return ('nineteen');
        }
    };


  var a=number.toString().length;
  //console.log(a);
    

  if (a==3) {
    if ((Number(number.toString().slice(1,3))) == 10){
        result = word(Math.floor(number/100)) + ' hundred ten';
        console.log(result);
        return result;
    }
    else{
        if ((Number(number.toString().slice(1,3))) == 00){
            result = word(Math.floor(number/100)) + ' hundred';
            console.log(result);
            return result;
        }
        else{


        if ((Number(number.toString().slice(2,3))) == 0){
            result = word(Math.floor(number/100)) + ' hundred ' +  word1(Number(number.toString().slice(1,2)));
            console.log(result);
            return result;
        }
        else{
            if ((Number(number.toString().slice(1,2))) == 0){
                result = word(Math.floor(number/100)) + ' hundred ' + word(Number(number.toString().slice(2,3)));
                console.log(result);
                return result;
            }
            else{
        if ((Number(number.toString().slice(1,2))) == 1){
            result = word(Math.floor(number/100)) + ' hundred ' + word3(Number(number.toString().slice(1,3)));
            console.log(result);
            return result;
        }
        else{
            result = word(Math.floor(number/100)) + ' hundred ' + word1(Number(number.toString().slice(1,2))) + ' '  + word(Number(number.toString().slice(2,3)));
            console.log(result);
            return result;
            };
  };
  };
};
  };
  };

  if (a==2) {

    if ((Number(number.toString().slice(1,2))) == 0){
        result = word1(Number(number.toString().slice(0,1)));
        console.log(result);
        return result;
    }
    else{
    

    if ((Number(number.toString().slice(0,1))) == 1){
        result = word3(Number(number.toString().slice(0,2)));
        console.log(result);
        return result;
    }
    else{

    result = word1(Number(number.toString().slice(0,1))) + ' '  + word(Number(number.toString().slice(1,2)));
    console.log(result);
    return result;
    };
  };
};

  if (a==1) {
    result = word(number);
    console.log(result);
    return result;
  };
};
// toReadable (10);
