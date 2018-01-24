export * from "aire/lib/uuid";
export * from "aire/lib/types";

export const range = (start, end) =>
    Array.from({length: (end - start)}, (v, k) => k + start);


