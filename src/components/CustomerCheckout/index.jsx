"use client";
import { createCustomerData, createOrdersData } from "@/src/routes/apiRequests";
import Image from "next/image";
import Image1 from "next/legacy/image";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../Navbar/cartContext";
import Loader from "../Customization/Loader";
import { ResponseMessage } from "../Customization";
import { useRouter } from "next/navigation";
import {
  clearCart,
  selectCartItems,
  selectTotalAmountItems,
} from "@/src/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import Link from "next/link";

export default function CustomerCheckout() {
  const disptach = useDispatch();
  const cartItem = useSelector(selectCartItems);
  const subTotal = useSelector(selectTotalAmountItems);
  var grandTotal = subTotal;
  const deliveryFee150 = 150;
  const deliveryFee0 = 0;
  const [orderPlaced, setOrderPlaced] = useState(false);

  // if (subTotal > 0) {
  //   var grandTotal = subTotal + 150;
  // } else {
  //   var grandTotal = subTotal + deliveryFee;
  // }
  const [selectedMethod, setSelectedMethod] = useState(null);
  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const { orderData } = useContext(OrderContext);

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      const forbiddenKeys = ["F5", "F12", "Control", "Shift", "r"];
      if (forbiddenKeys.includes(event.key)) {
        event.preventDefault();
      }
    };

    const handleBeforeUnload = (event) => {
      event.returnValue = "You will be redirected to the home page.";
      router.replace("/");
      window.history.forward();
      window.location.href = "/";
      window.history.replaceState(null, null, "/");
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [router]);

  const handleSubmit = async () => {
    setLoading(true);
    if (orderData.items.length === 0) {
      setSuccessMessage("Your Cart is empty");
      setShowItemAdded(true);
      clearForm();
      setLoading(false);
      setTimeout(() => {
        setShowItemAdded(false);
        setSuccessMessage(null);
      }, 3000);
      return;
    }

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
        setOrderPlaced(true);
      }, 2500);
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
    orderData.items = [];
    setSuccessMessage("Order cleared successfully!");
    setShowItemAdded(true);
    setTimeout(() => {
      setShowItemAdded(false);
      setSuccessMessage(null);
    }, 3000);
  };
  const handleClearOrderAndRedirect = () => {
    clearOrder();
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <>
      <nav className="relative w-full bg-[#fbfbff]">
        {/* california logo */}
        <div className="flex items-center px-4 py-2 h-14 md:justify-center lg:justify-center lg:h-16">
          <div className="relative z-10 w-16 aspect-square  md:w-20 lg:bg-[#fbfbff] lg:rounded-full lg:mb-[-3.5rem] lg:w-24 lg:border-b-2">
            <Image1
              src="https://www.californiapizza.com.pk/_next/image?url=https%3A%2F%2Fconsole.indolj.io%2Fupload%2F1658409985-Logo-california.png&w=128&q=75"
              alt="California Pizza Logo"
              width={10}
              height={10}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        </div>
        {/* phone number */}
        <div className="absolute p-3 items-center flex z-10 right-0 top-0 md:left-0 md:top-0 lg:left-0 lg:mb-[-18px] lg:top-[-1.9px]">
          <Link href="/">
            <div className="flex bg-red-600 text-white font-extrabold lg:text-sm text-[10px] p-2 lg:p-3 rounded-lg">
              <Image
                src="/assets/phone.png"
                alt="phone"
                width={0}
                height={0}
                className="pr-1 w-4 h-3 mt-[1px] lg:w-5 lg:h-4 lg:mt-[2px]"
              />
              <span className="">034-336-034-31</span>
            </div>
          </Link>
        </div>
      </nav>
      {/* california logo */}
      {/* <div className="flex items-center px-4 py-2 h-4 md:justify-center lg:justify-center lg:h-16">
        <div className="relative z-10 w-16 aspect-square  md:w-20 lg:bg-white lg:rounded-full lg:mb-[-3.5rem] lg:w-24 lg:border-b-2">
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
            </div>
      </div> */}
      <div className="container mx-auto px-4 py-8 pt-3 md:pt-7 lg:pt-20">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          {/* Order Summary Section */}
          {!orderPlaced && (
            <div className="w-full  xl:w-full lg:w-full md:w-1/2 bg-gray-100 rounded-lg p-4 md:mr-4">
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
                        setCustomerInfo({
                          ...customerInfo,
                          name: e.target.value,
                        })
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
                      type="text"
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
                  type="text"
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
                  type="text"
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
          )}

          {/* ---------------------------------------------- */}
          {/* Order Details Section */}
          <div className=" md:w-1/2 xl:w-full lg:w-full bg-gray-100 rounded-lg p-4">
            <div class=" px-4 py-8 flex flex-col h-full justify-between">
              <div class="flex flex-col md:flex-row justify-between pb-3">
                <div class="text-xl font-bold mb-4 md:mb-0">Your Order</div>
                {!orderPlaced && cartItem.length > 0 && (
                  <div class="flex items-center">
                    <a
                      href="#"
                      class="text-red-500"
                      onClick={handleClearOrderAndRedirect}
                    >
                      Clear Order
                    </a>
                  </div>
                )}
              </div>

              <div className="">
                <div
                  class="border-b border-gray-200 mb-4 pb-4 overflow-y-auto"
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                  {cartItem.length > 0 ? (
                    cartItem.map((item) => (
                      <div
                        class="border-b border-gray-200 mb-4 pb-4 pr-4"
                        key={item._id}
                      >
                        <div class="flex justify-between mb-2">
                          <div>Image</div>
                          <div className="">
                            <Image
                              src={item.imageUrl}
                              width={100}
                              height={100}
                              alt="banner image"
                              className="w-12 h-12 rounded-lg"
                              priority
                            />
                          </div>
                        </div>
                        <div class="flex justify-between mb-2">
                          <div>Name </div>
                          <div class="font-bold">{item.name}</div>
                        </div>
                        <div class="flex justify-between mb-2">
                          <div>Quantity</div>
                          <div>{item.quantity}</div>
                        </div>
                        <div class="flex justify-between mb-2">
                          <div>Price</div>
                          <div>{item.price}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div
                      class="text-gray-600 text-center flex font-bold xl:text-2xl lg:text-lg justify-center items-center align-middle h-full"
                      style={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Your cart is empty
                    </div>
                  )}
                </div>

                <div class="flex justify-between mb-4">
                  <div>Subtotal</div>
                  <div class="font-bold">Rs. {subTotal}</div>
                </div>

                <div class="flex justify-between mb-4">
                  <div>Delivery Fee</div>
                  <div class="font-bold">
                    Rs. {subTotal > 0 ? deliveryFee150 : deliveryFee0}
                  </div>
                </div>

                <div class="flex justify-between border-b border-gray-200 pb-4 mb-4">
                  <div>Grand Total</div>
                  <div class="font-bold">
                    Rs.
                    {subTotal > 0
                      ? grandTotal + deliveryFee150
                      : grandTotal + deliveryFee0}
                  </div>
                </div>
                {orderPlaced && (
                  <div class="text-gray-600 mb-4">
                    Note: Your order will be delivered within 45 to 60 minutes.
                  </div>
                )}

                {!orderPlaced ? (
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
                ) : (
                  <div class="bg-gray-500 text-center  text-white font-bold py-2 px-4 rounded-md w-full">
                    <div class="flex space-x-2 justify-center items-center text-sm lg:text-lg">
                      <span class="sr-only">Loading...</span>
                      Preparing your order
                      <div class="lg:h-2 lg:w-2 h-1 w-1 mt-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div class="lg:h-2 lg:w-2 h-1 w-1 mt-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div class="lg:h-2 lg:w-2 h-1 w-1 mt-1 bg-white rounded-full animate-bounce"></div>
                    </div>
                  </div>
                )}
                {!orderPlaced &&
                  (cartItem.length > 0 ? (
                    <div class="text-center mt-4 cursor-pointer">
                      <div
                        onClick={() => router.push("/")}
                        class="text-gray-500 hover:text-red-500"
                      >
                        Continue to Add More Items
                      </div>
                    </div>
                  ) : (
                    <div
                      class="text-center mt-4 cursor-pointer hover:text-red-500 text-gray-500"
                      onClick={() => router.push("/")}
                    >
                      Click here to add items to the cart
                    </div>
                  ))}
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
