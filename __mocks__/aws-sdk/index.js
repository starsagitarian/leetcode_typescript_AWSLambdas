// __mocks__/aws-sdk/index.js
const mockAPIGateway = {
    getRestApis: jest.fn().mockReturnThis(),
    promise: jest.fn().mockResolvedValue({ items: [] }),
};

const AWS = {
    APIGateway: jest.fn(() => mockAPIGateway),
};

module.exports = AWS;