import React from 'react'

export default function NewsLetter() {
    return (
        <div className="col-md-4 mb-5">
            <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
            <form action="">
                <div className="form-group">
                    <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                        required="required" />
                </div>
                <div>
                    <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                </div>
            </form>
        </div>
    )
}
