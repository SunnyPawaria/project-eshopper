import React from 'react'

export default function CartItem() {
    return (
        <tr>
            <td class="align-middle">
                <img src="img/product-1.jpg" alt="" style={{
                    width: "50px"
                }} />
                Colorful Stylish Shirt
            </td>
            <td class="align-middle">$150</td>
            <td class="align-middle">
                <div class="input-group quantity mx-auto" style={{
                    width: "100px"
                }}>
                    <div class="input-group-btn">
                        <button class="btn btn-sm btn-primary btn-minus" >
                            <i class="fa fa-minus"></i>
                        </button>
                    </div>
                    <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1" />
                    <div class="input-group-btn">
                        <button class="btn btn-sm btn-primary btn-plus">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </td>
            <td class="align-middle">$150</td>
            <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
        </tr>
    )
}
