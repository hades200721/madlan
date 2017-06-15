<?php
$target_dir = "./uploads/";
$files = array();
// $images=preg_grep('/\.(jpg|jpeg|png|gif)(?:[\?\#].*)?$/i', $files);
if ($handle = opendir('../uploads/')) {
    while (false !== ($entry = readdir($handle))) {
        $files[] = $entry;
    }
    $images=preg_grep('/\.(jpg|jpeg|png|gif)(?:[\?\#].*)?$/i', $files);

    foreach($images as $image)
    {
    echo $target_dir.$image.",";
    }
    closedir($handle);
}
?>