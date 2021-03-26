<script>
  $section = 'apartment-detail'; 
  $sectionTitle= 'DOMUS | San patricio - Apartamento Tipo 4 - Tu nuevo hogar';
</script>
<?php include '../../includes-web/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>
<section id="tour" class="container-fluid p-0 tour">
  <a id="more-info-btn" class="btn-type-01 more-info pull-right" href="#more-info">Más información</a>
  <a id="tour-btn" class="btn-type-01 to-tour pull-right" href="#tour">Tour 360º</a>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="../../views-360/tipo-4/index.htm" allowfullscreen></iframe>
  </div>  
</section>
<section id="more-info" class="container">
  <div class="row">
    <div class="col-sm-7">
      <h2><span>DOMUS</span> SAN PATRICIO</h2>
      <h1>Apartamento <span>tipo 4</span></h1>
      <p class="text-justify pr-md-5">
        disfrute de la mejor distribución, amplios espacios, excelentes acabados en este lugar soñado para vivir una vida con la comodidad que le brindamos para poder trabajar y compartir en casa, teniendo un espacio para cada momento, todo en un solo lugar.
      </p>
      <ul>
        <li>
          <p>Salón comedor con balcón (amplio).</p>
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
          <p>Estar de alcobas y estudio (home Office).</p>
        </li>
        <li>
          <p>Alcoba principal con vestidor y baño privado.</p>
        </li>
        <li>
          <p>Segunda alcoba con baño privado.</p>
        </li>
        <li>
          <p>Escalera de acceso a la cubierta común de uso exclusivo de 65.70 mts</p>
        </li>
      </ul>
    </div>
    <div class="col-sm-5 gallery-access p-0">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/stills/tipo4/Comply1.jpg" alt="Chania">
      <button type="button" class="gallery-access-button open" data-toggle="modal" data-target="#popUpGallery">
        <i class="bi bi-arrows-angle-expand"></i>
      </button>
    </div>
  </div>
</section>
<section id="about-this" class="container">
  <div class="">
    <div class="col-sm-12 inner-block">
    <div class="row">
    <div class="col-sm-12 col-xl-4 text-sm-justify">
          <h4 class="text-sm-center text-xl-left">Acerca <br>de este <br>apartamento</h4>
        </div>
        <div class="col-12 col-sm-12 col-lg-5 col-xl-3">
          <p>
            <small>Área construida</small>44.68mts<sup>2</sup>
          </p>
        </div>
<!--         <div class="col-12 col-sm-6 col-lg-3 col-xl-2">
          <p>
            <small>Área privada</small>120mts<sup>2</sup>
          </p>
        </div> -->
        <div class="col">
          <p>
            <small>Precio</small>$X00'000.000<sup>cop</sup>
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
                    <img class="d-block w-100" src="<?php echo $base_url ?>/assets/stills/tipo4/Comply1.jpg" data-color="lightblue" alt="First Image">
                    <div class="carousel-caption d-md-block">
                        <h5>
                            Iluminación y ventilación natural
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
          <img class="img-fluid" src="<?php echo $base_url ?>/assets/plantas/DeptoTipo4.jpg">
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