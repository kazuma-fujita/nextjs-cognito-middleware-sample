import { NextRequest, NextResponse } from "next/server";
import { TokenType } from "../constants/token-type";
import { CognitoRefreshTokenResult } from "../types/cognito-refresh-token-result";
import { refreshCognitoToken } from "./refresh-cognito-token";
import { setTokenIntoCookie } from "./set-cognito-token-into-cookie";

export const refreshCognitoTokenThenSetCookie = async (
  refreshToken: string,
  request: NextRequest,
  response: NextResponse
): Promise<NextResponse> => {
  // RefreshTokenでIdToken/AccessTokenを再生成
  const newTokens: CognitoRefreshTokenResult = await refreshCognitoToken(
    refreshToken
  );
  // IdToken/AccessTokenの有効期限更新成功時次の処理へパス
  // 再生成したIdToken/AccessTokenをCookieにセット
  response = setTokenIntoCookie(
    request,
    response,
    TokenType.IdToken,
    newTokens.id_token
  );
  response = setTokenIntoCookie(
    request,
    response,
    TokenType.AccessToken,
    newTokens.access_token
  );
  return response;
};
