import clsx            from 'clsx';
import type {Metadata} from 'next';
import {Poppins}       from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    style: 'normal',
});

export const metadata: Metadata = {
    title: {
        template: '%s | KML',
        default: 'KML',
    },
    description: 'Share your sheets automatically',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body className={clsx(poppins.className, 'my-8 mx-16')}>{children}</body>
        </html>
    );
}
