<?php
    //$base_url="http://www.dynamikcollective.com/clients/hoyosluque/webapp/";
    $base_url="http://www.proyectodomus.com/sanpatricio";
    //$base_url="http://localhost:8888/clients/hoyosluque/repo-webapp/DomusSanPatricio"; 
    //$base_url="http://localhost/DomusSanPatricio/"; 
?>
<head>
    <title>DOMUS | San Patricio</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $base_url ?>/css/custom.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="<?php echo $base_url ?>/js/jquery.mobile.custom.js"></script>
</head>

<body id="main-content" class="<?php echo $section?>">
    <header id="main-logo">
        <a  class="main-logo" href="<?php echo $base_url ?>/">
            <img src="<?php echo $base_url ?>/assets/logo.svg">
        </a>
        <a href="javascript:void(0)" id="close-nav" class="close-nav" onclick="closeNav()"><img src="<?php echo $base_url ?>/assets/menu-close.png"></a>
        <a href="javascript:void(0)" id="open-nav" class="open-nav" onclick="openNav()"><img src="<?php echo $base_url ?>/assets/menu-open.png"></a>
    </header>
    <nav id="side-bar" class="side-bar" >
        <ul>
            <li>
                <h3><a href="<?php echo $base_url ?>/amenities/index.php">Amenities</a></h3>
                <ul class="sub-menu">
                    <li><a href="<?php echo $base_url ?>/amenities/areas-comunes/index.php">Áreas comúnes</a></li>
                    <li><a href="<?php echo $base_url ?>/amenities/roof-top/index.php">Roof top</a></li>
                </ul>
            </li>
            <li>
                <h3><a href="<?php echo $base_url ?>/apartamentos/index.php">Apartamentos</a></h3>
                <ul class="sub-menu">
                    <li><a href="<?php echo $base_url ?>/apartamentos/tipo-1/index.php">Apartamento tipo 1</a></li>
                    <li><a href="<?php echo $base_url ?>/apartamentos/tipo-2/index.php">Apartamento tipo 2</a></li>
                    <li><a href="<?php echo $base_url ?>/apartamentos/tipo-3/index.php">Apartamento tipo 3</a></li>
                    <li><a href="<?php echo $base_url ?>/apartamentos/tipo-4/index.php">Apartamento tipo 4</a></li>
                    <li><a href="<?php echo $base_url ?>/apartamentos/tipo-5/index.php">Apartamento tipo 5</a></li>
                </ul>
            </li>
        </ul>
    </nav>