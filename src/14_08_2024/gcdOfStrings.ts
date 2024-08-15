import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
    const { str1, str2 } = JSON.parse(event.body || '{}');

    const gcd = (a: number, b: number): number => {
        while (b!== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    const canDivide = (s:string, t:string):boolean => {
        if (s.length % t.length !== 0) 
            return false;
        const repeatCount = s.length / t.length;
        return t.repeat(repeatCount) === s;
    }

    const gcdOfStrings = (str1: string, str2: string): string => {
        const len1 = str1.length;
        const len2 = str2.length;
        const gcdLength = gcd(len1, len2);

        const potentialGcd = str1.slice(0, gcdLength);
        if (canDivide(str1, potentialGcd) && canDivide(str2, potentialGcd)){
            return potentialGcd
        }
        return '';

    };

    const result = gcdOfStrings(str1, str2);
    
  return {
    statusCode: 200,
    body: JSON.stringify({
      result
    }),
  };
};