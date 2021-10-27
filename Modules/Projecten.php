<?php

function getProjects()
{
    try {
        global $pdo;
        $query = $pdo->prepare("SELECT * FROM project");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_CLASS, 'Project');
        return $result;
    }
    catch (PDOException $e) {
        die("Error!: " . $e->getMessage());
    return $noResult = [];
}
}