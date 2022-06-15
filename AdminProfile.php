<?php
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "verify";
     
   // connect the database with the server
   $conn = new mysqli($servername,$username,$password,$dbname);
     
   include "db_conn.php";
    // if error occurs 
    if ($conn -> connect_errno)
    {
       echo "Failed to connect to MySQL: " . $conn -> connect_error;
       exit();
    }
  
    $sql = "select * from new_retailers";
    $result = ($conn->query($sql));
    //declare array to store the data of database
    $row = []; 
  
    if ($result->num_rows > 0) 
    {
        // fetch all data from db into array 
        $row = $result->fetch_all(MYSQLI_ASSOC);  
    }   
    // echo $row[0];
?>
  
<!DOCTYPE html>
<html>
<style>
    td,th {
        border: 1px solid black;
        padding: 10px;
        margin: 5px;
        text-align: center;
    }
</style>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">



    <!-- <link rel="icon" href="Favicon.png"> -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <title>Verify</title>

</head>
  
<body>
<nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
    <div class="container">
    <a class="navbar-brand" href="index.html"  style="color:#1fa667">Verify</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    </div>
</nav>


















<main class="myform">
    <div  class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div style="background-color: #1fa667;color: #ffffff"  class="card-header">Pending Requests</div>
                        <div class="card-body">

                       
                    

    <table>
        <thead class="thead-dark">
            <tr>
                <th scope = "col">ID</th>
                <th scope = "col">Name</th>
                <th scope = "col">Email</th>
                <th class="col-md-4 col-form-label text-md-center">Location</th>
                <th class="col-md-4 col-form-label text-md-center">GST</th>
                <th class="col-md-4 col-form-label text-md-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
               if(empty($row)){
                echo "No Pending Requests!";
               }
               foreach($row as $rows)
              { 
            ?>
            <tr>
                <td><?php echo $rows['id']; ?></td>
                <td><?php echo $rows['name']; ?></td>
                <td><?php echo $rows['email']; ?></td>
                <td><?php echo $rows['location']; ?></td>
                <td><?php echo $rows['gst']; ?></td>
                <td>
                    
                    <a href="Approve.php?id=<?php echo $rows["id"];?>" class="btn btn-success">
                    
                    
                    Approve
              </a>

                    <a href="Reject.php?id=<?php echo $rows["id"]; ?>" class="btn btn-danger">
                    Reject
                    </a>
                </td>
  
            </tr>
            <?php } ?>
        </tbody>
    </table>




















                                </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</main>









</body>
</html>
  
<?php   
    mysqli_close($conn);
?>