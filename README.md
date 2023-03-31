# Build package

`wasm-pack build --target web|nodejs`

# Test

`cargo test --release --package cosmwasm-vm-js-zk --lib --target wasm32-unknown-unknown -- tests::test_zk`
