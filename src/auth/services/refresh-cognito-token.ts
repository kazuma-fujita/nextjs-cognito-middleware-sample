import { CognitoRefreshTokenResult } from "../types/cognito-refresh-token-result";

const clientId: string = process.env.COGNITO_USER_POOLS_WEB_CLIENT_ID || "";
const cognitoUrl: string = process.env.COGNITO_URL || "";

export const refreshCognitoToken = async (
  refreshToken: string
): Promise<CognitoRefreshTokenResult> => {
  const res = await fetch(`${cognitoUrl}/oauth2/token`, {
    method: "POST",
    headers: new Headers({
      "content-type": "application/x-www-form-urlencoded",
    }),
    body: Object.entries({
      grant_type: "refresh_token",
      client_id: clientId,
      refresh_token: refreshToken,
    })
      .map(([k, v]) => `${k}=${v}`)
      .join("&"),
  });
  if (!res.ok) {
    throw new Error(JSON.stringify(await res.json()));
  }
  const newTokens = await res.json();
  return newTokens;
};
