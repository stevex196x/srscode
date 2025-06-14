import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { ClientShell } from '@/components/ClientShell/ClientShell';
import { theme } from '../theme';

export const metadata = {
  title: 'SRScode',
  description: 'SRScode is a space repetition system for software engineering interview questions.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ClientShell>{children}</ClientShell>
        </MantineProvider>
      </body>
    </html>
  );
}
