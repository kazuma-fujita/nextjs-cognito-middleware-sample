import { NextRequest } from "next/server";
import { TokenType } from "../constants/token-type";
import { CognitoToken } from "../types/cognito-token";
import { getCognitoTokenFromCookieByTokenType } from "./get-cookie-by-cognito-token-type";

export const getCognitoTokenFromCookie = (
  request: NextRequest
): CognitoToken | null => {
  const idToken = getCognitoTokenFromCookieByTokenType(
    request,
    TokenType.IdToken
  );
  const accessToken = getCognitoTokenFromCookieByTokenType(
    request,
    TokenType.AccessToken
  );
  const refreshToken = getCognitoTokenFromCookieByTokenType(
    request,
    TokenType.RefreshToken
  );
  return idToken && accessToken && refreshToken
    ? { idToken: idToken, accessToken: accessToken, refreshToken: refreshToken }
    : null;
};
