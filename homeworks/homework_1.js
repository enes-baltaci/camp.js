
function findPrime(...numbers) {
    
    for (let i = 0; i < numbers.length; i++) {

        let flag = 0;

        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j === 0) {
                flag = 1;
                break;
            }
        }

        if (flag === 0) {
            console.log(numbers[i] + " is Prime.\n");
        }
    }
}

// FOR FINDING PRIME NUMBERS
findPrime(2, 5, 8, 21, 13);

function isFriend(number1, number2) {
    
    let total1 = 0, total2 = 0, flag = 0;

    if (number1 % 2 === 0)
    {

        for (let i = 1; i <= number1 / 2; i++)
        {
            if (number1 % i === 0)
            {
                total1 += i;
            }
        }

        if (total1 === number2) {
            
            if (number2 % 2 === 0)
            {
                for (let i = 1; i <= number2 / 2; i++)
                {
                    if (number2 % i === 0)
                    {
                        total2 += i;
                    }
                }

                if (total2 === number1)
                {
                    flag = 1;
                }
            }
            else
            {

                for (let i = 1; i <= number2 / 3; i++)
                {
                    if (number2 % i == 0)
                    {
                        total2 += i;
                    }                    
                }

                if (total2 === number1)
                {
                    flag = 1;
                }
            }
        }
    }
    else
    {
        for (let i = 1; i <= number1 / 3; i++)
        {
            if (number1 % i === 0) {
                total1 += i;
            }
            
            if (total1 === number2)
            {
                if (number2 % 2 === 0)
                {
                    for (let i = 1; i <= number2 / 2; i++)
                    {
                        if (number2 % i === 0)
                        {
                            total2 += i;
                        }
                    }
    
                    if (total2 === number1)
                    {
                        flag = 1;
                    }
                }
                else
                {        
                    for (let i = 1; i <= number2 / 3; i++)
                    {
                        if (number2 % i == 0)
                        {
                            total2 += i;
                        }                    
                    }
    
                    if (total2 === number1)
                    {
                        flag = 1;                        
                    }        
                }
            }
        }
    }

    if (flag === 1) {
        console.log(number1 + " and " + number2 + " are friends!");
    }
    else
    {
        console.log("They are not friends.");
    }
}

isFriend(12285, 14595);

for (let i = 1; i <= 1000; i++)
{
    let total = 0;

    for (let j = 1; j <= i; j++)
    {
        if (i % j === 0)
        {
            total += j;
        }
    }

    if (total === i * 2)
    {
        console.log(i + " is a perfect number!");
    }
}

for (let i = 1; i <= 1000; i++)
{
    let flag = 1;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = 0;
            break;
        }
    }

    if (flag === 1) {
        console.log(i + " is a Prime number!");
    }
}