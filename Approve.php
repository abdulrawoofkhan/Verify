<?php

include_once 'db_conn.php';

$sql2= "INSERT INTO retailers (SELECT * FROM new_retailers  WHERE id='" . $_GET["id"] . "')";
if (mysqli_query($conn, $sql2)) {
    $name="SELECT name from new_retailers WHERE id='" . $_GET["id"] . "'";
    $email="SELECT email from new_retailers WHERE id='" . $_GET["id"] . "'";
    $location="SELECT location from new_retailers WHERE id='" . $_GET["id"] . "'";


    $sql = "DELETE FROM new_retailers WHERE id='" . $_GET["id"] . "'";
    if (mysqli_query($conn, $sql)) {

    header("Location: AdminProfile.php");}
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="script.js">
        createRetailer('$email','$name','$location');
        console.log("$email");
    </script>
</body>
</html>