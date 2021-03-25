<?php
    //$base_url="http://www.dynamikcollective.com/clients/hoyosluque/webapp/";
    //$base_url="http://www.proyectodomus.com/sanpatricio";
    $base_url="http://localhost:8888/clients/hoyosluque/repo-webapp/DomusSanPatricio"; 
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
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
</head>

<body id="main-content" class="<?php echo $section?>">
    <header class="">
        <div class="row no-gutters">
            <nav class="navbar navbar-expand-md w-100 p-0 pr-3">
                <!-- Brand -->
                <a class="navbar-brand" href="<?php echo $base_url ?>">
                    <img src="<?php echo $base_url ?>/assets/logo.svg">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon">
                        <img src="assets/menu-open.png">
                    </span>
                </button>
                <!-- Links -->
                <div class="collapse navbar-collapse pl-3 pb-2 pt-0" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Apartamentos
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Link 1</a>
                                <a class="dropdown-item" href="#">Link 2</a>
                                <a class="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Amenities
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Link 1</a>
                                <a class="dropdown-item" href="#">Link 2</a>
                                <a class="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>   
        </div>
    </header>