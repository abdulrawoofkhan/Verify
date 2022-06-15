<?php 

session_start(); 

include "db_conn.php";

if (isset($_POST['email']) && isset($_POST['password'])) {

    function validate($data){

       $data = trim($data);

       $data = stripslashes($data);

       $data = htmlspecialchars($data);

       return $data;

    }

    $email = validate($_POST['email']);

    $password = validate($_POST['password']);

    if (empty($email)) {

        header("Location: RetailerLogin.html");

        exit();

    }else if(empty($password)){

        header("Location: RetailerLogin.html");

        exit();

    }else{

        $sql = "SELECT * FROM retailers WHERE email='$email' AND password='$password'";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) === 1) {

            $row = mysqli_fetch_assoc($result);

            if ($row['email'] === $email && $row['password'] === $password) {

                echo "Logged in!";

                $_SESSION['email'] = $row['email'];

                $_SESSION['name'] = $row['name'];

                $_SESSION['id'] = $row['id'];

                header("Location: createQRCodes.html");

                exit();

            }else{

                header("Location: RetailerLogin.html");

                exit();

            }

        }else{

            header("Location: RetailerLogin.html");

            exit();

        }

    }

}else{

    header("Location: RetailerLogin.html");

    exit();

}