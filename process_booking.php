<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $service = mysqli_real_escape_string($conn, $_POST['service']);
    $date = mysqli_real_escape_string($conn, $_POST['date']);
    $time = mysqli_real_escape_string($conn, $_POST['time']);

    $sql = "INSERT INTO bookings (customer_name, service_type, appointment_date, appointment_time)
            VALUES ('$name', '$service', '$date', '$time')";

    if ($conn->query($sql) === TRUE) {
        echo "<h1>BOOKING SUCCESSFUL</h1>";
        echo "<p>Protocol initiated for $name at $time on $date.</p>";
        echo "<a href='index.html'>Return to System Home</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
