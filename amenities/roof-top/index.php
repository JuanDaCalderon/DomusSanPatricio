<script> $section = 'apartment-detail'; </script>
<?php include '../../includes/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>
<section id="tour" class="container-fluid p-0 tour">
  <a id="more-info-btn" class="btn-type-01 more-info pull-right" href="#more-info">Más información</a>
  <a id="tour-btn" class="btn-type-01 to-tour pull-right" href="#tour">Tour 360º</a>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="../../views-360/roof-top/index.htm" allowfullscreen></iframe>
  </div>  
</section>
<section id="more-info" class="container">
  <div class="row">
    <div class="col-sm-7">
      <h2><span>DOMUS</span> SAN PATRICIO</h2>
      <h1>Amenities <span>Roof top</span></h1>
      <h2><span>Roof top Norte</span></h2>
      <p class="text-justify pr-md-5">
        Espacio para disfrutar de una vista 360° sobre la ciudad, para compartir los mejores momentos alrededor de un completo bbq, teppanyaki y un área tipo lounge.
      </p>
      <h2><span>Roof top Sur</span></h2>
      <p class="text-justify pr-md-5">
        Si te gusta respirar aire fresco y distraerte tendrás todo en un mismo sitio en esta terraza con golfito, ping pong y espacio de yoga
      </p>
    </div>
    <div class="col-sm-5 gallery-access p-0">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/galleries/tipo-a/01.jpg" alt="Chania">
      <button type="button" class="gallery-access-button open" data-toggle="modal" data-target="#popUpGallery">
        <i class="bi bi-arrows-angle-expand"></i>
      </button>
    </div>
  </div>
</section>
<section id="about-this" class="container">
  <div class="">
    <div class="col-sm-12 inner-block pb-0 pt-5">
    <div class="row">
        <div class="col-sm-12 col-xl-3 text-sm-justify">
          <h4 class="text-sm-center text-xl-left">Acerca <br>de este <br>amenitie</h4>
        </div>
        <div class="col-12 col-lg-7">
          <p class="text-justify">
            <small>Comodidades incluidas</small>
            <span class="h6 font-weight-light">BBQ, sonido para conectar equipos, luces integrada, chimeneas para el área lounge, sillones cómodos, golfito, ping pong, espacio para colocar mats de yoga.</span>
          </p>
        </div>
        <div class="col">
          <p>      
            <a href="#" class="floor-plans-access-button open" data-toggle="modal" data-target="#popUpFloorPlans">
              <small>Planos</small><i class="bi bi-columns"></i>
            </a>
            </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="amenities" class="container bottom">
  <div class="row">
    <div class="col-sm-12">
      <h2><span>DOMUS</span> AMENITIES</h2>
      <!-- CAROUSEL -->

      <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
      <!--Controls-->
        <div class="controls-top">
          <a class="btn-floating prev" href="#multi-item-example" data-slide="prev"><</a>
          <a class="btn-floating next" href="#multi-item-example" data-slide="next">></a>
        </div>
      <!--/.Controls-->
      <!--Slides-->
        <div class="carousel-inner" role="listbox">
          <!--First slide-->
          <div class="carousel-item active">

            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-a/" class="btn btn-primary"><p>Modelo tipo A</p></a>
                  </div>
                </div>
              </div>


              <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-a/" class="btn btn-primary"><p>Modelo tipo A</p></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-a/" class="btn btn-primary"><p>Modelo tipo A</p></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!--/.First slide-->
          <!--Second slide-->
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-a/" class="btn btn-primary"><p>Modelo tipo A</p></a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-a/" class="btn btn-primary"><p>Modelo tipo A</p></a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-a/" class="btn btn-primary"><p>Modelo tipo A</p></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!--/.Second slide-->

          <!--Third slide-->
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-1/" class="btn btn-primary"><p>Apartamento tipo 1</p></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-2/" class="btn btn-primary"><p>Apartamento tipo 2</p></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-3/" class="btn btn-primary"><p>Apartamento tipo 3</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/.Third slide-->
        </div>
        <!--/.Slides-->
      </div>
    </div>
  </div>
</section>
<section>

  <!-- Modal Gallery -->
  <div class="modal fade" id="popUpGallery" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="gallery-access-button closed" data-dismiss="modal" aria-label="Close">
            <i class="bi bi-arrows-angle-contract"></i>
          </button>
        </div>
        <div class="modal-body">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div id="gallery" class="carousel-inner">
                <div class="carousel-item">
                    <img class="d-block w-100" src="<?php echo $base_url ?>/assets/carousel/home/07.jpg" data-color="lightblue" alt="First Image">
                    <div class="carousel-caption d-md-block">
                        <h5>
                            Iluminación y ventilación natural
                        </h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="<?php echo $base_url ?>/assets/carousel/home/05.jpg" data-color="lightblue" alt="First Image">
                    <div class="carousel-caption d-md-block">
                        <h5>
                            Juntos en armonía
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
        </div>
      </div>
    </div>
  </div>
</section>

<section>

  <!-- Modal Floor plans -->
  <div class="modal fade" id="popUpFloorPlans" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="gallery-access-button closed" data-dismiss="modal" aria-label="Close">
            <i class="bi bi-arrows-angle-contract"></i>
          </button>
        </div>
        <div class="modal-body">
          <img class="img-fluid" src="<?php echo $base_url ?>/assets/galleries/tipo-a/floorplan.jpg">
          <h5>
            Iluminación y ventilación natural
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  var $item = $('#gallery .carousel-item');
  var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
</script>

<?php include '../../includes/footer.php' ?>