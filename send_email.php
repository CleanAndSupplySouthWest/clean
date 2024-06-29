<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $category = htmlspecialchars($_POST['category']);
    $priority = htmlspecialchars($_POST['priority']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'sales@cleanandsupply.co.uk'; // Your email address
    $subject = 'Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nCategory: $category\nPriority: $priority\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        echo 'fail';
    }
} else {
    echo 'fail';
}
?>
