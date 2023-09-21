<?php

class PointChecker {
    public static function isInArea($x, $y, $r) {
        if ($x >= 0 && $y >= 0) { // Check for circle in top-right quadrant
            return ($x * $x + $y * $y) <= ($r * $r);
        }
        if ($x <= 0 && $y <= 0) { // Check for rectangle in the bottom-left quadrant
            return ($x >= -$r) && ($y >= -$r);
        }
        if ($x <=  0 && $y > 0) { // Check for triangle in top-left quadrant
            return ($x >=  -$r / 2) && ($y <= $r / 2) && ($y <= $x / 2 + $r / 2);
        }
        return false; // For top-right quadrant, always return false
    }
}
