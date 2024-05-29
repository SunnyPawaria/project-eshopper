import React from 'react'
import Slider from '../components/front/Slider'
import Feature from '../components/front/Feature'
import CategoryComponent from '../components/front/category/CategoryComponent'
import Advertisement from '../components/front/Advertisement'
import Trending from '../components/front/product/Trending'
import NewsLetter from '../components/front/NewsLetter'
import JustArrival from '../components/front/product/JustArrival'

export default function Home() {
    return (
        <>
            <Slider />
            <Feature />
            <CategoryComponent />

            <Advertisement />

            <Trending />
            
            <JustArrival />
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-1.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-2.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-3.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-4.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-5.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-6.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-7.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
