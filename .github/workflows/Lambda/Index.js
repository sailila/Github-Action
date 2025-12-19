const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1" });
const dynamo = DynamoDBDocumentClient.from(client);

exports.handler = async () => {
  const params = {
    TableName: process.env.Flightbooking_production1,
    Item: {
    bookingId: "17925573",
    flightId: "b364be91-0553-475a-a0a9-0402a796144d",
    newStatus: "booked",
    updatedAt: new Date().toISOString()
    }
  };

  await dynamo.send(new PutCommand(params));
  return { statusCode: 200, body: "Item inserted" };
};
