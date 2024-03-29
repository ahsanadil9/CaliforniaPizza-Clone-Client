"use client"
import { useState } from "react";

export default function CustomerCheckout() {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Order Summary Section */}
                <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4 mb-4 md:mr-4">
                    <div className="flex gap-1">
                        <p>This is a</p>
                        <h2 className="font-bold">DELIVERY ORDER</h2>
                    </div>
                    <p>Just a last step, please enter your details</p>

                    <form className="flex flex-col w-full">
                        <div className="flex mt-4">
                            <div className="w-1/2 mr-2">
                                <label className="text-sm font-medium mb-1 block" htmlFor="title">
                                    Title
                                </label>
                                <select
                                    id="title"
                                    name="title"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                >
                                    <option value="mr">Mr.</option>
                                    <option value="ms">Ms.</option>
                                    <option value="mrs">Mrs.</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="text-sm font-medium mb-1 block" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                />
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="w-full mr-2">
                                <label className="text-sm font-medium mb-1 block" htmlFor="mobileNumber">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    placeholder="03xx-xxxxxxx"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    className="text-sm font-medium mb-1 block"
                                    htmlFor="alternateMobileNumber"
                                >
                                    Alternate Mobile Number (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="alternateMobileNumber"
                                    name="alternateMobileNumber"
                                    placeholder="03xx-xxxxxxx"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="text-sm font-medium mb-1 block" htmlFor="deliveryAddress">
                                Delivery Address
                            </label>
                        </div>
                        <input
                            type="tel"
                            id="deliveryAddress"
                            name="deliveryAddress"
                            placeholder="Enter your complete address"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        />

                        <div className="mt-4">
                            <label className="text-sm font-medium mb-1 block" htmlFor="nearestLandmark">
                                Nearest Landmark
                            </label>
                        </div>
                        <input
                            type="tel"
                            id="nearestLandmark"
                            name="nearestLandmark"
                            placeholder="Any famouse place nearby"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        />

                        <div className="mt-4">
                            <label className="text-sm font-medium mb-1 block" htmlFor="deliveryInstructions">
                                Delivery Instructions
                            </label>
                        </div>
                        <input
                            type="tel"
                            id="deliveryInstructions"
                            name="deliveryInstructions"
                            placeholder="Delivery Instructions"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        />


                    </form>
                    <div class="mt-4">

                        <h2 class="text-lg font-medium mb-2">Payment Information</h2>

                        <div class="flex items-center">
                            <img class="h-5 mr-2"
                                src="https://www.californiapizza.com.pk/_next/image?url=%2Fassets%2Fimg%2FCash.png&w=128&q=75"
                                alt="Cash logo"
                                onClick={() => handleMethodSelect('cash')}
                                style={{ width: '7%', height: '7%' }}
                            />
                            <img class="h-5 mr-2"
                                src="https://www.californiapizza.com.pk/_next/image?url=%2Fassets%2Fimg%2FCard.png&w=128&q=75"
                                alt="OnlinePayment logo"
                                onClick={() => handleMethodSelect('online')}
                                style={{ width: '17%', height: '17%' }}

                            />

                        </div>

                        {selectedMethod === 'cash' && (
                            <div class="mt-4">
                                <label htmlFor="cashAmount">Change Request</label>

                                <input
                                    type="text"
                                    id="cashAmount"
                                    name="cashAmount"
                                    placeholder="500"
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                />

                            </div>
                        )}
                    </div>

                </div>


                {/* Order Details Section */}
                <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="title">Title</label>
                        <select id="title" className="border rounded-md p-1">
                            <option value="mr">Mr.</option>
                            {/* Add more options */}
                        </select>
                    </div>


                </div>
            </div>

            {/* Payment Information Section - Add this section later */}
        </div>
    );
};
