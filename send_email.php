<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $category = htmlspecialchars($_POST['category']);
    $priority = htmlspecialchars($_POST['priority']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient email
    $to = "sales@cleanandsupply.co.uk";

    // Subject
    $subject = "New message from $name";

    // Message
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Category: $category\n";
    $body .= "Priority: $priority\n";
    $body .= "Message:\n$message";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
