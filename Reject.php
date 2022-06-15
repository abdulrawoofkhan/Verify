<?php
include_once 'db_conn.php';
$sql = "DELETE FROM new_retailers WHERE id='" . $_GET["id"] . "'";
if (mysqli_query($conn, $sql)) {
    header("Location: AdminProfile.php");
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}
mysqli_close($conn);
?>