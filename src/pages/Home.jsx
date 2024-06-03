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

            {/* <Trending /> */}
            
            <JustArrival />
            
        </>
    )
}
