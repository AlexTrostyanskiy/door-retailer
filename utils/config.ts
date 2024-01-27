export const baseUrl: URL = {
  production: new URL("https://www.google.nl"),
  development: new URL(`https://${process.env.VERCEL_URL || "localhost:3000"}`),
  test: new URL("https://www.google.nl"),
  local: new URL("http://localhost:3000")
}[process.env.NODE_ENV];
