<?php
function getSushi() {
    global $pdo;
    $sushi = $pdo->prepare("SELECT * FROM sushi");
    $sushi->execute();
    $result = $sushi->fetchAll(PDO::FETCH_ASSOC);
    foreach($result as $data) {
        echo "<option selected enabled value='$data[name]'>" . $data['name'] . "</option>";
    }
}

function submitInfo() {
    global $pdo;
    if(isset($_POST['submit'])){
        if ($_POST['amount'] != 0 && !empty($_POST['amount']) && !empty($_POST['first']) && !empty($_POST['last']) && !empty($_POST['address']) && !empty($_POST['city']) && !empty($_POST['zip'])) {
            $amount = $_POST['amount'];
            $sushi = $_POST['sushi_type'];
            $first = $_POST['first'];
            $last = $_POST['last'];
            $address = $_POST['address'];
            $city = $_POST['city'];
            $zip = $_POST['zip'];

            $sql = $pdo->prepare("INSERT INTO customer (fname, lname, address, city, zipcode) VALUES ('$first', '$last', '$address', '$city', '$zip')");
            $sql->execute();

            $sql = $pdo->prepare("SELECT * FROM customer");
            $sql->execute();
            $result = $sql->fetchAll(PDO::FETCH_ASSOC);

            foreach ($result as $data) {
                if ($data['address'] == $address) {
                    $fn = $data['fname'];
                    $ln = $data['lname'];
                    $ad = $data['address'];
                    $ci = $data['city'];
                    $zi = $data['zipcode'];
                }
            }

            $sql = $pdo->prepare("SELECT * FROM sushi");
            $sql->execute();
            $result = $sql->fetchAll(PDO::FETCH_ASSOC);

            foreach ($result as $data) {
                if ($data['name'] == $sushi) {
                    $sn = $data['name'];
                    $sp = $data['price'];
                    $id = $data['id'];
                    $sa = $amount;
                    if ($sa > 1) {
                        $stp = $data['price'] * $sa;
                    } else {
                        $stp = $sp;
                    }
                }
            }
            echo "
            <table>
                <tr>
                    <th>Voornaam</th>
                    <th>Achternaam</th>
                    <th>Adres</th>
                    <th>Stad</th>
                    <th>Postcode</th>
                </tr>
                <tr>
                    <td>" . $fn . "</td>
                    <td>" . $ln . "</td>
                    <td>" . $ad . "</td>
                    <td>" . $ci . "</td>
                    <td>" . $zi . "</td>
                </tr>
                <tr>
                    <th>Sushi</th>
                    <th>Prijs</th>
                    <th>Hoeveelheid</th>
                    <th>Totaal Prijs</th>
                </tr>
                <tr>
                    <td>" . $sn . "</td>
                    <td>" . $sp . "</td>
                    <td>" . $sa . "</td>
                    <td>" . $stp . "</td>
                </tr>
            </table>";
        } else {
            echo '<script>alert("Fill in all fields.");</script>';
        }
    }
}