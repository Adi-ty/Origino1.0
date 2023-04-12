# Origino 1.0

Origino API is an OpenAI-powered API that detects the similarity between texts using embeddings.

## Features 
  - Built with Next.js 13.2
  - Uses OpenAI API to detect text similarity.
  - Rate limiting to ensure optimal API usage
  - Web application to obtain API key
  - Web application with authentication & authorization using NextAuth and Oauth2.0

## Setup

To setup this project locally follow these steps:
1. Clone the repository to your local machine
  ```cmd
git clone https://github.com/{your-github-username}/Origino1.0.git
  ```
2. Change directory to Origino1.0 
  ```cmd
cd Origino1.0
```
3. Install the dependencies.
```cmd
yarn install
```
4. Start the server 
  ```cmd
  yarn dev
  ```
5. Open the web application at `http://localhost:3000`

## API Usage

To use the Origino API, make a POST request to the endpoint at /api/v1/similarity. The request must include the following parameters in the request body:
- `text1`: The first text input to compare.
- `text2`: The second text input to compare.

The request must also include the `Authorization` header with your API key.

## Rate Limiting
To ensure optimal API usage, Origino API has rate limiting implemented with Redis. The API limits usage to 50 requests per hour per API key. If this limit is exceeded, the API will respond with a `429 Too Many Requests` error.

## Technologies Used

  - Next.js 13.2
  - Tailwind CSS
  - Open AI API
  - Prisma
  - PlanetScale
  - NextAuth
  - Oauth 2.0
  - Redis

