import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryComponent() {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">

                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </div>
    )
}
