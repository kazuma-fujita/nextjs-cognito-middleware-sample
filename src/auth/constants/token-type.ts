export const TokenType = {
  IdToken: "idToken",
  AccessToken: "accessToken",
  RefreshToken: "refreshToken",
} as const;

export type TokenType = typeof TokenType[keyof typeof TokenType];
