<?php
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = "luttleboi@gmail.com";
  $email_subject = "New Form Submission";

  $email_body = "User Name: $fname $lname.\n". 
                  "User Email: $visitor_email.\n". 
                    "Message: $message.\n";

  $to = "isaacshun@yahoo.com";

  $headers = "From $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to, $email_subject, $email_body, $headers);

  headers("Location: index.html");
?>