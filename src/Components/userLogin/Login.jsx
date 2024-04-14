import React, { useState } from "react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(true);
  const [otp, setOtp] = useState(false);

  const handleSendOtp = () => {
    setPhoneNumber(false);
    setOtp(true);
  };

  const handleVerifyAccount = () => {
    // Implement your verification logic here
  };

  const handleResendOtp = () => {
    // Implement your resend OTP logic here
  };

  return (
    <div>
      <div>
        <div className="flex justify-center items-center h-screen  bg-gray-100 ">
          <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-12 ">
            {phoneNumber && (
              <div class="relative bg-white px-6 pt-10 pb-9 w-[550px] shadow-xl mx-auto max-w-lg rounded-2xl">
                <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
                  <div class="flex flex-col items-center justify-center text-center space-y-2 ">
                    <div class="font-semibold text-3xl">
                      <p>Enter Phone</p>
                    </div>
                    <div class="flex flex-row text-sm font-medium text-gray-400">
                      <p>
                        <span>otp send to +1234567890</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <form action="" method="post">
                      <div class="flex flex-col space-y-16 ">
                        <div class="flex flex-row items-center justify-between mx-auto w-full ">
                          <div class="h-5 w-full">
                            <div class="relative">
                              <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none ">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 19 18">
                                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                </svg>
                              </div>
                              <input
                                type="text"
                                id="phone-input"
                                aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        {/* Send OTP */}
                        <div class="flex flex-col space-y-5">
                          <div>
                            <button
                              onClick={handleSendOtp}
                              class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                              Send OTP
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {otp && (
              <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-[550px] max-w-lg rounded-2xl">
                <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
                  <div class="flex flex-col items-center justify-center text-center space-y-2">
                    <div class="font-semibold text-3xl">
                      <p>Enter OTP</p>
                    </div>
                    <div class="flex flex-row text-sm font-medium text-gray-400">
                      <p>
                        We have sent a code to your email ba**@dipainhouse.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <form action="" method="post">
                      <div class="flex flex-col space-y-16">
                        <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                          {/* You can render the OTP input fields here */}
                        </div>

                        <div class="flex flex-col space-y-5">
                          <div>
                            <button
                              onClick={handleVerifyAccount}
                              class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                              Verify Account
                            </button>
                          </div>

                          <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                            <p>Didn't receive code?</p>{" "}
                            <a
                              onClick={handleResendOtp}
                              class="flex flex-row items-center text-blue-600"
                              href="#">
                              Resend
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
