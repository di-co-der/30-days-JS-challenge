// var num = prompt("enter num") ;
// if(num > 0) console.log("greater than zero");
// if(num == 0) console.log("equal to zero");
// if(num < 0) console.log("less than zero");


// var age = prompt("enter age") ;
// if(age >= 18) console.log("please vote!");
// else console.log("you are kid");

// var a,b,c;
// var a =prompt("enter 1st num");
// var b =prompt("enter 2nd num");
// var c =prompt("enter 3rd num");
// if(a>b){
//     if(a>c) console.log(a, ' is biggest');
//     else console.log(c, ' is biggest');
// }

// else{
//     if(b>c) console.log(b, 'is biggest');
//     else console.log(c, 'is biggest');
// }


// var n = prompt('enter day number');
// n = parseInt(n);
// switch(n){

//     case 1: 
//     {console.log('monday');
//     break;}
//     case 2: 
//     console.log('tuesday');
//     break;
//     case 3: 
//     console.log('wednesday');
//     break;
//     case 4: 
//     console.log('thursday');
//     break;
//     case 5: 
//     console.log('friday');
//     break;
//     case 6: 
//     console.log('saturday');
//     break;
//     case 7: 
//     console.log('sunday');
//     break;
//     default:
//         console.log('enter b/w 1-7');
// }

// var n = prompt("enter num");
// n%2== 0 ? console.log('even') : console.log('odd');


var year = prompt("enter a year");
year = parseInt(year);
if(year % 4 == 0){
    if(year % 100 != 0) console.log('leap year');
    if(year % 400 == 0) console.log('leap year');
}

else console.log('not leap');