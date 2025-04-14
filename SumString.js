function getSum(str)
{
   let sum = 0;
 
   // Traversing through the string
   for (let i = 0; i < str.length; i++) {
       // Since ascii value of numbers starts from 48 so we subtract it from sum
       console.log("The ascii value of " + str[i] + " is " + (str[i] - 48).toString());
       sum = sum + str[i] - 48;
   }
   return sum;
}
console.log("The manojanand sum of string " + getSum("manojanand"));