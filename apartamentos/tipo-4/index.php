<script>
  $section = 'apartment-detail'; 
  $sectionTitle= 'DOMUS | San patricio - Apartamento Tipo 4 - Tu nuevo hogar';
</script>
<?php include '../../includes-web/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>

<section id="tour" class="container-fluid p-0 tour">
  <!-- <a id="more-info-btn" class="btn-type-01 more-info pull-right" href="#more-info">Más información</a> -->
  <a id="tour-btn" class="btn-type-01 to-tour pull-right" href="#tour">Tour 360º</a>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="../../views-360/tipo-4/index.htm" allowfullscreen></iframe>
  </div>  
</section>

<section id="more-info" class="container pt-4 pt-md-5 pb-3">
  <div class="row align-items-center">
    <div class="col-sm-12 col-md-5 py-2 px-2">
      <h2><span>DOMUS</span> SAN PATRICIO</h2>
      <h1>Apartamento <span>tipo 4</span></h1>
      <p class="h5">
        2 apartamentos de dos alcobas de 109.37 mts<sup>2</sup> con terraza comunal de uso exclusivo de 40 mts<sup>2</sup> ubicados uno en cada torre del quinto piso.
      </p>
    </div>
    <div class="col-sm-12 col-md-7 py-2 px-2">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo4/Comply1.jpg" alt="Chania">
      <h3 class="textsecondimage font-weight-bold py-2">Amplios espacios y excelentes acabados en este lugar soñado</h3>
    </div>
    <div class="col-md-6 py-2 px-2">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo4/Comply2.jpg" alt="Sala de juntas">
    </div>
    <div class="col-md-6 py-2 px-2">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo4/Comply3.jpg" alt="coworking">
    </div>
  </div>
</section>


<section id="about-this" class="container px-2 pb-0 pb-md-3">
  <div class="">
    <div class="col-sm-12 inner-block">
    <div class="row">
        <div class="col-12 col-xl-4 d-flex justify-content-center align-items-center">
          <h4 class="text-center text-sm-center text-xl-left">Acerca <br>de este <br>apartamento</h4>
        </div>
        <div class="col-12 col-xl-8">
          <p class="text-center">
          <small>Precio</small> <small class="d-inline">Desde </small>$1'262.648.000<sup>cop</sup> <br> <small class="d-inline">Hasta </small> $1'294'433.000<sup>cop</sup>
          </p>
        </div>
        <div class="col-12 col-xl-4">
          <p class="text-center">
            <small>Área construida</small>109,37mts<sup>2</sup>
          </p>
        </div>
        <div class="col-12 col-xl-4">
          <p>      
            <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpFloorPlans">
              <small>Planos</small><i class="bi bi-columns d-block pr-0 pr-lg-5"></i>
            </a>
          </p>
        </div>
        <div class="col-12 col-xl-4">
            <p>      
              <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpInfo">
                <small>Detalles</small><i class="icon-Web-Icons_Detalles-Apartamento d-block pr-0 pr-lg-3"></i>
              </a>
            </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="amenities" class="container px-2 bottom">
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
          <img class="img-fluid" src="<?php echo $base_url ?>/assets/plantas/DeptoTipo4.jpg">
          <h5>
            Iluminación y ventilación natural
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <!-- Modal Info -->
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
              <h2><i class="icon-Web-Icons_Detalles-Apartamento mr-2"></i><span>Apartamento Tipo 4</span></h2>
              <ul class="text-left">
                <li>
                  <p>Salón comedor con balcón amplio.</p>
                </li>
                <li>
                  <p>Chimenea.</p>
                </li>
                <li>
                  <p>Mueble auxiliar con bar y perchero.</p>
                </li>
                <li>
                  <p>Baño social.</p>
                </li>
                <li>
                  <p>Cocina abierta.</p>
                </li>
                <li>
                  <p>Zona de lavandería.</p>
                </li>
                <li>
                  <p>Estar de alcobas y estudio home Office.</p>
                </li>
                <li>
                  <p>Alcoba principal con vestidor y baño privado.</p>
                </li>
                <li>
                  <p>Segunda alcoba con baño y closet privado.</p>
                </li>
                <li>
                  <p>Escalera de acceso a la cubierta común de uso exclusivo de 65.70 mts<sup>2</sup></p>
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