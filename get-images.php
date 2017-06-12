<?php
$files = array();
// $images=preg_grep('/\.(jpg|jpeg|png|gif)(?:[\?\#].*)?$/i', $files);
if ($handle = opendir('./uploads/')) {
    while (false !== ($entry = readdir($handle))) {
        $files[] = $entry;
    }
    // $images = preg_grep('/\.jpg|gif$/i', $files);
    $images=preg_grep('/\.(jpg|jpeg|png|gif)(?:[\?\#].*)?$/i', $files);

    foreach($images as $image)
    {
    echo $image.",";
    }
    closedir($handle);
}
?>