<!-- 靈魂所在購物網的Navbar -->

<template>
    <!-- navbar navbar-expand-md navbar-light bg-primary sticky-top -->
    <!-- .navbar-expand{-sm|-md|-lg|-xl|-xxl} 確認內容何時可以收起來 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container"><a aria-current="page" href="#/"
                class="active router-link-exact-active navbar-brand custom-navbar-brand">
                <h1 class="logo">靈魂所在</h1>
            </a><button class="navbar-toggler ms-auto collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a href="#/notice" class="nav-link">新手須知</a></li>
                    <li class="nav-item"><a href="#/user/cart" class="nav-link">所有商品</a></li>
                    <li class="nav-item"><a href="#/discount" class="nav-link">優惠活動</a></li>
                    <li class="nav-item"><a href="#/connection" class="nav-link">聯絡我們</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
