<?php

require __DIR__ . "/CoordinatesValidator.php";
require __DIR__ . "/PointChecker.php";

@session_start();

if (!isset($_SESSION["results"])) {
    $_SESSION["results"] = array();
}

$x = "";
$y = "";
$r = "";
if(isset($_POST["x"])){
    $x = $_POST["x"];
}
if(isset($_POST["y"])){
    $y = $_POST["y"];
}
if(isset($_POST["r"])){
    $r = $_POST["r"];
}

$validator = new CoordinatesValidator($x, $y, $r);
if ($validator->checkCoordinates()) {
        $pointIsIsArea = PointChecker::isInArea($x, $y, $r);
        $coordinate_status = $pointIsIsArea
        ? "<span class='yes'>yes</span>"
        : "<span class='no'>no</span>";
        $currentTime = date("Y-m-d H:i:s");

        $newResult = array(
            "x" => $x,
            "y" => $y,
            "r" => $r,
            "coordinate_status" => $coordinate_status,
            "currentTime" => $currentTime
        );

        array_push($_SESSION["results"], $newResult);

        echo "<table id='outputTable'>
        <tr>
            <th>x</th>
            <th>y</th>
            <th>r</th>
            <th>status</th>
            <th>current time</th>
        </tr>";

        foreach (array_reverse($_SESSION["results"]) as $tableRow) {
            echo "<tr>";
            echo "<td>" . $tableRow["x"] . "</td>";
            echo "<td>" . $tableRow["y"] . "</td>";
            echo "<td>" . $tableRow["r"] . "</td>";
            echo "<td>" . $tableRow["coordinate_status"] . "</td>";
            echo "<td>" . $tableRow["currentTime"] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    
}
else {
    echo "validation faild $x, $y, $r";
}

