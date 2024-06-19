<?php
header('Access-Control-Allow-Origin: *'); 
/* header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); 
header('Access-Control-Allow-Headers: Content-Type'); 
 */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];
        $uploadDirectory = 'uploads/'; 

        if (!is_dir($uploadDirectory)) {
            mkdir($uploadDirectory, 0777, true);
        }

        $uploadPath = $uploadDirectory . basename($file['name']);
        if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
            echo json_encode(["status" => "success", "path" => $uploadPath]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to upload file."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No file uploaded."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
