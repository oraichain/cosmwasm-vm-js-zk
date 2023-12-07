/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} input
* @param {Uint8Array} proof
* @param {Uint8Array} vk
* @param {number} curve
* @returns {boolean}
*/
export function groth16_verify(input: Uint8Array, proof: Uint8Array, vk: Uint8Array, curve: number): boolean;
/**
* @param {Uint8Array} input
* @param {number} curve
* @returns {Uint8Array}
*/
export function curve_hash(input: Uint8Array, curve: number): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
export function keccak_256(input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
export function sha256(input: Uint8Array): Uint8Array;
/**
*/
export class Poseidon {
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} left_input
* @param {Uint8Array} right_input
* @param {number} curve
* @returns {Uint8Array}
*/
  hash(left_input: Uint8Array, right_input: Uint8Array, curve: number): Uint8Array;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly groth16_verify: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly curve_hash: (a: number, b: number) => number;
  readonly keccak_256: (a: number) => number;
  readonly sha256: (a: number) => number;
  readonly __wbg_poseidon_free: (a: number) => void;
  readonly poseidon_new: () => number;
  readonly poseidon_hash: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
