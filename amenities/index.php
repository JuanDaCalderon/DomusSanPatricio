<script> $section = 'apartments-list'; </script>
<?php include '../includes/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>
<section class="container-fluid top">

    <div class="container">

        <h2><span>DOMUS </span> SAN PATRICIO</h2>
        <h1>ESPACIOS PARA TRABAJAR,<span> <br>CELEBRAR Y COMPARTIR</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut.</p>

    </div>

</section>

<section class="container-fluid bottom dark">
    <div class="container">

        <h3> TIPOS DE <span>APARTAMENTOS </span> </h2>
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
            <a href="<?php echo $base_url ?>/amenities/areas-comunes/" class="btn btn-primary"><p>ROOFTOP</p></a>
          </div>
        </div>
      </div>


      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/amenities/areas-comunes/" class="btn btn-primary"><p>SALA DE TRABAJO COMPARTIDO</p></a>
          </div>
        </div>
      </div>

      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/amenities/areas-comunes/" class="btn btn-primary"><p>SALON COMUNAL</p></a>
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
            <a href="<?php echo $base_url ?>/amenities/areas-comunes/" class="btn btn-primary"><p>LOBBY</p></a>
          </div>
        </div>
      </div>
<!--
      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/apartamentos/tipo-2/" class="btn btn-primary"><p>Modelo tipo 2</p></a>
          </div>
        </div>
      </div>

      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/apartamentos/tipo-3/" class="btn btn-primary"><p>Modelo tipo 3</p></a>
          </div>
        </div>
      </div>
    </div>
-->
  </div>
  <!--/.Second slide-->

  <!--Third slide-->
  <!--<div class="carousel-item">

    <div class="row">
      <div class="col-md-4">
      <div class="card mb-2">
          <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/apartamentos/tipo-1/" class="btn btn-primary"><p>Modelo tipo 1</p></a>
          </div>
        </div>
      </div>

      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/apartamentos/tipo-2/" class="btn btn-primary"><p>Modelo tipo 2</p></a>
          </div>
        </div>
      </div>

      <div class="col-md-4 clearfix d-none d-md-block">
      <div class="card mb-2">
          <img class="card-img-top" src="<?php echo $base_url ?>/assets/amenities/rooftop/thumb-01.jpg" alt="Card image cap">
          <div class="card-body">
            <a href="<?php echo $base_url ?>/apartamentos/tipo-3/" class="btn btn-primary"><p>Modelo tipo 3</p></a>
          </div>
        </div>
      </div>
    </div>

  </div>-->
  <!--/.Third slide-->

</div>
<!--/.Slides-->


       
    </div></div>

</section>

<?php include '../includes/footer.php' ?>