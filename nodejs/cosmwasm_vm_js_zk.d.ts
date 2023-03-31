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
