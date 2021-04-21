<script>
  $section= 'apartment-detail'; 
  $sectionTitle= 'DOMUS | San patricio - Apartamento Tipo 1 - Tu nuevo hogar'; 
</script>
<?php include '../../includes-web/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>
<section id="tour" class="container-fluid p-0 tour">
  <a id="more-info-btn" class="btn-type-01 more-info pull-right" href="#more-info">Más información</a>
  <a id="tour-btn" class="btn-type-01 to-tour pull-right" href="#tour">Tour 360º</a>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="../../views-360/tipo-1/index.htm" allowfullscreen></iframe>
  </div>  
</section>

<section id="more-info" class="container">
  <div class="row align-items-center">
    <div class="col-sm-5">
      <h2><span>DOMUS</span> SAN PATRICIO</h2>
      <h1>Apartamento <span>tipo 1</span></h1>
    </div>
    <div class="col-sm-7">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo1/Comply1.jpg" alt="Chania">
    </div>
    <div class="col-12 py-3">
      <h3 class="textfirstimage font-weight-bold pb-3">el sueño de tener una propiedad de lujo estará a tu alcance.</h3>
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo1/Comply1.jpg" alt="Lobby">
      
    </div>
    <div class="col-12 col-md-6 py-3">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo1/Tv1.jpg" alt="Lobby">
      
    </div>
    
    <div class="col-12 col-md-6 py-3">

      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo1/Tv2.jpg" alt="Sala de juntas">
      
    </div>
    <div class="col-12">
        <h4 class="font-weight-bold py-1 h5 text-center">disfruta de su mueble multifuncional en un espacio ideado para ti</h4>
      </div>
    
    <div class="col-12 py-3">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo1/Comply2.jpg" alt="Sala de juntas">
      <h3 class="textsecondimage font-weight-bold pb-3">disfrutar de una unidad tipo uno es tenerlo todo, diseño, comodidad e innovación</h3>
    </div>
  </div>
</section>

<section id="about-this" class="container">
  <div class="">
    <div class="col-sm-12 inner-block">

      <div class="row">
        <div class="col-12 col-xl-4 d-flex justify-content-center align-items-center">
          <h4 class="text-sm-center text-xl-left">Acerca <br>de este <br>apartamento</h4>
        </div>
        <div class="col-12 col-xl">
          <p class="text-center">
            <small>Área construida</small>44.68mts<sup>2</sup>
          </p>
        </div>
        <div class="col-12 col-xl">
          <p class="text-center">
            <small>Precio</small>$479'166.000<sup>cop</sup>
          </p>
        </div>
      </div>


      <div class="row">
        <div class="col-12 col-xl">
          <p>      
            <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpFloorPlans">
              <small>Planos</small><i class="bi bi-columns d-block pr-0 pr-lg-5"></i>
            </a>
            </p>
        </div>
        <div class="col-12 col-xl">
          <p>      
            <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpInfo">
              <small>Detalles del apartamento</small><i class="icon-Web-Icons_Detalles-Apartamento d-block pr-0 pr-lg-3"></i>
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
      <h2><span>DOMUS</span> APARTAMENTOS</h2>
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
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/stills/tipo1/Comply1.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-1/" class="btn btn-primary"><p>Modelo tipo 1</p></a>
                  </div>
                </div>
              </div>


              <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/stills/tipo2/Comply1.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-2/" class="btn btn-primary"><p>Modelo tipo 2</p></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/stills/tipo3/Comply1.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-3/" class="btn btn-primary"><p>Modelo tipo 3</p></a>
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
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/stills/tipo4/Comply1.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-4/" class="btn btn-primary"><p>Modelo tipo 4</p></a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/stills/tipo5/Comply1.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/apartamentos/tipo-5/" class="btn btn-primary"><p>Modelo tipo 5</p></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!--/.Second slide-->
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
                    <img class="d-block w-100" src="<?php echo $base_url ?>/assets/stills/tipo1/Comply1.jpg" data-color="lightblue" alt="First Image">
                    <div class="carousel-caption d-md-block">
                        <h5>
                            Iluminación y ventilación natural
                        </h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="<?php echo $base_url ?>/assets/stills/tipo1/Comply2.jpg" data-color="lightblue" alt="First Image">
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
          <img class="img-fluid" src="<?php echo $base_url ?>/assets/plantas/DeptoTipo1.jpg">
          <h5>
            Iluminación y ventilación natural
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <!-- Modal Playground -->
  <div class="modal fade" id="popUpInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered justify-content-center" role="document">
      <div class="modal-content w-75">
        <div class="modal-header">
          <button type="button" class="gallery-access-button closed" data-dismiss="modal" aria-label="Close">
            <i class="bi bi-arrows-angle-contract"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- <img class="img-fluid" src="<?php echo $base_url ?>/assets/galleries/tipo-a/floorplan.jpg"> -->
          <div class="row px-5 py-4">
            <div class="col">
              <h2><i class="icon-Web-Icons_Detalles-Apartamento mr-2"></i><span>Apartamento Tipo 1</span></h2>
              
              <ul class="text-left">
                <li>
                  <p>1 alcoba con Vestier y baño privado</p>
                </li>
                <li>
                  <p>Área de homework</p>
                </li>
                <li>
                  <p>División mueble en madera con sistema giratorio de tv para doble uso (alcoba y zona social)</p>
                </li>
                <li>
                  <p>Sala con balcón</p>
                </li>
                <li>
                  <p>Cocina abierta con mesón para dos puestos, espacio para nevera y lavadora</p>
                </li>
              </ul>
              
            </div>
          </div>
          <h5>
            Características
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