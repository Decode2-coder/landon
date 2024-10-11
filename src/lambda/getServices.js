import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event, context) => {
  const params = {
    TableName: "Services"
  };

  try {
    const command = new ScanCommand(params);
    const data = await client.send(command);
    return data.Items;
  } catch (err) {
    throw new Error(`Error scanning DynamoDB table: ${err}`);
  }
};
