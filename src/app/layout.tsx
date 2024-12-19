import type { Metadata } from 'next';
import '@src/Styles/globals.css';
// import 'antd/dist/antd.css';
import 'antd/dist/reset.css';
import StoreProvider from '../lib/Redux/StoreProvider';
import { ConfigProvider } from 'antd';
import customTheme from '@src/theme/themeConfig';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Youni',
  description: 'Youni web app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`} suppressHydrationWarning>
        <ConfigProvider theme={customTheme}>
          <AntdRegistry>
            <StoreProvider>
              <>
                {children}
                <Toaster />
              </>
            </StoreProvider>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
