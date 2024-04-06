<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "scott";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Login process
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login successful
        session_start();
        $_SESSION['username'] = $username;
        header("location: main_website.php");
    } else {
        // Login failed
        echo "Invalid username or password";
    }
}

$conn->close();
?>
