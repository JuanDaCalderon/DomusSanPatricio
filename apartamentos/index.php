<script> $section = 'apartments-list'; </script>
<?php include '../includes-web/header.php'; ?>
<script>
    var $base_url = '<?php echo $base_url;?>';
</script>
<section class="container-fluid top">

    <div class="container">

        <h2><span>DOMUS </span> SAN PATRICIO</h2>
        <h1>UN MODELO PARA CADA <span>ESTILO DE VIDA</span></h1>
        <p>disfrute de la mejor distribución, amplios espacios, excelentes acabados en este lugar soñado para vivir una vida con la comodidad que le brindamos para poder trabajar y compartir en casa, teniendo un espacio para cada momento, todo en un solo lugar.</p>

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


       
    </div></div>

</section>

<?php include '../includes/footer.php' ?>