# Target
finish a FA contract to mint PNTs

config .env

npm run move:publish

```
> node ./scripts/move/publish

(node:50059) ExperimentalWarning: CommonJS module /Users/jason/.nvm/versions/node/v23.3.0/lib/node_modules/npm/node_modules/debug/src/node.js is loading ES Module /Users/jason/.nvm/versions/node/v23.3.0/lib/node_modules/npm/node_modules/supports-color/index.js using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Compiling, may take a little while to download git dependencies...
UPDATING GIT DEPENDENCY https://github.com/aptos-labs/aptos-core.git
INCLUDING DEPENDENCY AptosFramework
INCLUDING DEPENDENCY AptosStdlib
INCLUDING DEPENDENCY MoveStdlib
BUILDING fungible_asset_launchpad
Do you want to publish this package at object address 0x58280cfaf5cedc94b2dd4ba0e053f7bb025d064a3d59fed57621308a2cb9181e [yes/no] >
yes
package size 8917 bytes
Do you want to submit a transaction for a range of [592300 - 888400] Octas at a gas unit price of 100 Octas? [yes/no] >
yes
Transaction submitted: https://explorer.aptoslabs.com/txn/0x8d916a0a01889915859804a55c06a1b6f601aacce08dd183fc2ac43585cdb7ee
Code was successfully deployed to object address 0x58280cfaf5cedc94b2dd4ba0e053f7bb025d064a3d59fed57621308a2cb9181e
{
  "Result": "Success"
}

```
FA address: 0xee3ff47098abfc3640a626732dac235dfdd807b563d806ee8c20460f22d1df85