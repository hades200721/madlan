<?php
$target_dir = "./uploads/";
$files = array();
// $images=preg_grep('/\.(jpg|jpeg|png|gif)(?:[\?\#].*)?$/i', $files);
if ($handle = opendir('../uploads/')) {
    while (false !== ($entry = readdir($handle))) {
        $files[] = $target_dir.$entry;
    }
    $images=preg_grep('/\.(jpg|jpeg|png|gif)(?:[\?\#].*)?$/i', $files);
    $comma_separated = implode(",", $images);
    echo $comma_separated;
    closedir($handle);
}
?>