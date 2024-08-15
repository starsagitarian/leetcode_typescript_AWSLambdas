# leetcode_typescript_AWSLambdas
leetcode questions created as AWS lambdas using typescript

I have officially started my journey on the #100daysofCode challege in typescript and AWS and i would be updating the different problems that i pick from leetcode and will try to create functions as solutions to those questions.

I have also attempted to describe the functions as comments as much as possible. 

The files have been structured by the dates they were worked on and they are worked entirely on Typescript and serverless architecture. 

Happy Coding!!

### Day 1 - mergeStringsAlternately

#### Problem

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

#### Solution

- first bring the 2 strings in from the event variable
- create an empty variable called result
- measure which of the two words are smaller than the other -> i used math.min to identify the length of the strings
- iterate through both string and then concatenate each of the letters in the results string
- based of which word is longer, concatenate the rest of the longer string -> i used the slice method to cut the string at the math.min length and concatenated the remaining slice to the results variable
- return the results variable, create a variable to run the function and provide it in the return object of the lambda

#### Testing

run the following url in insomnia or postman to test the api

http://localhost:3000/dev/merge-strings-alternately {POST}

JSON Body Example

{
  "word1": "abcd",
  "word2": "pqrstuv"
}


### Day 2 - Greatest Common Divisor of Strings

#### Problem

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

#### Solution

- Use the Euclidean algorithm to find the greatest common divisor (GCD) of the lengths of str1 and str2.
- Extract a candidate substring from str1 of length equal to the GCD computed in the previous step.
- Define a helper function canDivide to check if a substring can repeatedly divide a given string without remainder. Use canDivide to check if the candidate substring can divide both str1 and str2.
- If the candidate substring can divide both strings, return it as the result, else return an empty string.

#### Testing

run the following url in insomnia or postman to test the api

http://localhost:3000/dev/merge-strings-alternately {POST}

JSON Body Example

{
  "word1": "abcd",
  "word2": "pqrstuv"
}


