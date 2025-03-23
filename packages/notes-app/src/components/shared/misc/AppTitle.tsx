import React from "react";
import Head from "next/head";

interface AppTitleProps {
  title: string;
  separator?: string;
  children?: React.ReactNode;
}

const AppTitle = ({
  title,
  separator,
  children,
}: AppTitleProps): React.ReactElement => {
  const pageTitle: string =
    title + (separator || " - ") + process.env.NEXT_PUBLIC_COMPANY_NAME;

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        {children}
      </Head>
    </React.Fragment>
  );
};

export default AppTitle;
