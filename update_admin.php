<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $category = htmlspecialchars($_POST['category']);
    $priority = htmlspecialchars($_POST['priority']);
    $message = htmlspecialchars($_POST['message']);

    $entry = "<div>
                <h3>Contact Form Submission</h3>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Category:</strong> $category</p>
                <p><strong>Priority:</strong> $priority</p>
                <p><strong>Message:</strong> $message</p>
              </div><hr />";

    $adminFile = 'admin.html';
    if (file_exists($adminFile)) {
        $currentContent = file_get_contents($adminFile);
        $newContent = $currentContent . $entry;
        file_put_contents($adminFile, $newContent);
        echo 'success';
    } else {
        echo 'fail';
    }
} else {
    echo 'fail';
}
?>