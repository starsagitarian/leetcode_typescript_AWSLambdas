import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  const { word1, word2 } = JSON.parse(event.body || '{}');

  const mergeStringsAlternately = (word1: string, word2: string): string => {
    let result = '';
    const minLength = Math.min(word1.length, word2.length);
    for (let i = 0; i < minLength; i++) {
      result += word1[i] + word2[i];
    }
    if (word1.length > word2.length) {
      result += word1.slice(minLength);
    } else if (word2.length > word1.length) {
      result += word2.slice(minLength);
    }
    return result;
  };

  const result = mergeStringsAlternately(word1, word2);

  return {
    statusCode: 200,
    body: JSON.stringify({
      result,
    }),
  };
};