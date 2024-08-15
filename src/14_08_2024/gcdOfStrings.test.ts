import { APIGateway } from 'aws-sdk';
import { handler } from './gcdOfStrings';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

// Mock the AWS SDK
jest.mock('aws-sdk');

describe('gcdOfStrings', () => {
    it('should return the largest string that divides both strings', async () => {
        console.log('Test started: should return the largest string that divides both strings');

        const event: APIGatewayProxyEvent = {
            body: JSON.stringify({ str1: 'ABCABC', str2: 'ABC' }),
        } as APIGatewayProxyEvent;
        const context: Context = {} as Context;

        const result: APIGatewayProxyResult = await new Promise((resolve, reject) => {
            handler(event, context, (error, result) => {
                if (error) {
                    console.error('Handler error:', error);
                    reject(error);
                } else {
                    console.log('Handler result:', result);
                    resolve(result as APIGatewayProxyResult);
                }
            });
        });

        console.log('Test completed: should return the largest string that divides both strings');
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).result).toBe('ABC');
    }, 70000); // Set timeout to 70 seconds

    it('should return an empty string if no common divisor exists', async () => {
        console.log('Test started: should return an empty string if no common divisor exists');

        const event: APIGatewayProxyEvent = {
            body: JSON.stringify({ str1: 'ABC', str2: 'DEF' }),
        } as APIGatewayProxyEvent;
        const context: Context = {} as Context;

        const result: APIGatewayProxyResult = await new Promise((resolve, reject) => {
            handler(event, context, (error, result) => {
                if (error) {
                    console.error('Handler error:', error);
                    reject(error);
                } else {
                    console.log('Handler result:', result);
                    resolve(result as APIGatewayProxyResult);
                }
            });
        });

        console.log('Test completed: should return an empty string if no common divisor exists');
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).result).toBe('');
    }, 70000); // Set timeout to 70 seconds
});