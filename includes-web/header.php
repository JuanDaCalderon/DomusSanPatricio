<?php
    //$base_url="http://www.dynamikcollective.com/clients/hoyosluque/webapp/";
    $base_url="https://www.proyectodomus.com";
    //$base_url="http://localhost:8888/clients/hoyosluque/repo-webapp/DomusSanPatricio"; 
    //$base_url="http://localhost/DomusSanPatricio"; 
    $url= $_SERVER["REQUEST_URI"];
    $path = explode('/', $url);
    $path = array_filter($path);
    $path = end($path);
?>
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K5LBF9S');</script>
    <!-- End Google Tag Manager -->

    <title>DOMUS | San Patricio </title>
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
    <link  rel="icon"   href="<?php echo $base_url?>/assets/favicon.jpg" type="image/png" />
</head>

<body id="main-content" class="new-nav-bar">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5LBF9S"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <header class="<?php (($path === "DomusSanPatricio") or ($path === "apartamentos") or ($path === "amenities")) ? print('fillheader') : ''; ?>">
        <div class="row no-gutters">
            <nav class="navbar navbar-expand-md w-100 p-0">
                <!-- Brand -->
                <a class="navbar-brand mt-1 mb-1" href="<?php echo $base_url ?>">
                    <img class="w-md-50 w-lg-75" src="<?php echo $base_url ?>/assets/logo.svg">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon">
                        <img src="<?php echo $base_url ?>/assets/menu-open.png">
                    </span>
                </button>
                <!-- Links -->
                <div class="collapse navbar-collapse pl-3 pb-2 pt-0 pt-md-2" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="<?php echo $base_url ?>/apartamentos/index.php" id="navbardrop" data-toggle="dropdown">
                                Apartamentos
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="<?php echo $base_url ?>/apartamentos/">Todos los apartamentos</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/apartamentos/tipo-1/">Apartamento tipo 1</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/apartamentos/tipo-2/">Apartamento tipo 2</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/apartamentos/tipo-3/">Apartamento tipo 3</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/apartamentos/tipo-4/">Apartamento tipo 4</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/apartamentos/tipo-5/">Apartamento tipo 5</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="<?php echo $base_url ?>/amenities/index.php" id="navbardrop" data-toggle="dropdown">
                                Amenities
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="<?php echo $base_url ?>/amenities/">Todos los amenities</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/amenities/lobby/">Lobby</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/amenities/co-working/">Co-working</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/amenities/gimnasio/">Gimnasio</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/amenities/ping-pong/">Ping Pong</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/amenities/teatrino/">Teatrino</a>
                                <a class="dropdown-item" href="<?php echo $base_url ?>/amenities/roof-top/">Roof top</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>   
        </div>
    </header>