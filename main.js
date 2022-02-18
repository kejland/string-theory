// xify - returns the same string, but with every character replaced by an 'x'
// Examples:
// xify('hello') -> 'xxxxx'
// xify('hi there') -> 'xxxxxxxx'

console.log(xify("hello"));

function xify(str){
    //putting a parameter in the brackets because we need access it -> which is .length
    let xstring = "";//start with an empty string for x to go in

    for (let count = 0; count < str.length; count++){
        xstring += "x";
    }

    return xstring;
}



// yellingChars - returns the given string with an exclamation point after each character
// Examples:
// yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
// yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'

console.log(yellingChars("oh hello"))

function yellingChars(parA){
    let yelling = "";

    for (let count = 0; count < parA.length; count++){
        yelling += parA[count] + "!";
    }

    return yelling;

}


// indexedChars - adds the index of each character before that character in the given string
// Examples:
// indexedChars('hello') -> '0h1e2l3l4o'
// indexedChars('bye') -> '0b1y2e'

console.log(indexedChars("goodbye"));

function indexedChars(parB){
    let index = "";

    for (let count = 0; count < parB.length; count++){
        index += count + parB[count];
    }

    return index;
}


// numberedChars - adds the number of each character before that character in the given string
// Examples:
// numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
// numberedChars('bye') -> '(1)b(2)y(3)e'

console.log(numberedChars("hello"));

function numberedChars(parC){        
    let number = "";

    for (let count = 0; count < parC.length; count++){
        number += "(" + (count+1) + ")" + parC[count];
    }

    return number;
}


// exclaim - returns the given sentence with every question mark or period changed to an exclamation point
// Examples:
// exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
// exclaim('This is fine.') -> 'This is fine!'

console.log(exclaim("What are you doing? Are you a fool?"));

function exclaim(parD){
    let question = "";

    for (let count = 0; count < parD.length; count++){
        if (parD[count] === "?" || parD[count] === "."){
            question += "!"; //override question mark/fullstop
        } else {
            question += parD[count];
        } //we need the else statement because if not it will forget everything else in the string
    }

    return question;
}




// repeatIt - returns the given string repeated n times, where n is the second parameter
// Examples:
// repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
// repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'

console.log(repeatIt("beetlejuice", n=3));

function repeatIt(parE){
    let repeat = "";

    for (let count = 0; count < n; count++){
        repeat += parE;
    }

    return repeat;
}


// truncate - shortens a long string to 15 characters plus an ellipsis (...)
// Examples:
// truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
// truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));

function truncate(parF){
    let sentence = "";

    for (let count = 0; count < 15; count++){
        sentence += parF[count];
    }

    return sentence + "...";
}



// ciEmailify - creates an email from a two-part name
// Examples:
// ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
// ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'

console.log(ciEmailify("Anthony DeRosa"));

function ciEmailify(parG){
    
    let email = "";

    for (let count = 0; count < parG.length; count++){
        if (parG[count] === " "){
            email += "."; 
        } else {
            email += parG[count].toLowerCase();
        }

    }

    return email + "@codeimmersives.com";
}


// reverse - reverses the given string
// Examples:
// reverse('colin') -> 'niloc'
// reverse('mesuara') -> 'arausem'

console.log(reverse("colin"));

function reverse(parH){
    let string = ""
                    //parH.length-1 because we want to get the last character of the string
    for (let count = parH.length-1; count >= 0; count--){
        string += parH[count];
    }

    return string;
}



// onlyVowels - returns only the vowels from a word
// Examples:
// onlyVowels('Colin Jaffe') -> 'oiae'
// onlyVowels('quickly') -> 'ui'
// onlyVowels('Anthony DeRosa') -> 'Aoeoa'

console.log(onlyVowels("Anthony DeRosa"));

function onlyVowels(parI){
    let sent = ""

    for (let count = 0; count < parI.length; count++){
        if (parI[count] === "A" || parI[count] === "a" ||parI[count] === "E" || parI[count] === "e" || parI[count] === "I" || parI[count] === "i" || parI[count] === "O" || parI[count] === "o" || parI[count] === "U" || parI[count] === "u"){
            sent += parI[count];
        } else {
            //not adding would be leaving it blank not: -=
        }
    }

    return sent;
}


// crazyCase - returns the given string with alternating lower and upper cases
// Examples:
// crazyCase('hello') -> 'hElLo'
// crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
// crazyCase('YELLING') -> 'yElLiNg'

console.log(crazyCase("YELLING"));

function crazyCase(parJ){
    let before = "";

    for (let count = 0; count < parJ.length; count++){
        if (count % 2){
            before += parJ[count].toUpperCase();
        } else {
            before += parJ[count].toLowerCase();
        }
    }

    return before;
}



// titleCase - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
// Examples:
// titleCase('return of the king') -> 'Return Of The King'
// titleCase('cOde iMMerSives') -> 'Code Immersives'

console.log(titleCase("cOde iMMerSives"));

function titleCase(parK){
    let title = "";
    
    title += parK[0].toUpperCase();
    
    for (let count = 1; count < parK.length; count++){
        if (parK[count-1] === " "){
            title += parK[count].toUpperCase();
        } else {
            title += parK[count].toLowerCase();
        }
    }

    return title;
}


// camelCase - returns the given string in camel case
// Examples:
// camelCase('oh Hello') -> 'ohHello'
// camelCase('well yeah of course') -> 'wellYeahOfCourse'
// camelCase('Boy howdy') -> 'boyHowdy'

console.log(camelCase("well yeah of course"));

function camelCase(parL){
    let camel = "";

    camel += parL[0].toLowerCase();

    for (let count = 1; count < parL.length; count++){
        if (parL[count] === " "){

        } else if (parL[count-1] === " "){
            camel += parL[count].toUpperCase();
        } else {
            camel += parL[count];
        }

    }

    return camel;
}


// crazyCase2ReturnOfCrazyCase - same as crazyCase, but does NOT count spaces as letters to upper or lower case (see examples below!)
// Examples:
// crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
// crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'

console.log(crazyCase2("crazy stuff"));

function crazyCase2(parM){
    let crazy = "";
    
    for (let count = 0; count < parM.length; count++){
        if (parM[count-1] === " "){
            parM[count] = parM[count-1]
        } else if (count % 2){
            crazy += parM[count].toUpperCase();
        } else {
            crazy += parM[count].toLowerCase();
        }
    }

    return crazy;
}

