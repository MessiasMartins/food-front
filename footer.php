</main>

    <footer class="text-muted py-5">
        <div class="container">
            <p class="float-end mb-1">
                <a href="#">Back to top</a>
            </p>
            <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
        </div>
    </footer>


    <script src="src/assets/dist/js/bootstrap.bundle.min.js"></script>
    <script src="src/assets/js/jquery-3.6.1.js"></script>
    <script src="src/js/produtos.js"></script>
    <script src="src/js/produto.js"></script>
    <script>
        const tokenStorage = localStorage.getItem('token')
        $('#configToken').val(tokenStorage.token)
        revalidarToken($('#configToken').val())
    </script>


</body>

</html>