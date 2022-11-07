<?php

require_once __DIR__ . '/vendor/autoload.php';

include('config.php');

include('top.php');

$pagina = filter_input(INPUT_GET, 'pag');

//index.php?pag-produtos

if($pagina != '') {
    if (is_file('src/pages/'.$pagina . '.php'))
        include "src/pages/".$pagina . '.php';
    else {
        echo '<div class="middle-box text-center loginscreen animated fadeInDown">
        <div>

                <p class="huge-title">404</p>
                <h3 class="sub-title">
                Página não encontrada
                </h3>
        
        </div>
        </div>';       
    }
} else {
    include "src/pages/home.php";
}

include('footer.php');