import React from 'react'
import './globals.css';
import Header from '@/components/header';
import Providers from './providers';
import Tabs from '@/components/Tabs';


const Layout = ({children}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
            <Header />
            <Tabs />
            {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;