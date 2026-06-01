interface JwtPayload {
    sub: string;
    email: string;
    exp: number;
}
export declare class JwtService {
    sign(payload: Omit<JwtPayload, 'exp'>): string;
    verify(token: string): JwtPayload;
    private getSecret;
    private signData;
    private encode;
    private decode;
    private safeCompare;
}
export {};
