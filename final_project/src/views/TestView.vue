<template>
    <html lang="zh-Hant-TW">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="icon" href="/Record/record.svg">
        <title>record</title>
        <meta name="title" content="record">
        <meta property="og:title" content="record" />
        <meta name="description" content="有鑒於黑膠唱片機的經典，即便時代不斷地在往前走，唱片機始終保存著音樂創作與享受能帶給人們的初心和愉悅">
        <meta property="og:description" content="有鑒於黑膠唱片機的經典，即便時代不斷地在往前走
                唱片機始終保存著音樂創作與享受能帶給人們的初心和愉悅" />
        <meta property="og:image" content="https://yuanyuan1103.github.io/Record/vinyl_icon.png" />
        <!-- <script defer="defer" src="/Record/js/chunk-vendors.eb220a3f.js"></script>
        <script defer="defer" src="/Record/js/app.acdb942c.js"></script> -->
        <link href="/Record/css/chunk-vendors.07b04e08.css" rel="stylesheet">
        <link href="/Record/css/app.2d1e6c13.css" rel="stylesheet">
    </head>

    <body>
        <div id="app" data-v-app>
            <div tabindex="0" class="vld-overlay is-active is-full-page" aria-busy="false" aria-label="Loading"
                style="z-index: 100; display: none;">
                <div class="vld-background" style="backdrop-filter: blur(2px);"></div>
                <div class="vld-icon"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                        stroke="#000">
                        <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1 1)" stroke-width="2">
                                <circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle>
                                <path d="M36 18c0-9.94-8.06-18-18-18">
                                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18"
                                        dur="0.8s" repeatCount="indefinite"></animateTransform>
                                </path>
                            </g>
                        </g>
                    </svg></div>
            </div>
            <nav class="desktop header navbar navbar-expand-lg navbar-dark fixed-top" data-v-6f93228f="">
                <div class="container" data-v-6f93228f="">
                    <a aria-current="page" href="#/" class="active router-link-exact-active navbar-brand iconFont fs-3"
                        data-v-6f93228f="">Record</a>
                    <div class="mainMeun" data-v-6f93228f=""><button type="button" class="navbar-toggler"
                            data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation" data-v-6f93228f=""><span
                                class="navbar-toggler-icon" data-v-6f93228f=""></span></button>
                        <div class="collapse navbar-collapse" id="navbarNav" data-v-6f93228f="">
                            <ul class="navbar-nav navbar-nav-scroll" data-v-6f93228f="">
                                <li class="nav-item" data-v-6f93228f=""><a href="#/about" class="nav-link navbarFont"
                                        data-v-6f93228f="">關於我們</a></li>
                                <li class="nav-item" data-v-6f93228f=""><a href="#/product" class="nav-link navbarFont"
                                        data-v-6f93228f="">唱片專區</a></li>
                                <li class="nav-item" data-v-6f93228f=""><a href="#/faq" class="nav-link navbarFont"
                                        data-v-6f93228f="">常見問答</a></li>
                                <li class="nav-item" data-v-6f93228f=""><a href="#/ordertrack" class="nav-link navbarFont"
                                        data-v-6f93228f="">訂單查詢</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="mobile header navbar navbar-expand-lg navbar-dark fixed-top" data-v-6f93228f="">
                <div class="container-fluid" data-v-6f93228f=""><button type="button" class="navbar-toggler"
                        data-v-6f93228f=""><span class="navbar-toggler-icon" data-v-6f93228f=""></span></button>
                    <div class="offcanvas offcanvas-start main-panel open" tabindex="-1" data-v-6f93228f=""
                        style="visibility: hidden;">
                        <div class="offcanvas-header" data-v-6f93228f=""><button type="button"
                                class="btn-close text-reset h2" data-v-6f93228f=""><i class="bi bi-x-lg"
                                    data-v-6f93228f=""></i></button></div>
                        <div class="offcanvas-body" data-v-6f93228f="">
                            <ul class="list-unstyled" data-v-6f93228f="">
                                <li class="nav-item" data-v-6f93228f=""><a aria-current="page" href="#/"
                                        class="active router-link-exact-active nav-link" data-v-6f93228f="">Record</a></li>
                                <li class="nav-item" data-v-6f93228f=""><a href="#/about" class="nav-link"
                                        data-v-6f93228f="">關於我們</a></li>
                                <li class="nav-item" data-v-6f93228f=""><a href="#/product" class="nav-link"
                                        data-v-6f93228f="">唱片專區</a></li>
                                <li class="nav-item" data-v-6f93228f=""><a href="#/faq" class="nav-link"
                                        data-v-6f93228f="">常見問答</a></li>
                                <li class="nav-item" data-v-6f93228f=""><a href="#/ordertrack" class="nav-link"
                                        data-v-6f93228f="">訂單查詢</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1050;"></div>
            <div tabindex="0" class="vld-overlay is-active is-full-page" aria-busy="false" aria-label="Loading"
                data-v-c711e874="" style="z-index: 100; display: none;">
                <div class="vld-background" style="backdrop-filter: blur(2px);"></div>
                <div class="vld-icon"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                        stroke="#000">
                        <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1 1)" stroke-width="2">
                                <circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle>
                                <path d="M36 18c0-9.94-8.06-18-18-18">
                                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18"
                                        dur="0.8s" repeatCount="indefinite"></animateTransform>
                                </path>
                            </g>
                        </g>
                    </svg></div>
            </div>
            <div class="banner" data-v-c711e874="">
                <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel"
                    data-v-c711e874="">
                    <div class="carousel-indicators" data-v-c711e874=""><button type="button"
                            data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="" aria-label="Slide 1"
                            data-v-c711e874=""></button><button type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1" aria-label="Slide 2" data-v-c711e874="" class=""></button><button
                            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3" data-v-c711e874="" class="active" aria-current="true"></button></div>
                    <div class="carousel-inner" data-v-c711e874="">
                        <div class="carousel-item" data-v-c711e874=""><img src="/Record/img/banner_1.f444dc98.jpg"
                                class="d-block" alt="RecordBanner" data-v-c711e874="">
                            <div class="carousel-caption d-md-block" data-v-c711e874="">
                                <h2 class="textspac" data-v-c711e874="">時光在歌唱<br data-v-c711e874="">黑膠唱片收藏的不僅僅是聲音</h2><a
                                    href="#/product" class="custom-btn btn btn-outline-light rounded-pill px-5"
                                    data-v-c711e874="">來去逛逛</a>
                            </div>
                        </div>
                        <div class="carousel-item" data-v-c711e874=""><img src="/Record/img/banner_2.2b70bc0d.jpg"
                                class="d-block" alt="RecordBanner" data-v-c711e874="">
                            <div class="carousel-caption d-md-block" data-v-c711e874="" style="text-align: left;">
                                <h2 class="textspac" data-v-c711e874="">近年被譽為<br data-v-c711e874="">「黑膠唱片復興時代」</h2><a
                                    href="#/product" class="custom-btn btn btn-outline-light rounded-pill px-5"
                                    data-v-c711e874="">來去逛逛</a>
                            </div>
                        </div>
                        <div class="carousel-item active" data-v-c711e874=""><img src="/Record/img/banner_3.9d91c9d6.jpg"
                                class="d-block" alt="RecordBanner" data-v-c711e874="">
                            <div class="carousel-caption d-md-block" data-v-c711e874="">
                                <h2 class="textspac" data-v-c711e874="">聽黑膠需要理由嗎？</h2><a href="#/product"
                                    class="custom-btn btn btn-outline-light rounded-pill px-5" data-v-c711e874="">來去逛逛</a>
                            </div>
                        </div>
                    </div><button type="button" class="carousel-control-prev" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev" data-v-c711e874=""><span class="carousel-control-prev-icon" aria-hidden="true"
                            data-v-c711e874=""></span><span class="visually-hidden"
                            data-v-c711e874="">Previous</span></button><button type="button" class="carousel-control-next"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next" data-v-c711e874=""><span
                            class="carousel-control-next-icon" aria-hidden="true" data-v-c711e874=""></span><span
                            class="visually-hidden" data-v-c711e874="">Next</span></button>
                </div>
            </div>
            <div class="container title p-5" data-v-c711e874="">
                <h2 data-v-c711e874="">本月推薦</h2>
            </div>
            <div class="container" data-v-c711e874="">
                <div class="row animated" data-v-c711e874="">
                    <div class="col-lg-6 align-self-center" data-v-c711e874="">
                        <div class="mx-auto px-5" data-v-c711e874="">
                            <p data-v-c711e874="" style="font-size: 20px;">義大利音樂謬斯</p>
                        </div>
                        <div class="introduce mx-auto px-5" data-v-c711e874="">
                            <p data-v-c711e874="" style="font-size: 15px; white-space: pre-line;">
                                專輯由夏伊指揮史卡拉劇院愛樂管弦樂團演出，收錄多首受「義大利」啟發靈感而創作的作品，包括孟德爾頌的第4號交響曲「義大利」、舒伯特的兩首「義大利風格序曲」以及莫札特三部歌劇：龐托王米崔達提（Mitridate,
                                re di Ponto）、阿爾巴的阿斯卡尼歐（Ascania in Alba）、路奇歐．錫拉（Lucio Silla）之序曲。</p>
                        </div>
                        <div class="float-end px-5 pb-5" data-v-c711e874=""><button type="button"
                                class="btn btn-outline-secondary" data-v-c711e874="">查看更多</button></div>
                    </div>
                    <div class="col-lg-6 p-0 d-flex align-items-center" data-v-c711e874=""><img
                            class="card-img-top productRecommend d-flex align-items-center"
                            src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                            alt="義大利音樂謬斯" title="義大利音樂謬斯" data-v-c711e874=""></div>
                </div>
            </div>
            <div class="container title p-5" data-v-c711e874="">
                <h2 data-v-c711e874="">分類推薦</h2>
            </div>
            <div class="container" data-v-c711e874="">
                <div class="row" data-v-c711e874="">
                    <div class="col-lg-6 col-sm-12 effect-lily p-0 pointers" data-v-c711e874=""><img class="img-fluid"
                            src="/Record/img/category_1.d0be3c97.jpg" alt="原聲帶" title="原聲帶" data-v-c711e874="">
                        <div class="detil" data-v-c711e874="">
                            <h2 data-v-c711e874="">原聲帶</h2><span class="rotate" data-v-c711e874="">View more</span>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 effect-lily p-0 pointers" data-v-c711e874=""><img class="img-fluid"
                            src="/Record/img/category_2.1cef3761.jpg" alt="古典" title="古典" data-v-c711e874="">
                        <div class="detil" data-v-c711e874="">
                            <h2 data-v-c711e874="">古典</h2><span class="rotate" data-v-c711e874="">View more</span>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 effect-lily p-0 pointers" data-v-c711e874=""><img class="img-fluid"
                            src="/Record/img/category_3.72bd652a.jpg" alt="演奏" title="演奏" data-v-c711e874="">
                        <div class="detil" data-v-c711e874="">
                            <h2 data-v-c711e874="">演奏</h2><span class="rotate" data-v-c711e874="">View more</span>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 effect-lily p-0 pointers" data-v-c711e874=""><img class="img-fluid"
                            src="/Record/img/category_4.67adc8a6.jpg" alt="其他" title="其他" data-v-c711e874="">
                        <div class="detil" data-v-c711e874="">
                            <h2 data-v-c711e874="">其他</h2><span class="rotate" data-v-c711e874="">View more</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container title p-5" data-v-c711e874="">
                <h2 data-v-c711e874="">精選推薦</h2>
            </div>
            <div class="container" data-v-c711e874="">
                <div class="row" data-v-c711e874="">
                    <div class="col-12 col-sm-6 col-lg-3 p-3" data-v-c711e874="">
                        <div class="product" data-v-c711e874="">
                            <div class="imgProduct" data-v-c711e874="">
                                <div class="bgr position-absolute top-0 end-0" data-v-c711e874="">sale</div><img
                                    class="card-img-top imgProduct"
                                    src="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    alt="JOE HISAISHI 久石讓" title="JOE HISAISHI 久石讓" data-v-c711e874="">
                            </div>
                            <div class="proDetil p-2" data-v-c711e874="">
                                <p class="textover fw-bolder" data-v-c711e874="">JOE HISAISHI 久石讓</p>
                                <div class="proTitle fw-bolder" data-v-c711e874=""><span class="text-danger fs-5"
                                        data-v-c711e874="">$1,300</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 p-3" data-v-c711e874="">
                        <div class="product" data-v-c711e874="">
                            <div class="imgProduct" data-v-c711e874=""><!----><img class="card-img-top imgProduct"
                                    src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    alt="義大利音樂謬斯" title="義大利音樂謬斯" data-v-c711e874=""></div>
                            <div class="proDetil p-2" data-v-c711e874="">
                                <p class="textover fw-bolder" data-v-c711e874="">義大利音樂謬斯</p>
                                <div class="proTitle fw-bolder" data-v-c711e874=""><span class="fs-5"
                                        data-v-c711e874="">$1,000</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 p-3" data-v-c711e874="">
                        <div class="product" data-v-c711e874="">
                            <div class="imgProduct" data-v-c711e874="">
                                <div class="bgr position-absolute top-0 end-0" data-v-c711e874="">sale</div><img
                                    class="card-img-top imgProduct"
                                    src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"
                                    alt="紫羅蘭永恆花園" title="紫羅蘭永恆花園" data-v-c711e874="">
                            </div>
                            <div class="proDetil p-2" data-v-c711e874="">
                                <p class="textover fw-bolder" data-v-c711e874="">紫羅蘭永恆花園</p>
                                <div class="proTitle fw-bolder" data-v-c711e874=""><span class="text-danger fs-5"
                                        data-v-c711e874="">$1,800</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 p-3" data-v-c711e874="">
                        <div class="product" data-v-c711e874="">
                            <div class="imgProduct" data-v-c711e874="">
                                <div class="bgr position-absolute top-0 end-0" data-v-c711e874="">sale</div><img
                                    class="card-img-top imgProduct"
                                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    alt="貝多芬『交響曲全集』" title="貝多芬『交響曲全集』" data-v-c711e874="">
                            </div>
                            <div class="proDetil p-2" data-v-c711e874="">
                                <p class="textover fw-bolder" data-v-c711e874="">貝多芬『交響曲全集』</p>
                                <div class="proTitle fw-bolder" data-v-c711e874=""><span class="text-danger fs-5"
                                        data-v-c711e874="">$1,100</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container title p-5" data-v-c711e874="">
                <h2 data-v-c711e874="">常見問答</h2>
            </div>
            <section id="info-utile" class="bg-white pb-5 h100" data-v-c711e874="">
                <div class="container" data-v-c711e874="">
                    <div class="accordion" id="accordionExample" data-v-c711e874="">
                        <div class="accordion-item" data-v-c711e874="">
                            <h2 class="accordion-header" id="headingOne" data-v-c711e874=""><button type="button"
                                    class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne" data-v-c711e874=""> 如何付款呢？ </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample" data-v-c711e874="">
                                <div class="accordion-body" data-v-c711e874="">
                                    <ul class="ms-5" data-v-c711e874="">
                                        <li data-v-c711e874="">信用卡</li>
                                        <li data-v-c711e874="">ATM轉帳匯款</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" data-v-c711e874="">
                            <h2 class="accordion-header" id="headingTwo" data-v-c711e874=""><button type="button"
                                    class="accordion-button collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                                    data-v-c711e874=""> 購物流程 </button></h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample" data-v-c711e874="">
                                <div class="accordion-body" data-v-c711e874="">
                                    <ul class="ms-5" data-v-c711e874="">
                                        <li data-v-c711e874="">Step1。選購您喜愛的商品您可以透過網頁引導或搜尋的方式找到您要的商品再點選加入購物車。</li>
                                        <li data-v-c711e874="">Step2。繼續購物/訂單結帳 。</li>
                                        <li data-v-c711e874="">Step3。確認購買清單。</li>
                                        <li data-v-c711e874="">Step4。前往結帳。</li>
                                        <li data-v-c711e874="">Step5。完成購物。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" data-v-c711e874="">
                            <h2 class="accordion-header" id="headingFour" data-v-c711e874=""><button type="button"
                                    class="accordion-button collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"
                                    data-v-c711e874=""> 運費如何計算? </button></h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample" data-v-c711e874="">
                                <div class="accordion-body" data-v-c711e874="">只要您在本站購買500(包含)以上，即可享有免運費優惠喔!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="coupon" data-v-c711e874="">
                <div class="coupon-banner row m-5" data-v-c711e874="">
                    <div class="col-lg-6 col-sm-12 align-items-center flex-sm-column d-flex justify-content-center"
                        data-v-c711e874="">
                        <div class="ticket m-3" data-v-c711e874=""><span data-v-c711e874="">優惠碼</span><span
                                class="mx-3 ticket-dash" data-v-c711e874=""></span><span data-v-c711e874="">open2022</span>
                        </div>
                    </div>
                    <div class="ticketContent col-lg-6 col-sm-12 p-3 d-lg-flex flex-sm-column justify-content-center"
                        data-v-c711e874="">
                        <h2 data-v-c711e874="">歡慶開幕</h2><br data-v-c711e874="">
                        <p data-v-c711e874="">結帳時<br data-v-c711e874="">輸入優惠碼立即取得優惠價格</p>
                    </div>
                </div>
            </div>
            <div class="footer py-3" data-v-8649b450="">
                <div class="container row center" data-v-8649b450="" style="gap: 1rem;">
                    <div class="footerIcon col-lg-4 col-sm-8 mb-2 lh-sm" data-v-8649b450=""><img
                            src="/Record/img/vinyl_icon.1ffe98f5.png" alt="Record" data-v-8649b450="">
                        <div class="text-center space" data-v-8649b450="">
                            <h1 class="fw-bolder" data-v-8649b450="">Record</h1>
                            <p data-v-8649b450="">紀錄回憶的聲音</p>
                        </div>
                    </div>
                    <div class="footerAbout col-lg-4 col-sm-8 lh-sm p-3" data-v-8649b450="">
                        <h2 class="fs-2 mb-2 text-muted fw-bolder" data-v-8649b450="">聯絡方式</h2>
                        <p class="pt-2 space" data-v-8649b450=""><i class="bi bi-geo-alt-fill pe-1"
                                data-v-8649b450=""></i>地球上某個角落</p>
                        <div class="d-flex" data-v-8649b450=""><i class="bi bi-clock-fill pe-1" data-v-8649b450=""></i>
                            <p class="space" data-v-8649b450="">週一至週五 13:30 - 21:50<br data-v-8649b450="">週六 10:00 -
                                21:50<br data-v-8649b450="">週日 10:00 - 18:00</p>
                        </div>
                        <p class="space" data-v-8649b450=""><i class="bi bi-envelope-fill pe-1" data-v-8649b450=""></i><a
                                class="linked" href="mailto:pijhs70401@gmail.com"
                                data-v-8649b450="">pijhs70401@gmail.com</a></p>
                        <p class="space" data-v-8649b450=""><i class="bi bi-telephone-fill pe-1" data-v-8649b450=""></i><a
                                class="linked" href="tel:(09)-8765-4321" data-v-8649b450="">(09)-8765-4321</a></p>
                    </div>
                    <div class="contact col-lg-3 col-sm-8 lh-sm p-3" data-v-8649b450="">
                        <h2 class="fs-2 mb-2 text-muted fw-bolder" data-v-8649b450="">關於本站</h2>
                        <div class="d-flex flex-column space" data-v-8649b450=""><a href="#/about"
                                class="px-0 nav-link iconFont" data-v-8649b450=""><i class="bi bi-caret-right-fill"
                                    data-v-8649b450=""></i>關於我們</a><a href="#/product" class="px-0 nav-link iconFont"
                                data-v-8649b450=""><i class="bi bi-caret-right-fill" data-v-8649b450=""></i>唱片專區</a><a
                                href="#/faq" class="px-0 nav-link iconFont" data-v-8649b450=""><i
                                    class="bi bi-caret-right-fill" data-v-8649b450=""></i>常見問答</a><a href="#/ordertrack"
                                class="px-0 nav-link iconFont" data-v-8649b450=""><i class="bi bi-caret-right-fill"
                                    data-v-8649b450=""></i>訂單查詢</a><a target="_blank" class="px-0 nav-link iconFont"
                                href="https://github.com/yuanyuan1103/Record" data-v-8649b450=""><i
                                    class="bi bi-caret-right-fill" data-v-8649b450=""></i>Github</a></div>
                    </div>
                    <div class="space text-center" data-v-8649b450="">
                        <p data-v-8649b450="">僅個人練習使用．不做商業用途 | <a href="#/login" class="iconFont"
                                data-v-8649b450="">管理員登入</a></p>
                        <p data-v-8649b450="">© 2022. YuanYuan All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </body>

    </html>
</template>
