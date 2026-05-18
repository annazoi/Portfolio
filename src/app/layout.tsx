import type { Metadata } from 'next';
import { DM_Sans, Ms_Madi, Noto_Sans_Mono, Quicksand } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
	subsets: ['latin'],
	variable: '--font-dm-sans',
});

const msMadi = Ms_Madi({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-ms-madi',
});

const quicksand = Quicksand({
	subsets: ['latin'],
	variable: '--font-quicksand',
});

const notoSansMono = Noto_Sans_Mono({
	subsets: ['latin'],
	variable: '--font-noto-sans-mono',
});

export const metadata: Metadata = {
	title: 'Anna Zoi | Full-Stack Developer',
	description: 'Personal portfolio of Anna Zoi, a Full-Stack Developer specializing in intuitive digital products.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${dmSans.className} ${dmSans.variable} ${msMadi.variable} ${quicksand.variable} ${notoSansMono.variable} antialiased selection:bg-white/15 selection:text-foreground`}
			>
				{children}
			</body>
		</html>
	);
}
