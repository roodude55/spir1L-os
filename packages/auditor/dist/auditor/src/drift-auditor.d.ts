export declare function infiniteSpiral(start?: number): AsyncGenerator<
  | {
      phase: string;
      n: number;
      door?: undefined;
      id?: undefined;
      wobble?: undefined;
    }
  | {
      phase: string;
      door: number;
      id: number;
      n?: undefined;
      wobble?: undefined;
    }
  | {
      phase: string;
      wobble: number;
      n?: undefined;
      door?: undefined;
      id?: undefined;
    },
  void,
  unknown
>;
//# sourceMappingURL=drift-auditor.d.ts.map
