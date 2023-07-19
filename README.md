# Build package

`wasm-pack build --target web|nodejs`

# Publish

`yarn publish --access public web|nodejs --patch`

# Test

`cargo test --release --package cosmwasm-vm-js-zk --lib --target wasm32-unknown-unknown -- tests::test_zk`
