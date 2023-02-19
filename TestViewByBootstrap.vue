<template>
  <html lang="zh-Hant-TW">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booky - 首頁</title>
    <link rel="shortcut icon" href="./images/storytelling.ico">

    <meta content="引領你探索蘊含於書的世界－－" name="description">
    <meta content="書,閱讀,咖啡" name="keywords">

    <meta property="og:title" content="Booky">
    <meta property="og:description" content="引領你探索蘊含於書的世界－－">
    <meta property="og:image"
      content="https://images.unsplash.com/photo-1600743648797-c39e61e48f6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80">

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=DM+Serif+Display&family=Noto+Sans+TC:wght@300;400;700&family=Pacifico&display=swap"
      rel="stylesheet">
    <!-- main -->
    <link rel="stylesheet" href="./css/all.css">
  </head>

  <body>
    <header class="header">
      <!-- 導覽列 -->
      <nav class="navbar navbar-expand-md navbar-dark bg-transparent fixed-top navbar-fixed-top">
        <div class="container">
          <button class="navbar-toggler order-1 navbar-fixed-top" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <h1 class="order-2">
            <a class="navbar-brand font-logo d-md-none navbar-logo" href="./index.html">Booky</a>
          </h1>

          <div class="collapse navbar-collapse order-4" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="準備中！">
                  <a class="nav-link disabled" href="#">關於我們</a>
                </span>
              </li>
              <li class="nav-item">
                <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="準備中！">
                  <a class="nav-link disabled" href="#">好讀計畫</a>
                </span>
              </li>
            </ul>
            <a class="navbar-brand font-logo d-none d-md-flex mx-md-auto navbar-logo" href="./index.html">Booky</a>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link nav-light-link" href="./porduct.html">買些好書</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-light-link" href="./logIn.html">登入書庫</a>
              </li>
            </ul>
          </div>
          <div class="dropdown order-3 order-md-4">
            <a class="nav-link nav-cart" href="#" data-toggle="dropdown">
              <h3><i class="fas fa-shopping-cart"></i></h3>
              <small class="nav-cart-number">2</small>
            </a>
            <div class="dropdown-menu px-4">
              <div class="d-flex align-items-center border-bottom py-2">
                <a href="#" class="h5 text-muted pr-4" data-toggle="modal" data-target="#removeModal"
                  data-title="100篇改變思維的文章">
                  <i class="far fa-trash-alt"></i>
                </a>
                <div>
                  <img class="img-fluid" src="./images/product-book-01.png" alt="book">
                </div>
                <div class="ml-2">
                  <h6 class="text-primary font-weight-bold">100篇改變思維的文章</h6>
                  <p class="mb-0 text-muted">$ 290 <small>× 1</small></p>
                </div>
              </div>
              <div class="d-flex align-items-center py-2 border-bottom">
                <a href="#" class="h5 text-muted pr-4" data-toggle="modal" data-target="#removeModal"
                  data-title="夢遊先生 - 鼠尾草">
                  <i class="far fa-trash-alt"></i>
                </a>
                <div>
                  <img class="img-fluid" src="./images/product-essentialOil-01.png" alt="oil">
                </div>
                <div class="ml-2">
                  <h6 class="text-primary font-weight-bold">夢遊先生 - 鼠尾草</h6>
                  <p class="mb-0 text-muted">$ 290 <small>× 1</small></p>
                </div>
              </div>
              <div class="d-flex align-items-center py-4">
                <p class="mb-0 text-secondary">總金額： <span class="h5 font-weight-bold">$ 580</span> </p>
                <a href="./cart.html" class="btn btn-sm btn-outline-dark ml-auto">前往購物車 <i
                    class="fas fa-chevron-right"></i></a>
              </div>
              <a href="./checkOut.html" class="btn btn-primary w-100 mb-2">把錢錢變成喜歡的樣子！</a>
            </div>
          </div>
        </div>
      </nav>
      <!-- banner -->
      <div class="bg-cover"
        style="background-image: url(https://images.unsplash.com/photo-1600743648797-c39e61e48f6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80);">
        <div class="d-flex flex-column min-vh-100 bg-black pt-12">
          <div class="container my-auto">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-6 text-center">
                <p><span class="text-primary">BOOK STORE</span><span class="text-white-50"> / RELAX SPACE</span></p>
                <h2 class="display-3 font-en-title mb-3 text-white">Book your world</h2>
                <p class="text-white-50 mb-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus fugiat dignissimos est! Animi!
                </p>
                <a class="btn btn-outline-primary rounded-0 text-white py-2 px-6" href="./porduct.html">構築你的世界</a>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row mb-2 align-items-md-center">
              <div class="col-md">
                <ul class="list-inline list-unstyled text-md-start text-center">
                  <li class="list-inline-item pr-4">
                    <a href="#" class="text-light link-hover-primary"><i class="fab fa-facebook-square h3"></i></a>
                  </li>
                  <li class="list-inline-item pr-4">
                    <a href="#" class="text-light link-hover-primary"><i class="fab fa-instagram h3"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-light link-hover-primary"><i class="fab fa-line h3"></i></a>
                  </li>
                </ul>
              </div>
              <div class="col-md">
                <a href="#" class="d-flex justify-content-md-end justify-content-center align-items-center">
                  <i class="fas fa-map-marker-alt h4 text-primary mr-2"></i>
                  <span class="text-white-50 h6 hover-primary">台北市中正區重慶南路一段1號18樓</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="content pt-10 pt-lg-25 pt-md-15 pb-10 pb-md-12">
      <!-- 介紹圖文 -->
      <section class="pb-md-25 pb-10">
        <div class="bg-primary-100">
          <div class="container">
            <div class="row">
              <div class="col-md-2">
                <div class="bg-secondary mt-6 mb-4" style="width: 20%; height: 4px;">
                </div>
                <p class="text-primary-200">
                  靜下心依循著感覺－－<br>
                  選一本書，享受閱讀的時光。
                </p>
              </div>
              <div class="col-md-4 introBlock-Over">
                <div class="bg-cover h-100 introBlock-image"
                  style="background-image: url(https://images.unsplash.com/photo-1569937301527-9336e27c357c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80);">
                </div>
              </div>
              <div class="col-md-6 pl-6 py-md-12 py-5 d-flex align-items-center">
                <div>
                  <h2 class="introBlock-title text-secondary mb-4 font-weight-bold font-tw-title h1">
                    引領你<br>
                    探索蘊含於書的世界</h2>
                  <p class="text-secondary-200">
                    進要食了，味很算巴。的樣像機也演前不自合類而文又明度多，次的兒樣些黃還子、人不個明是以黃黑葉聽參人這去己我白電觀濟調我前話，城衣天些般？家我百美構邊工定是……果資團以內正靈界總節？
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 介紹圖文 -->
      <section class="pb-md-25 pb-10">
        <div class="bg-primary-100">
          <div class="container">
            <div class="row flex-nowrap flex-md-row flex-column-reverse">
              <div class="col-md-6 pl-6 py-md-12 py-5 d-flex align-items-center">
                <div>
                  <h2 class="introBlock-title text-secondary mb-4 font-weight-bold font-tw-title h1">
                    引領你<br>
                    探索蘊含於書的世界</h2>
                  <p class="text-secondary-200">
                    進要食了，味很算巴。的樣像機也演前不自合類而文又明度多，次的兒樣些黃還子、人不個明是以黃黑葉聽參人這去己我白電觀濟調我前話，城衣天些般？家我百美構邊工定是……果資團以內正靈界總節？
                  </p>
                </div>
              </div>
              <div class="col-md-4 introBlock-Over">
                <div class="bg-cover h-100 introBlock-image"
                  style="background-image: url(https://images.unsplash.com/photo-1544185310-0b3cf501672b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80);">
                </div>
              </div>
              <div class="col-md-2">
                <div class="bg-secondary mt-6 mb-4" style="width: 20%; height: 4px;">
                </div>
                <p class="text-primary-200">
                  靜下心依循著感覺－－<br>
                  選一本書，享受閱讀的時光。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 廣告 banner -->
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col">
                  <div class="card bg-cover mb-6 border-0 linkCard-hover-image"
                    style="background-image: url(https://images.unsplash.com/photo-1593545517138-301fa4851c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80);">
                    <div class="card-body py-12 px-6">
                      <p class="card-text font-weight-light mb-1">次的兒樣還子、人不個明是以黃黑</p>
                      <h2 class="card-title font-weight-bold text-secondary-200 mb-6">為自己揀選一本好書</h2>
                      <a href="#" class="btn btn-secondary">現在立刻挑選</a>
                    </div>
                  </div>
                  <div class="card bg-cover border-0 linkCard-hover-image mb-6 mb-md-0"
                    style="background-image: url(https://images.unsplash.com/photo-1546015018-24f0037683b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80);">
                    <div class="card-body py-12 px-6 text-right">
                      <p class="card-text font-weight-light mb-1">次的兒樣還子、人不個明是以黃黑</p>
                      <h2 class="card-title font-weight-bold mb-6 text-primary-200">配上優雅的咖啡香氣</h2>
                      <a href="#" class="btn btn-primary">現在立刻挑選</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 bg-cover border-0 linkCard-hover-image"
                style="background-image: url(https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80);">
                <div class="card-body pt-12 text-right text-md-left">
                  <p class="card-text font-weight-light mb-1">次的兒樣還子、人不個明是以黃黑</p>
                  <h2 class="card-title font-weight-bold mb-6 text-secondary-200">
                    舒緩的香氛<br>
                    也很適合賞書時光</h2>
                  <a href="#" class="btn btn-secondary-200">現在立刻挑選</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer>
      <section class="sub bg-primary-200 py-6">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-5 d-flex align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0">
              <div class="text-primary-100 d-flex align-items-center justify-content-center">
                <i class="fab fa-connectdevelop mr-3 h2"></i>
                <span class="h4">訂閱你與書本的橋梁</span>
              </div>
            </div>
            <div class="col-md-5">
              <div class="input-group">
                <input type="text" class="form-input form-control rounded-0 bg-primary-100 py-6 pl-12"
                  placeholder="請輸入電子郵件" id="sub">
                <h5><label for="sub"><i class="fas fa-envelope form-input-icon text-primary"></i></label></h5>
                <div class="input-group-append">
                  <button class="btn btn-primary rounded-0 px-4" type="button" id="button-addon2"><i
                      class="fas fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-infor bg-primary-100 py-6">
        <div class="container">
          <div class="row justify-content-center pb-4">
            <div class="col-md-5 d-flex flex-column justify-content-between">
              <h2 class="h1 text-primary font-logo mb-8 mb-md-0">Booky</h2>
              <ul class="list-unstyled">
                <li>
                  <a href="tel:02-1234-4321" class="text-secondary">02-1234-4321</a>
                </li>
                <li><a href="mailto:booky@gamilcom" class="text-secondary">booky@gamilcom</a></li>
                <li><a href="#" class="text-secondary">100台北市中正區重慶南路一段1號18樓</a></li>
              </ul>
            </div>
            <div class="col-md-5 d-none d-md-flex justify-content-end">
              <h3 class="footer-infor-slogan vertical text-secondary font-tw-title font-weight-bold mx-0">
                引領你探索<br>
                <span class="pt-4">蘊含於書的世界</span>
              </h3>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-5 d-flex justify-content-end justify-content-md-start">
              <ul class="list-inline list-unstyled mb-0">
                <li class="list-inline-item pr-4">
                  <a href="#" class="text-primary"><i class="fab fa-facebook-square h3"></i></a>
                </li>
                <li class="list-inline-item pr-4">
                  <a href="#" class="text-primary"><i class="fab fa-instagram h3"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-primary"><i class="fab fa-line h3"></i></a>
                </li>
              </ul>
            </div>
            <div class="col-md-5 d-flex align-items-center justify-content-end">
              <p class="text-primary-200 mb-0">
                © 2021 Booky All for pratice
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>

    <!-- 購物車刪除商品的 modal -->
    <div class="modal fade" id="removeModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">確定刪除</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap4 -->
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
      integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous">
    </script> -->
    <!-- main -->
    <!-- <script src="./JS/all.js"></script> -->
  </body>

  </html>
</template>

<script src="./JS/all.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
  integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
  integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous">
</script>
