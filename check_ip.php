<?php
// Allowed IP addresses
$allowed_ips = array('92.233.227.28', '987.65.43.21'); // Replace with actual IP addresses

// Get the user's IP address
$user_ip = $_SERVER['REMOTE_ADDR'];

// Check if the user's IP address is in the allowed list
if (!in_array($user_ip, $allowed_ips)) {
    // If the IP is not allowed, show an error message and exit
    echo "<h1>Access Denied</h1>";
    echo "<p>Your IP address ($user_ip) is not allowed to access this page.</p>";
    exit;
}

// If the IP is allowed, include the admin HTML content
include('admin.html');
?>