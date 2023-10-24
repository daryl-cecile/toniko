import { Inter, Caveat } from "next/font/google"
import localFont from 'next/font/local'

export const inter = Inter({
	subsets: ['latin', 'vietnamese'],
	display: 'swap',
});

export const caveat = Caveat({
	subsets: ['latin'],
	display: 'swap',
});

export const pecita = localFont({
	src: '../public/Pecita.otf',
	display: 'swap',
});

export const courier = localFont({
	src: '../public/Courier Regular.ttf',
	display: 'swap',
});