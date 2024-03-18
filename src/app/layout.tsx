import "./globals.css"
import { Montserrat } from "next/font/google"
import { Providers } from "./providers"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata = {
    title: "Diego Santos",
    description: "A Frontend Developer Portfolio",
    icons: {
        icon: [
            {
                type: "image/svg+xml",
                url: "/icons/DiegoLogo.svg",
            },
        ],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
