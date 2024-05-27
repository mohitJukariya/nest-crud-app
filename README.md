Users table include folowing columns
  id 
  name 
  email
  password 
  createdAt
  updatedAt

WalletAddress table include following columns
  id
  userId 
  address
  createdAt
  updatedAt 


Code - 
CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE WalletAddress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    userId UUID REFERENCES Users(id) ON DELETE CASCADE,
    address VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);


API FOR POSTMAN TESTING
For users table
1) For GET/POST queries -- use /users
2) For PUT/DELETE queries -- use /users/{id}

for walletAddresses table 
1) For GET/POST queries -- use /wallet-addresses
2) For PUT/DELETE queries -- use /wallet-addresses/{id}


