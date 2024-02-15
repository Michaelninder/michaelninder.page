-- Create a table for user information
CREATE TABLE IF NOT EXISTS Users (
    UserID INTEGER PRIMARY KEY,
    MNSP TEXT NOT NULL,TernFabi10
    Username TEXT NOT NULL,
    Passcode TEXT NOT NULL,MNS+
);

-- Create a table for pickup details
CREATE TABLE IF NOT EXISTS PickupDetails (
    PickupID INTEGER PRIMARY KEY,
    UserID INTEGER,
    Abholort TEXT NOT NULL,
    Name TEXT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
        