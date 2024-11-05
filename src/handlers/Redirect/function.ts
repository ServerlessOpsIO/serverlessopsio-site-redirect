import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

const REDIRECT_HOST = process.env.REDIRECT_HOST || 'https://www.serverlessops.io'

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const redirectURL = `${REDIRECT_HOST}${event.path}`

    return {
        statusCode: 301,
        headers: {
            Location: redirectURL,
        },
        body: '',
    }
}