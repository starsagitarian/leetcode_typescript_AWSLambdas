import { handler } from './mergeStringsAlternately';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

describe('mergeStringsAlternately', () => {
    const createEvent = (word1: string, word2: string): APIGatewayProxyEvent => ({
        body: JSON.stringify({ word1, word2 }),
    } as APIGatewayProxyEvent);

    it('should merge strings alternately for equal length strings', async () => {
        const event: APIGatewayProxyEvent = createEvent('abc', 'pqr');
        const result: APIGatewayProxyResult = await new Promise((resolve, reject) => {
          handler(event, {} as Context, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as APIGatewayProxyResult);
            }
          });
        });

    expect(result.statusCode).toEqual(200);
        const body = JSON.parse(result.body as string);
        expect(JSON.parse(result.body).result).toEqual('apbqcr');
    });

    it('should merge strings alternately when first string is shorted', async () => {
        const event = createEvent('ab', 'pqrs');
        const result: APIGatewayProxyResult = await new Promise((resolve, reject) => {
          handler(event, {} as Context, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as APIGatewayProxyResult);
            }
          });
        });
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).result).toBe('apbqrs');
    });

    it('should merge strings alternately when second string is shorted', async () => {
        const event = createEvent('abc', 'p');
        const result: APIGatewayProxyResult = await new Promise((resolve, reject) => {
          handler(event, {} as Context, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as APIGatewayProxyResult);
            }
          });
        });
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).result).toBe('apbc');
    });

    it('should handle empty first string', async () => {
        const event = createEvent('', 'pqr');
        const result: APIGatewayProxyResult = await new Promise((resolve, reject) => {
          handler(event, {} as Context, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as APIGatewayProxyResult);
            }
          });
        });
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).result).toBe('pqr');
    });

    it('should handle empty second string', async() => {
        const event = createEvent('abc', '');
        const result: APIGatewayProxyResult = await new Promise((resolve, reject) => {
          handler(event, {} as Context, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as APIGatewayProxyResult);
            }
          });
        });
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).result).toBe('abc');
    });

    it('should handle both strings being empty', async () => {
        const event = createEvent('', '');
        const result: APIGatewayProxyResult = await new Promise((resolve, reject) => {
          handler(event, {} as Context, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result as APIGatewayProxyResult);
            }
          });
        });
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).result).toBe('');
    });
});