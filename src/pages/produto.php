<section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Cadastro de Produtos</h1>
                </div>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
               <form id="form-produto">
                    <div class="row">
                        <div class="col col-6">
                            <label for="name">Nome</label>
                            <input type="text" name="name" id="name" class="form-control">
                        </div>
                        <div class="col col-6">
                            <label for="name">Descrição</label>
                            <input type="text" name="description" id="description" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col col-6">
                            <label for="name">Preço</label>
                            <input type="text" name="price" id="price" class="form-control">
                        </div>
                    </div>
                    <button class="btn btn-sucess" type="submit">Salvar com submit</button>
                    <button class="btn btn-outline-success" id="btn-submit" type="button">Salvar como botão</button>
               </form>
            </div>
        </div>