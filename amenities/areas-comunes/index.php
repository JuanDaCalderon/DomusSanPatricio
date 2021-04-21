<script>
  $section = 'amenities-detail'; 
  $sectionTitle= 'DOMUS | San patricio - Áreas comúnes - Disfrútalas';
</script>
<?php include '../../includes-web/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>
<section id="tour" class="container-fluid p-0 tour">
  <a id="more-info-btn" class="btn-type-01 more-info pull-right" href="#more-info">Más información</a>
  <a id="tour-btn" class="btn-type-01 to-tour pull-right" href="#tour">Tour 360º</a>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="../../views-360/areas-comunes/index.htm" allowfullscreen></iframe>
  </div>  
</section>
<section id="more-info" class="container">
  <div class="row">
    <div class="col-sm-7">
      <h2><span>DOMUS</span> SAN PATRICIO</h2>
      <h1>Amenities <span>Áreas comúnes</span></h1>
      <h2><span>Lobby</span></h2>
      <p class="text-justify pr-md-5">
        Amplitud, diseño y estilo, elementos que se juntan en armonía para lograr este espacio cálido de bienvenida.
      </p>
      <h2><span>Coworking</span></h2>
      <p class="text-justify pr-md-5">
        Como complemento, cuenta con una amplia zona de coworking que potencializa el concepto de trabajo en casa, Contará con un amplio salón con áreas amobladas para compartir y trabajar, un salón de juntas y terraza al aire libre, dejando a su disposición dispensadores, un coffe station y cómodos espacios para hacer de tus negocios y reuniones una experiencia única.
      </p>
      <h2><span>Teatrino</span></h2>
      <p class="text-justify pr-md-5">
        un espacio confortable con toda la nueva tecnología, para compartir con amigos y familiares. 
      </p>
      <h2><span>Gimnasio</span></h2>
      <p class="text-justify pr-md-5">
        donde se conectan mente y cuerpo formando un equilibrio.
      </p>
      <h2><span>Playground</span></h2>
      <p class="text-justify pr-md-5">
        y si tienes hijos o sobrinos también puedes disfrutar de nuestra zona de multijuegos con pista infantil didáctica e interactiva
      </p>
    </div>
    <div class="col-sm-5 gallery-access p-0">
      <img class="img-fluid" src="<?php echo $base_url ?>/assets/zonas_comunes/Co-working.jpg" alt="Chania">
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
          <div class="col-12 col-lg-3 d-flex justify-content-center align-items-center">
            <h4 class="text-md-center text-xl-left">Acerca<br>de este<br>amenitie</h4>
          </div>
          <!-- <div class="col-12 col-md-9">
            <p class="text-justify">
              <small>Comodidades incluidas</small>
              <span class="h6 font-weight-light">wifi completo para coworking, salon de juntas amoblado, salon de coworking con espacios individuales, terraza al aire libre junto a la sala, dispensadores de bebidas y groceries, coffe station. <br><br>
              maquinas multifuncionales, caminadora, bancas, mancuernas, espacio para trx, balon medicinal, step, espacio para yoga, bicicleta. <br><br>
              multijuegos para infantes, pista didactica e interactiva para niños menores de 5 años.
              </span>
            </p>
          </div> -->
          <div class="col-12 col-lg">
            <p>      
              <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpLobby">
                <small>Lobby</small><i class="icon-Web-Icons_Lobby d-block pr-0 pr-lg-3"></i>
              </a>
              </p>
          </div>
          <div class="col-12 col-lg">
            <p>      
              <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpCoworking">
                <small>Co-working</small><i class="icon-Web-Icons_Coworking d-block pr-0 pr-lg-3"></i>
              </a>
              </p>
          </div>
          <div class="col-12 col-lg">
            <p>      
              <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpTeatrino">
                <small>Teatrino</small><i class="icon-Web-Icons_Teatrino d-block pr-0 pr-lg-3"></i>
              </a>
              </p>
          </div>
          <div class="col-12 col-lg">
            <p>      
              <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpGym">
                <small>Gimnasio</small><i class="icon-Web-Icons_Gym d-block pr-0 pr-lg-3"></i>
              </a>
              </p>
          </div>
          <div class="col-12 col-lg">
            <p>      
              <a href="#" class="floor-plans-access-button open text-center" data-toggle="modal" data-target="#popUpPlayground">
                <small>Playground</small><i class="icon-Web-Icons_Bowling d-block pr-0 pr-lg-3"></i>
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
                  <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Co-working.jpg" alt="Card image cap">
                  <div class="card-body">
                    <a href="<?php echo $base_url ?>/amenities/areas-comunes/" class="btn btn-primary"><p>coworking</p></a>
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
                    <img class="d-block w-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Co-working.jpg" data-color="lightblue" alt="First Image">
                    <div class="carousel-caption d-md-block">
                        <h5>
                            Iluminación y ventilación natural
                        </h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Conference.jpg" data-color="lightblue" alt="First Image">
                    <div class="carousel-caption d-md-block">
                        <h5>
                            Juntos en armonía
                        </h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Lobby.jpg" data-color="lightblue" alt="First Image">
                    <div class="carousel-caption d-md-block">
                        <h5>
                            Distribución perfecta
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
  <!-- Modal Lobby -->
  <div class="modal fade" id="popUpLobby" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <h2><span>Lobby</span></h2>
              <p class="text-justify">
                Amplitud, diseño y estilo, elementos que se juntan en armonía para lograr este espacio cálido de bienvenida.
              </p>
            </div>
          </div>
          <h5>
            LOBBY
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <!-- Modal Coworking -->
  <div class="modal fade" id="popUpCoworking" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <h2><span>Coworking</span></h2>
              <p class="text-justify">
                Contamos con una amplia zona de coworking que potencializa el concepto de trabajo en casa, Contará con un amplio salón con áreas amobladas para compartir y trabajar, un salón de juntas y terraza al aire libre, dejando a su disposición dispensadores, un coffee station y cómodos espacios para hacer de tus negocios y reuniones una experiencia única.
              </p>
            </div>
          </div>
          <h5>
            COWORKING
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <!-- Modal Teatrino -->
  <div class="modal fade" id="popUpTeatrino" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <h2><i class="icon-Web-Icons_Teatrino mr-2"></i><span>Teatrino</span></h2>
              <p class="text-justify">
                Un espacio confortable con toda la nueva tecnología, para compartir con amigos y familiares. 
              </p>
            </div>
          </div>
          <h5>
            TEATRINO
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <!-- Modal Gym -->
  <div class="modal fade" id="popUpGym" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <h2><i class="icon-Web-Icons_Gym mr-2"></i><span>Gimnasio</span></h2>
              <p class="text-justify">
                Espectacular espacio con maquinas multifuncionales, caminadoras, bancas, mancuernas, espacio para TRX, balon medicinal, step, espacio para yoga, bicicleta.
              </p>
            </div>
          </div>
          <h5>
            GIMNASIO
          </h5>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <!-- Modal Playground -->
  <div class="modal fade" id="popUpPlayground" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <h2><i class="icon-Web-Icons_Bowling mr-2"></i><span>Playground</span></h2>
              <p class="text-justify">
                Si tienes hijos o sobrinos también puedes disfrutar de nuestra zona de multijuegos con pista infantil didáctica e interactiva.
              </p>
            </div>
          </div>
          <h5>
            PLAYGROUND
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