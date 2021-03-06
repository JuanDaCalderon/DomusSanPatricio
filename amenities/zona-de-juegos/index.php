<script>
  $section = 'amenities-detail'; 
  $sectionTitle= 'DOMUS | San patricio - Rooftop - Disfrútalas';
</script>
<?php include '../../includes-web/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>
<section id="tour" class="container-fluid p-0 tour">
  <!-- <a id="more-info-btn" class="btn-type-01 more-info pull-right" href="#more-info">Más información</a> -->
  <a id="tour-btn" class="btn-type-01 to-tour pull-right" href="#tour">Tour 360º</a>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="../../views-360/zona-de-juegos/index.htm" allowfullscreen></iframe>
  </div>  
</section>

<section id="more-info" class="container pt-4 pt-md-5 pb-3">
  <div class="row align-items-center">
    <div class="col-sm-12 col-md-4 px-2">
      <h2><span>DOMUS</span> SAN PATRICIO</h2>
      <h1><span>ZONA DE JUEGOS</span></h1>
      <p class="h5">Golfito, bowling y un espacio para colocar mats de yoga.</p>
    </div>
    <div class="col-sm-12 col-md-8 px-2">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/terrazas/Terrace03.jpg" alt="Terraza 1">
    </div>
  </div>
</section>



<section id="about-this" class="container px-2 pb-0 pb-md-3">
  <div class="">
    <div class="col-sm-12 inner-block">
    <div class="row">
        <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <h4 class="text-md-center text-xl-left">Acerca<br>de este<br>amenitie</h4>
        </div>
        <div class="col-12 col-lg">
          <p>      
            <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpSur">
              <small>Roof top sur</small><i class="icon-Web-Icons_Golfito d-block pr-0 pr-lg-3"></i>
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
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Co-working.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/amenities/areas-comunes/" class="btn btn-primary"><p>co-working</p></a>
                  </div>
                </div>
              </div>


              <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Conference.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/amenities/areas-comunes/" class="btn btn-primary"><p>salon de conferencias</p></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Lobby.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/amenities/areas-comunes/" class="btn btn-primary"><p>Lobby</p></a>
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
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/terrazas/Terrace03.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/amenities/roof-top/" class="btn btn-primary"><p>Roof top</p></a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/terrazas/Terrace02.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/amenities/roof-top/" class="btn btn-primary"><p>Roof top</p></a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/terrazas/Terrace01.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/amenities/roof-top/" class="btn btn-primary"><p>Roof top</p></a>
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
  <!-- Modal Roof top norte -->
  <div class="modal fade" id="popUpSur" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <h2><i class="icon-Web-Icons_Golfito mr-2"></i><span>ROOF TOP SUR</span></h2>
              <p class="text-justify">
                Si te gusta respirar aire fresco y distraerte tendrás todo en un mismo sitio en esta terraza con golfito, ping pong y espacio de yoga.
              </p>
            </div>
          </div>
          <h5>
            ROOF TOP SUR
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