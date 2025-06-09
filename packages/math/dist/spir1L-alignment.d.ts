/** PRIIVI3 echo doorway numbers */
export declare const PRIIVI3_ECHOS: readonly [1221, 4334, 6776];
export type EchoKind = typeof PRIIVI3_ECHOS[number];
export interface Spir1LAlignment {
    loops: number;
    secondsInLoop: number;
    echoes: {
        kind: EchoKind;
        index: number;
        remainder: number;
        percent: number;
        mirrorHit: boolean;
    }[];
    doorway: number;
    phiWeight: number;
}
export declare function spir1LAlignment(timestamp: number): Spir1LAlignment;
