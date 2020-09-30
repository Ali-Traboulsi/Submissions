
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace('e', ' ');
    
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text[4];
}
const showChar9 = (text) => {
    return text.substring(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    if (typeof text == "string"){
        return true;
    }
    else{
        return false;
    }
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    var count = 0;
    for (var i = 0; i < text.length; i++){
        if(text[i] == ' ')
            count++;
    }
    return count;
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    var result = x;
    for (i = 1; i < y; i++){
        result = result * x;}
    return result; 
}
const absoluteValue = (num) => {
    if (num < 0){
        num *= -1;
    }
    return num;
}
const absoluteValueArray = (array) => {
    for(i = 0; i < array.length; i++){
        if(array[i] < 0)
            array[i] *= -1;
    }
    return array;
}
const circleSurface = (radius) => {
    var surface = 1;
    surface = Math.PI * Math.pow(radius, 2);
    return Math.round(surface);
}
const hypothenuse = (ab, ac) => {
    var hyp = 1;
    hyp = Math.sqrt(Math.pow(ab,2) + Math.pow(ac, 2));
    return hyp;
}
const BMI = (weight, height) => {
    var bmi = 1;
    bmi = weight / (Math.pow(height, 2));
    return Math.round(bmi * 100)  / 100;
}

const createLanguagesArray = () => {

}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}