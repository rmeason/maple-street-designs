import React from 'react';
import gate from "./components/imgs/gate-pic.jpg"
import sign from "./components/imgs/sign-pic.jpg"
import tree from "./components/imgs/tree-pic.jpg"
import ProductsWrapper from "./components/ProductsWrapper";
import "./Products.css";

function Products() {


    //   $('.sim-thumb').on('click', function() {
    //     $('#main-product-image').attr('src', $(this).data('image'));
    //   })
      

    return (

        <ProductsWrapper>

                <section class="four-up-feature wrap">
                    <div class="row four-up-feature-header align-center">


                        <div class="medium-8 columns">
                        <h2>While we can make just about anything you can imagine, here is a sample of our basic products.</h2>
                        </div>
                    </div>
                    <div class="row align-spaced">
                    <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src={gate}/></a>
                        </div>
                        <h2 class="product-card-title"><a class="product" href="#">Sliding Gates</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">$65 per gate/installed</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                        <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src={sign}/></a>
                        </div>
                        <h2 class="product-card-title"><a class="product" href="#">Community Signage</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">Contact us for pricing.</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                        <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src={tree}/></a>
                        </div>
                        <h2 class="product-card-title"><a class="product" href="#">Lighted Trees</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">Contact us for pricing.</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                    </div>

                    {/* <div class="row align-center">
                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src="https://placehold.it/350x350?text=Image+1" alt="" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+1"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+2"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+3"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                            </ul>
                        </div>
                    </div>


                    <div class="row align-center">
                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src="https://placehold.it/350x350?text=Image+1" alt="" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+1"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+2"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+3"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                            </ul>
                        </div>
                    </div>


                    <div class="row align-center">
                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src="https://placehold.it/350x350?text=Image+1" alt="" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+1"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+2"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+3"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                            </ul>
                        </div>
                    </div> */}




                </section>

        </ProductsWrapper>
    
    );

}

export default Products;