
The Kcoin blockchain is a rudimentary blockchain solution which contains a network of express servers which communicate through Redis Pub/Sub. This project has a fully scalable backend as well as a frontend and is capable of being deployed publicly. The Kcoin blockchain contains the core features of any blockchain: cryptographic hashing, proof of work, transaction verification, transaction pools, mining,public/private keys etc.

This block chain solution is a demo blockchain to be run locally on your machine.

This blockchain solution leverages node.js, React, Express servers, Redis Pub/Sub, as well as many other libraries and packages.




How to Run Locally:
Clone the git repository somewhere on your machine,

Install local dependencies with npm install,

IMPORTANT: npm install will not install the redis server. The redis server must be installed manually. Instructions vary depending on operating system.

Once everything has installed, enter 'npm run dev' on the command line. This will launch the root node of the blockchain on port 3000 of your computer. After this you can open up separate terminals and run 'npm run dev-peer' to start peer which will sync up to the root node. Note that the blockchain is setup so that when it is run locally there will be fake blocks added with fake addresses. This is done just for demo purposes.

Once everything is setup, you can view the blockchain, create transactions, view others on the network, and mine.

More:
Currently there is no implented way within the app to save the user's address and balance locally. A local wallet will be implemented a long with the app soon.



Sources:
The Udemy Build a Blockchain and CryptoCurrency Full-Stack Edition was largely used as a source for setting up the network.
