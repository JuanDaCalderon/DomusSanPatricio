<script>
  $section = 'apartments-list';
  $sectionTitle= 'DOMUS | San patricio - Tenemos todas las comodidades para ti - Tu nuevo hogar';
</script>
<?php include '../includes-web/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>
<section class="container-fluid top">

    <div class="container">

        <h2><span>DOMUS </span> SAN PATRICIO</h2>
        <h1>ESPACIOS PARA TRABAJAR,<span> <br>CELEBRAR Y COMPARTIR</span></h1>
        <p>un espacio confortable con toda la nueva tecnología y los más altos estándares de amplitud, diseño y estilo para compartir con amigos, familiares y equipos de trabajo, todo en un solo lugar.</p>

    </div>

</section>

<section class="container-fluid bottom dark">
    <div class="container">

        <h3> TIPOS DE <span>AMENITIES </span> </h2>
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
          <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/terrazas/Terrace01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/amenities/roof-top/" class="btn btn-primary"><p>ROOFTOP</p></a>
          </div>
        </div>
      </div>


      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Co-working.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/amenities/co-working/" class="btn btn-primary"><p>SALA DE TRABAJO COMPARTIDO</p></a>
          </div>
        </div>
      </div>

      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Gym.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/amenities/gimnasio/" class="btn btn-primary"><p>GIMNASIO</p></a>
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
          <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/zonas_comunes/Lobby.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/amenities/lobby/" class="btn btn-primary"><p>LOBBY</p></a>
          </div>
        </div>
      </div>

      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top h-100" src="<?php echo $base_url ?>/assets/terrazas/Terrace03.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/amenities/zona-de-juegos/" class="btn btn-primary"><p>ZONA DE JUEGOS</p></a>
          </div>
        </div>
      </div>

<!--       <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/apartamentos/tipo-3/" class="btn btn-primary"><p>Modelo tipo 3</p></a>
          </div>
        </div>
      </div>
    </div> -->

  </div>
  <!--/.Second slide-->
</div>
<!--/.Slides-->


       
    </div></div>

</section>

<?php include '../includes/footer.php' ?>