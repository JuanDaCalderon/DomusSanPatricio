<script> $section = 'home'; </script>

<?php 
    require_once 'includes/header.php';
?>

<section id="home-carousel">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <!-- Wrapper for slides -->
        <div id="myCarousel" class="carousel-inner">
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/carousel/home/07.jpg" data-color="lightblue" alt="First Image">
                <div class="carousel-caption d-md-block">
                    <h5>
                        <small>Diseño</small>
                        <abbr>armonioso</abbr>
                        <span>Iluminación y ventilación natural</span>
                    </h5>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/carousel/home/05.jpg" data-color="lightblue" alt="First Image">
                <div class="carousel-caption d-md-block">
                    <h5>
                        <small>Amplitud, diseño y estilo</small>
                        <abbr>Una cálida bienvenida</abbr>
                        <span>Juntos en armonía</span>
                    </h5>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/carousel/home/04.jpg" data-color="lightblue" alt="First Image">
                <div class="carousel-caption d-md-block">
                    <h5>
                        <small>Compartir y trabajar</small>
                        <abbr>Espacios de <br>co-working</abbr>
                        <span>Una experiencia única</span>
                    </h5>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/carousel/home/04.jpg" data-color="lightblue" alt="First Image">
                <div class="carousel-caption d-md-block">
                    <h5>
                        <small>Un espacio confortable</small>
                        <abbr>Teatrino</abbr>
                        <span>Para toda la familia</span>
                    </h5>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/carousel/home/05.jpg" data-color="lightblue" alt="First Image">
                <div class="carousel-caption d-md-block">
                    <h5>
                        <small>Conecta</small>
                        <abbr>Mente y cuerpo</abbr>
                        <span>Con todas las comodidades</span>
                    </h5>
                </div>
            </div>
            <!--<div class="carousel-item">
                <img class="d-block w-100" src="assets/carousel/home/08.jpg" data-color="lightblue" alt="First Image">
                <div class="carousel-caption d-md-block">
                    <h5>
                        <small>Y para los más pequeños</small>
                        <abbr>Playground</abbr>
                        <span>Una zona didáctica e interactiva </span>
                    </h5>
                </div>
            </div>-->
        </div>
        <!-- Controls -->
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"><</span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true">></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</section>   

<section class="container-fluid mt-5 pt-5 pb-5" style="display:none;">
    <div class="container">
        <h2><span>DOMUS </span> SAN PATRICIO</h2>
        <h1>UN MODELO PARA CADA<span> <br>ESTILO DE VIDA</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut.</p>
    </div>
</section>

<section class="container-fluid pt-3 pr-3 pl-0 pb-0 bg-grey"  style="display:none;">
    <div class="container-fluid bg-greyLight">
        <div class="row justify-content-start">
            <div class="col-12 col-sm-6 pl-0">
                <img class="img-fluid" src="<?php echo $base_url ?>/assets/galleries/tipo-a/01.jpg" alt="Chania">
            </div>
            <div class="col-12 col-sm-5 pl-5 pt-4">
                <h2 class="text-right"><span>DOMUS</span> APARTAMENTOS</h2>
                <div class="pt-5 mt-5">
                    <h1 class="text-right">APARTAMENTO <span>TIPO A</span></h1>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
</section>


<section class="amenities container-fluid pt-3 pl-3 pr-0 pb-4 bg-grey"  style="display:none;">
    <div class="container-fluid bg-greyLight">
        <div class="row justify-content-end">
            <div class="col-12 col-sm-5 pr-5 pt-4">
                <h2><span>DOMUS</span> AMENITIES</h2>
                <div class="pt-5 mt-5">
                    <h1>CINEMA <span>MODELO A</span></h1>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <div class="col-12 col-sm-6 pr-0">
                <img class="img-fluid" src="<?php echo $base_url ?>/assets/galleries/tipo-a/01.jpg" alt="Chania">
            </div>
        </div>
</section>





<script>
var $item = $('.carousel-item'); 
/* var $itemres = $('.amenities');  */
var $wHeight = $(window).height();
/* if ($wHeight >= 1080) {
    $wHeight = $wHeight - $itemres.height();
    console.log($wHeight);
} */
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

</script>
<?php 
    require_once 'includes/footer.php';
?>