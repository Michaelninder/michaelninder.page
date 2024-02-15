<?php
// Assuming you have a database connection
$dsn = "mysql:host=localhost;dbname=your_database_name";
$username = "your_username";
$password = "your_password";

try {
    $pdo = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mnsp = $_POST["mnsp"];
    $passcode = $_POST["passcode"];

    $stmt = $pdo->prepare("SELECT * FROM Users WHERE MNSP = ? AND Passcode = ?");
    $stmt->execute([$mnsp, $passcode]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        // Log in successful, you can set cookies or session variables here
        echo "Login successful!";
    } else {
        echo "Invalid MNSP or passcode";
    }
}
?>
