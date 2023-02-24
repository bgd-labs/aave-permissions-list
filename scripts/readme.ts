export const getPrincipalReadme = (directory: string): string => {
  let readme = `
![Aave Permissions Book](./permissions_banner.jpg)
# Aave Permissions Book

Aave protocol permissions tables.

## Table of contents
- [Description](#Description)
- [Permissions](#Permissions)
- [Usage](#Usage)
- [License](#License)

## Description

On the Aave Protocol contracts there can be found different permissions to execute its different methods. This permissions are also hold by different addresses, those being smart contracts, wallets or multi-sigs.
This repository contains and easy directory of tables showing which permissions are needed to execute the functions of the different contracts conforming the Aave Protocol, and the owners of said permissions.


## Permissions

A [permissions document](./out) has been created for every pool of every network where the Aave Protocol has been deployed. 
On these documents there can be found the next tables:
- Contracts: This table has information about the contracts forming the Aave protocol.
  - contract: Name of the contract.
  - proxyAdmin: If the contract follows the Proxy Pattern, here it will show the proxyAdmin address. The proxyAdmin has permissions to change the implementation 
  - modifier: Name of the gate method that controls who can call a function. There is an entry for every modifier that a contract has.
  - permission owner: Name of the contract that holds the permission to call the modifier.
  - functions: Name of the functions of the contract that are gated by the modifier.
- Guardians: This table holds the list of addresses with permissions to call certain methods. Normally a Guardian is a multi-sig with permission to call some methods without, following a mandate from the Aave governance.  
- Roles: This table enumerates the different roles that a protocol can have, and the contracts who have that role. A role has permissions to call certain modifiers

### Permissions directory
${directory}       
    
## Usage

To be able to generate the permissions json, and the subsequent permissions tables:

### Installation

\`\`\`
  npm install
  cp .env.example .env // this will copy the example .env to the actual .env
\`\`\`

### Scripts

To generate the permissions json, execute:
\`\`\`
  npm run modifiers:generate
\`\`\`

To generate the permissions tables, execute:
\`\`\`
  npm run tables:create
\`\`\`



## License
This repository is under [MIT License](./LICENSE)
`;
  return readme;
};
