import React from "react";
import Image from "next/image";
import Link from "next/link";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    // @ts-ignore
    if (this?.state?.errorInfo) {
      // You can render any custom fallback UI
      return (
        <React.Fragment>
          <div className="flex items-center justify-center flex-col w-screen mt-40 rounded-2xl">
            <div className="flex flex-col justify-center items-center gap-4 bg-white dark:glass p-6 rounded-2xl overflow-hidden">
              <Image
                src={"/something_went_wrong.png"}
                className="mx-auto d-block mb-5 img-fluid"
                width={200}
                height={200}
                alt="..."
              />

              <h1 className="display-1 mb-3 px-4 font-weight-bold">
                Something went wrong
              </h1>
              <h3 className="font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50">
                There was an error, please try again later.
              </h3>
              <p>
                The app encountered an internal error and was unable to complete
                your request.
              </p>
              <p>
                <Link href={"/"} passHref>
                  <button className="btn-primary flex p-4 px-5 rounded-2xl overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <span className="ml-2">Go Home</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }

    // @ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;
