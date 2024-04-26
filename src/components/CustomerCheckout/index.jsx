"use client";
import { createCustomerData, createOrdersData } from "@/src/routes/apiRequests";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../Navbar/cartContext";
import Loader from "../Customization/Loader";
import { ResponseMessage } from "../Customization";
import { useRouter } from "next/navigation";
import { clearCart } from "@/src/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

export default function CustomerCheckout() {
  const disptach = useDispatch();
  // const router_history = useHistory();

  const [selectedMethod, setSelectedMethod] = useState(null);
  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const { orderData } = useContext(OrderContext);
  console.log("order Data customer checkout: ", orderData);
  const router = useRouter();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    emailAddress: "",
    phoneNo: "",
    deliveryAddress: "",
    city: "",
    postalCode: "",
  });

  const [showItemAdded, setShowItemAdded] = useState(false);
  const clearForm = () => {
    setCustomerInfo({
      name: "",
      emailAddress: "",
      phoneNo: "",
      deliveryAddress: "",
      city: "",
      postalCode: "",
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await createCustomerData(customerInfo);
      const customerID = response.data._id;
      const fetchOrder = {
        items: orderData.items,
        customer: customerID,
      };
      await createOrdersData(fetchOrder);
      setSuccessMessage("Order placed successfully");
      setShowItemAdded(true);
      setTimeout(() => {
        setShowItemAdded(false);
        setSuccessMessage(null);
      }, 4000);
      clearForm();
    } catch (error) {
      console.error("Error submitting customer info:", error);
    } finally {
      setLoading(false);
    }
  };
  const isCustomerDetailsIncomplete = () => {
    const { name, emailAddress, phoneNo, deliveryAddress, city, postalCode } =
      customerInfo;
    return (
      !name ||
      !emailAddress ||
      !phoneNo ||
      !deliveryAddress ||
      !city ||
      !postalCode
    );
  };
  const clearOrder = () => {
    setCustomerInfo({
      name: "",
      emailAddress: "",
      phoneNo: "",
      deliveryAddress: "",
      city: "",
      postalCode: "",
    });

    disptach(clearCart());

    router.refresh();

    // reset order data here
    orderData.items = [];
    setSuccessMessage("Order cleared successfully!");
    setShowItemAdded(true);
    setTimeout(() => {
      setShowItemAdded(false);
      setSuccessMessage(null);
    }, 3000);
    router.push("/");
    // window.location.reload();
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* california logo */}
      <div className="flex items-center px-4 py-2 h-14 md:justify-center lg:justify-center lg:h-16">
        {/* <div className="relative z-10 w-16 aspect-square  md:w-20 lg:bg-white lg:rounded-full lg:mb-[-3.5rem] lg:w-24 lg:border-b-2">
              <Image
                src="/assets/california-logo.webp"
                alt="California Pizza Logo"
                // // fill
                width={10}
                height={10}
                // layout="fill"
                // layout="responsive"
                // objectFit="cover"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div> */}
      </div>
      <div className="container mx-auto px-4 py-8 mt-9">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          {/* Order Summary Section */}
          <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4 mb-4 md:mr-4">
            <div className="flex gap-1">
              <p>This is a</p>
              <h2 className="font-bold">DELIVERY ORDER</h2>
            </div>
            <p>Just a last step, please enter your details</p>

            <form className="flex flex-col w-full">
              <div className="flex mt-4">
                <div className="w-1/5 mr-2">
                  <label
                    className="text-sm font-medium mb-1 block"
                    htmlFor="title"
                  >
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
                  <label
                    className="text-sm font-medium mb-1 block"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <div className="w-full mr-2">
                  <label
                    className="text-sm font-medium mb-1 block"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    type="tel"
                    id="emailAddress"
                    name="emailAddress"
                    value={customerInfo.emailAddress}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        emailAddress: e.target.value,
                      })
                    }
                    placeholder="ahsanadil@gmail.com"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium mb-1 block"
                    htmlFor="MobileNumber"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    value={customerInfo.phoneNo}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phoneNo: e.target.value,
                      })
                    }
                    placeholder="03xx-xxxxxxx"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="text-sm font-medium mb-1 block"
                  htmlFor="deliveryAddress"
                >
                  Delivery Address
                </label>
              </div>
              <input
                type="tel"
                id="deliveryAddress"
                name="deliveryAddress"
                value={customerInfo.deliveryAddress}
                onChange={(e) =>
                  setCustomerInfo({
                    ...customerInfo,
                    deliveryAddress: e.target.value,
                  })
                }
                placeholder="Enter your complete address"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />

              <div className="mt-4">
                <label
                  className="text-sm font-medium mb-1 block"
                  htmlFor="city"
                >
                  City
                </label>
              </div>
              <input
                type="tel"
                id="city"
                name="city"
                value={customerInfo.city}
                onChange={(e) =>
                  setCustomerInfo({
                    ...customerInfo,
                    city: e.target.value,
                  })
                }
                placeholder="Karachi, Pakistan"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />

              <div className="mt-4">
                <label
                  className="text-sm font-medium mb-1 block"
                  htmlFor="deliveryInstructions"
                >
                  Postal Code
                </label>
              </div>
              <input
                type="tel"
                id="postalCode"
                name="postalCode"
                value={customerInfo.postalCode}
                onChange={(e) =>
                  setCustomerInfo({
                    ...customerInfo,
                    postalCode: e.target.value,
                  })
                }
                placeholder="75330"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
            </form>
            <div class="mt-4">
              <h2 class="text-lg font-medium mb-2">Payment Information</h2>

              <div class="flex items-center">
                <Image
                  class="h-5 mr-2"
                  src="https://www.californiapizza.com.pk/_next/image?url=%2Fassets%2Fimg%2FCash.png&w=128&q=75"
                  alt="Cash logo"
                  onClick={() => handleMethodSelect("cash")}
                  style={{ width: "7%", height: "7%" }}
                  width={100}
                  height={100}
                />
                <Image
                  class="h-5 mr-2"
                  src="https://www.californiapizza.com.pk/_next/image?url=%2Fassets%2Fimg%2FCard.png&w=128&q=75"
                  alt="OnlinePayment logo"
                  onClick={() => handleMethodSelect("online")}
                  style={{ width: "17%", height: "17%" }}
                  width={100}
                  height={100}
                />
              </div>

              {selectedMethod === "cash" && (
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
          <div className=" md:w-1/2 bg-gray-100 rounded-lg p-4">
            <div class=" px-4 py-8">
              <div class="flex flex-col md:flex-row justify-between">
                <div class="text-xl font-bold mb-4 md:mb-0">Your Order</div>
                <div class="flex items-center">
                  <a href="#" class="text-red-500" onClick={clearOrder}>
                    Clear Order
                  </a>
                </div>
              </div>

              <div class="border-b border-gray-200 mb-4 pb-4">
                <div class="flex justify-between mb-2">
                  <div>1x Sehr o Iftar Feast Deal</div>
                  <div class="font-bold">Rs. 4999</div>
                </div>
                <div class="flex justify-between mb-2">
                  <div>Large Pizza: Chicago Bulls (1x)</div>
                  <div>-</div>
                </div>
                <div class="flex justify-between mb-2">
                  <div>Large Drink: Sprite (1x)</div>
                  <div>-</div>
                </div>
                <div class="flex justify-between mb-2">
                  <div>
                    3x Crunchy Zing Burger, 1x Fries Bucket, 1x Small Choco
                    Bread
                  </div>
                  <div>-</div>
                </div>
                <div class="flex justify-between mb-2">
                  <div>Large Pizza: Ohio Thrill (1x)</div>
                  <div>-</div>
                </div>
              </div>

              <div class="flex justify-between mb-4">
                <div>Subtotal</div>
                <div class="font-bold">Rs. 4999</div>
              </div>

              <div class="flex justify-between mb-4">
                <div>Delivery Fee</div>
                <div class="font-bold">Rs. 150</div>
              </div>

              <div class="flex justify-between border-b border-gray-200 pb-4 mb-4">
                <div>Grand Total</div>
                <div class="font-bold">Rs. 5149</div>
              </div>

              <div class="text-gray-600 mb-4">
                Note: Your order will be delivered within 45 to 60 minutes.
              </div>

              <button
                onClick={() => {
                  if (isCustomerDetailsIncomplete()) {
                    setSuccessMessage("Please enter your details");
                    setShowItemAdded(true);
                    setTimeout(() => {
                      setShowItemAdded(false);
                      setSuccessMessage(null);
                    }, 3000);
                  } else {
                    handleSubmit();
                    setTimeout(() => {
                      setShowItemAdded(false);
                      setSuccessMessage(null);
                    }, 3000);
                  }
                }}
                class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md w-full"
              >
                Place Order
              </button>

              <div class="text-center mt-4">
                <div
                  // href="#"
                  onClick={() => router.push("/")}
                  class="text-gray-500 hover:text-red-500"
                >
                  Continue to Add More Items
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading && <Loader />}
        {showItemAdded && successMessage && (
          <ResponseMessage message={successMessage} />
        )}
      </div>
    </>
  );
}
