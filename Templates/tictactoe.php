<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boter Kaas en Eiren</title>
    <link rel="stylesheet" href="/portfolio/public/css/styling.css">
    <link rel="stylesheet" href="/portfolio/public/css/tictactoestyle.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Roboto:wght@100&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="navbar">
            <h2 class="nav-title">Kenzo's Portfolio</h2>
                <ul class="nav-list">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="Aimbot.html">Aimbot</a></li>
                </ul>
        </div>
    </header>
<main>
    <section>
        <div class="board">
            <div class="field"></div>
            <div class="field"></div>
            <div class="field"></div>
            <div class="field"></div>
            <div class="field"></div>
            <div class="field"></div>
            <div class="field"></div>
            <div class="field"></div>
            <div class="field"></div>
        </div>
    </section>
    <section>
        <p>Points player one:</p> <div class="points-player-one">0</div>
        <p>Points player two:</p> <div class="points-player-two">0</div>
    </section>
    <section class="input-field">
        <div>
            <label for="symbol-player-one">Symbol Player One:</label>
            <input type="text" id="symbol-player-one-field">
            <button class="submit-player-one">Submit</button>
        </div>
    </section>
    <section class="input-field">
        <div>
            <label for="symbol-player-two">Symbol Player Two:</label>
            <input type="text" id="symbol-player-two-field">
            <button class="submit-player-two">Submit</button>
        </div>
        <button class="reset-btn">Reset Points</button>
    </section>
</main>
</body>
<script type="module" src="/portfolio/public/js/TicTacToe/Main.js"></script>
</html>