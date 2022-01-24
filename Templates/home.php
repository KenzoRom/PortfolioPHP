<?php
require('../Modules/Projecten.php');
require('../Classes/Project.php');
require('../Modules/Database.php');
include_once('defaults/head.php');
$projects = getProjects();
include_once('defaults/header.php');
?>
<body class="wrapper">
<section class="main">
    <div class="jumbotron-text">
        <div class="name">
            <h2 class="first-name">Kenzo</h2>
                <h2>Tahar</h2>
                    <div class="hor-line">
                    &nbsp
                    </div>
        </div>
        <div class="about-me">
            <h3 class="about-header">About Me</h3>
                <p class="bio">My name is Kenzo Romeo Tahar. I'm 18 years old, and i'm following a software development course at ROC Mondriaan Tinwerf. 
                    I'm of indonesian descent and i live in Mariahoeve in The Hague. Before software development i followed school at Veurs Lyceum middleschool. 
                    I plan to finish my course and keep studying for an HBO degree. I love playing games as most software developers would. 
                    I also love producing music. My favorite games are: osu! and Valorant. I later want to do game development.
                </p>
        </div>
    </div>
    <div class="selfie-img">
        <img src="/portfolio/public/img/Selfie.jpg" alt="Selfie" class="selfie">
    </div>
</section>
<section class="school">
    <div class="jumbotron-text">
        <div class="name">
            <h2 class="school-title">School</h2>
                    <div class="hor-line">
                    &nbsp
                    </div>
        </div>
        <div class="about-me">
            <h3 class="career-bio">My School career:</h3>
                <ul>
                    <li>Waalse Louise De Coligny School</li>
                    <li>Veurs Lyceum</li>
                    <li>ROC Mondriaan Tinwerf</li>
                </ul>
        </div>
    </div>
    <div class="school-photo">
        <img src="/portfolio/public/img/School.jpg" alt="Selfie" class="roc-img">
    </div>
</section>

<section class="skills" id="project">
    <div class="skill-title">
        <h2>Skills</h2>
            <div class="vert-line">
                &nbsp
                </div>
                    <h2>C#</h2>
                        <div class="vert-line">
                            &nbsp
                        </div>
                            <h2>Javascript</h2>
                                <div class="vert-line">
                                    &nbsp
                                </div>
                                <h2>HTML/CSS</h2>
    </div>
</section>
<section class="finished-projects">
    <div class="skill-title">
        <h2>Finished Projects</h2>
</section>
<!-- Automatic generated projects-->
<section class="finished-projects">
    <div class="skill-title">
        <div class='vert-line'>
                        &nbsp
                    </div>
        <?php
            foreach ($projects as &$data) {
                echo "
                <a href='". $data->portfoliolink ."'<h2 class='tic-link'>". $data->title ."</h2></a>
                <div class='vert-line'>
                    &nbsp
                </div>
                "
            ;}
        ?>
</section>

<section class="contact" id="contact">
    <h2 class="contact-title">Contact</h2>
</section>
<section class="icons">
    <a href="https://www.instagram.com/kenzo_rom/"><img src="/portfolio/public/img/Ig.png" alt="ig" class="icon"></a>
        <img src="/portfolio/public/img/email.png" alt="email" class="icon"> 
</section>
<section class="email">
    <p>302808825@student.rocmondriaan.nl</p>
</section>
</body>