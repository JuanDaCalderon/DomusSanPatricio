<footer>
        <p class="float-left">
            <a href="#" class="floor-plans-access-button open" data-toggle="modal" data-target="#popUpVisitReg">
                REGISTRA TU VISITA
            </a>
        </p>
        <p class="float-right">
            <span>DOMUS</span> SAN PATRICIO | CALLE 104 # 17 - 32 | Imagenes de referencia. El diseño puede cambiar.
        </p>

        
    </footer>
    <!-- Modal Floor plans -->
  <div class="modal fade" id="popUpVisitReg" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="gallery-access-button closed" data-dismiss="modal" aria-label="Close">
            <i class="bi bi-arrows-angle-contract"></i>
          </button>
        </div>
        <div class="modal-body pt-5 pb-5">
            <div class="row justify-content-center">
                <div class="col-sm-10">
                    <div class="container p-t-1">
                        <h2><span>DOMUS</span> SAN PATRICIO</h2>
                        <h1>Registra <span>tus datos</span></h1>
                        <p class="text-justify">
                          Completa este formulario y déjanos tus datos o escanea el QR code y accede desde tu celular. Te enviaremos mas informacion a tu correo y te contaremos las novedades en proyectos e inmuebles de Hoyos Luque.
                        </p>
                    </div>
                    <form>
                        <div class="container">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="inputName" placeholder="Nombre">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="inputLastName" placeholder="Apellido">
                                    
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Correo electrónico">
                                </div>
                                <div class="form-group col-md-6">
                                  <select id="inputState" class="form-control">
                                    <option selected>Seleccione un proyecto</option>
                                    <option> Domus 104</option>
                                    <option> Domus San Patricio</option>
                                  </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label for="form-check-label">Acepto los <a href="#">términos y condiciones</a> del sitio.</label>
                                </div>
                            </div>
                            <button type="submit" class="btn-type-01">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
    <script src="<?php echo $base_url ?>/js/custom.js"></script>
    
</body>
</html>