import React, { useState } from 'react'

function CardData() {
    const [data, setdata] = useState([
        {
            "id": 1,
            "title": "boAt Nirvana Zenith Pro",
            "price": 2699,
            "oldPrice": 14990,
            "discount": "82% off",
            "rating": 4.6,
            "playback": "80 Hours Playback",
            "offer": "EXTRA ₹100 OFF",
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/zenith_pro_LR.png?v=1751544158"
        },
        {
            "id": 2,
            "title": "Noise Air Buds Pro 3",
            "price": 2499,
            "oldPrice": 9999,
            "discount": "75% off",
            "rating": 4.5,
            "playback": "45 Hours Playback",
            "offer": "EXTRA ₹150 OFF",
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_181_pro_1.png?v=1745234576"
        },
        {
            "id": 3,
            "title": "OnePlus Buds Z2",
            "price": 4499,
            "oldPrice": 8999,
            "discount": "50% off",
            "rating": 4.7,
            "playback": "38 Hours Playback",
            "offer": "EXTRA ₹200 OFF",
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495"
        },
        {
            "id": 4,
            "title": "Realme Buds T300",
            "price": 2199,
            "oldPrice": 6999,
            "discount": "68% off",
            "rating": 4.4,
            "playback": "40 Hours Playback",
            "offer": "EXTRA ₹100 OFF",
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/63_pro_LR.png?v=1724672727"
        }
    ])
    var cardobject = {}
    var deleteobject=[]
    function setcardobject(e) {
        // console.log(e.target.value);
        cardobject[e.target.name] = e.target.value
        // console.log(cardobject);

    }

    function deletecardobject(index){
        deleteobject=data
        deleteobject.splice(index,1)
        setdata([...deleteobject])
        cardobject=[]
    }

    return (
        <div className='p-4 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100'>
            <div className='flex p-4'>
                {
                    data.map((object,index) => {
                        return (
                            <div className="w-64 m-4 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 relative">
                                {/* Stylish Close Button */}
                                <button onClick={()=>{deletecardobject(index)}} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white shadow-md transition-all duration-300">
                                    ✕
                                </button>

                                {/* Extra Offer */}
                                <div className="bg-black text-green-400 text-xs font-semibold px-2 py-1">
                                    🏷️ {object.offer}
                                </div>

                                {/* Product Image */}
                                <img
                                    src={object.image}
                                    alt="boAt Nirvana Zenith Pro"
                                    className="w-full h-44 object-cover"
                                />

                                {/* Playback Info */}
                                <div className="flex justify-between items-center bg-yellow-400 text-sm font-semibold px-3 py-1">
                                    <span>{object.playback}</span>
                                    <div className="flex items-center bg-yellow-500 px-2 py-0.5 rounded-md text-white text-xs">
                                        ⭐ {object.rating}
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-3">
                                    <h3 className="text-gray-900 font-semibold text-sm">
                                        {object.title}
                                    </h3>

                                    <div className="flex items-center justify-between mt-2">
                                        <div>
                                            <p className="text-lg font-bold">₹{object.price}</p>
                                            <p className="text-gray-400 text-sm line-through">₹{object.oldPrice}</p>
                                            <p className="text-green-600 text-sm font-medium">{object.discount}</p>
                                        </div>

                                        <button className="bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-800">
                                            +1
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-gray-200">
                    {/* Header */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        🛒 Add New Product Card
                    </h2>

                    {/* Form */}
                    <form method='post' onSubmit={(e) => {
                        e.preventDefault()
                        setdata((predata) => ([...predata, { ...cardobject }]))
                        console.log(cardobject);
                        // cardobject={}
                        e.target.reset()
                    }}
                        className="space-y-5">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-600 font-semibold mb-1">Title</label>
                            <input
                                type="text" name='title' onChange={(e) => { setcardobject(e) }}
                                placeholder="Enter product title" required
                                className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        {/* Price and Old Price */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-600 font-semibold mb-1">Price</label>
                                <input
                                    type="text" name='price' onChange={(e) => { setcardobject(e) }}
                                    placeholder="e.g. 1999" required
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-semibold mb-1">Old Price</label>
                                <input
                                    type="text" name='oldPrice' onChange={(e) => { setcardobject(e) }}
                                    placeholder="e.g. 5999" required
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                        </div>

                        {/* Discount and Rating */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-600 font-semibold mb-1">Discount</label>
                                <input
                                    type="text" name='discount' onChange={(e) => { setcardobject(e) }}
                                    placeholder="e.g. 67% off" required
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-semibold mb-1">Rating</label>
                                <input
                                    type="number" name='rating' onChange={(e) => { setcardobject(e) }}
                                    step="1.0" required
                                    placeholder="e.g. 4.5"
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                        </div>

                        {/* Playback and Offer */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-600 font-semibold mb-1">Playback</label>
                                <input
                                    type="text" name='playback' onChange={(e) => { setcardobject(e) }}
                                    placeholder="e.g. 60 Hours Playback" required
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-semibold mb-1">Offer</label>
                                <input
                                    type="text" name='offer' onChange={(e) => { setcardobject(e) }}
                                    placeholder="e.g. EXTRA ₹120 OFF" required
                                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-gray-600 font-semibold mb-1">Image URL</label>
                            <input
                                type="text" name='image' onChange={(e) => { setcardobject(e) }}
                                placeholder="Paste image link here" required
                                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        {/* Add Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            ➕ Add Card
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default CardData
