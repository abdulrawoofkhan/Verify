<?php

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['location']) && isset($_POST['password']) && isset($_POST['gst'])){
    include "db_conn.php";

    function validate($data){
        $data=trim($data);
        $data=stripslashes($data);
        $data=htmlspecialchars($data);
        return $data;
    }
    $name=validate($_POST['name']);
    $email=validate($_POST['email']);
    $location=validate($_POST['location']);
    $password=validate($_POST['password']);
    $gst=validate($_POST['gst']);


    
    if(empty($email)||empty($name)) {
        header("Location: index.html");
    } else{
        $sql = "INSERT INTO new_retailers(name,email,location,password,gst) VALUES('$name','$email','$location','$password','$gst')";
        $res= mysqli_query($conn,$sql);

        if($res){
            header("Location: RetailerRegistrationStatus.html");
        } else{
            echo "Application was not sent!";
        }
    }


} else{
    header ("Location: index.html");
}

?>