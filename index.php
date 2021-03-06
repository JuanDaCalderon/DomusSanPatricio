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
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/carousel/home/08.jpg" data-color="lightblue" alt="First Image">
                <div class="carousel-caption d-md-block">
                    <h5>
                        <small>Y para los más pequeños</small>
                        <abbr>Playground</abbr>
                        <span>Una zona didáctica e interactiva </span>
                    </h5>
                </div>
            </div>
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


<script>

var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
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