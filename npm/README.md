## Install package

`yarn add @oraichain/cosmwasm-vm-zk`

## Usage

```js
import {
  Poseidon,
  curve_hash,
  groth16_verify,
  keccak_256,
  sha256,
} from '@oraichain/cosmwasm-vm-zk';

export class ZkBackendApi extends BasicBackendApi {
  poseidon_hash(
    left_input: Uint8Array,
    right_input: Uint8Array,
    curve: number
  ): Uint8Array {
    return poseidon.hash(left_input, right_input, curve);
  }
  curve_hash(input: Uint8Array, curve: number): Uint8Array {
    return curve_hash(input, curve);
  }
  groth16_verify(
    input: Uint8Array,
    proof: Uint8Array,
    vk: Uint8Array,
    curve: number
  ): boolean {
    return groth16_verify(input, proof, vk, curve);
  }
  keccak_256(input: Uint8Array): Uint8Array {
    return keccak_256(input);
  }
  sha256(input: Uint8Array): Uint8Array {
    return sha256(input);
  }
}


const backend: IBackend = {
  backend_api: new ZkBackendApi('orai'),
  ...
};

```

## Test

`cargo test --release --package cosmwasm-vm-js-zk --lib --target wasm32-unknown-unknown -- tests::test_zk`
