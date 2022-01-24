<?php
    require_once('templates/head.php');
    require_once('templates/database.php');
    include_once('templates/function.php');
?>
<link rel="stylesheet" href="style.css">
<body>
    <h2>Vul uw bestelling hieronder in:</h2>
    <div class="order">
    <select name="sushi_type">
        <option selected disabled value="">Vul iets in!</option>
            <?php
                getSushi();
            ?>
        </select>
        <form method="post" class="form">
                <div class="p1">
                    <h3>Hoeveelheid:</h3>
                        <input type="number" name="amount" value="1">
                    <h3>Voornaam:</h3>
                        <input type="text" name="first">
                    <h3>Achternaam:</h3>
                        <input type="text" name="last">
                </div>
                <div class="p2">
                <h3>Adres:</h3>
                        <input type="text" name="address">
                    <h3>Stad:</h3>
                        <input type="text" name="city">
                    <h3>Postcode:</h3>
                        <input type="text" name="zip">
                    <input type="submit" name="submit">
                </div>
        </form>
    </div>
    <?php
        submitInfo();
    ?>
</body>