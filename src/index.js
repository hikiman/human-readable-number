module.exports = function toReadable (number) 
{
    let countNum = number;
    let backNum = 0;
    let count = 0;
    let OnesRowArray = ["zero","one","two", "three","four","five","six", "seven", "eight","nine"]
    let TensRowArray = ["","","twenty", "thirty","forty","fifty","sixty", "seventy", "eighty","ninety"]
    let HundredsRowArray = ["","one hundred","two hundred", "three hundred","four hundred","five hundred","six hundred", "seven hundred", "eight hundred","nine hundred"]
    let ExceptionsRowArray = ["ten","eleven","twelve", "thirteen","fourteen","fifteen","sixteen", "seventeen", "eighteen","nineteen"]
    let textNum = "";
    if (number == 0) 
    {
        textNum = "zero";
        console.log(textNum);
    }

    while (countNum > 0.999) 
    {
        count++;
        if (count == 1) 
        {
            textNum += OnesRowArray[countNum % 10]
            backNum = (countNum % 10);
            console.log(countNum % 10);
            console.log(textNum);
        }
        else if (count == 2) 
        {
            console.log(Math.floor(countNum % 10));
            if (Math.floor(countNum % 10) == 1)
            {
                textNum = ExceptionsRowArray[backNum];
                console.log(textNum);
            }
            else 
            {
                if (backNum == 0)
                {
                    textNum = TensRowArray[Math.floor(countNum % 10)];
                }
                else 
                {
                    if (Math.floor(countNum % 10) !== 0) 
                    {
                        textNum = TensRowArray[Math.floor(countNum % 10)] + " " + OnesRowArray[backNum];
                    }
                }
                console.log(textNum);
            }
         }
         else if (count == 3) 
         {
            if (number % 100 == 0) 
            {
                textNum = HundredsRowArray[Math.floor(countNum % 10)];
            }
            else 
            {
                textNum = HundredsRowArray[Math.floor(countNum % 10)] + " " + textNum;
                console.log(textNum);
            }
         }
        countNum /= 10;
    }
    return textNum;
}

  

