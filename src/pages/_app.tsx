import "@/styles/globals.css";
import "@/styles/icons.css";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css'
import type {AppProps} from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import {HydrationBoundary, QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import {useState} from "react";


const quicksand = Quicksand({
    subsets: ['latin']
})

const lato = Lato({
    weight: ['100', '300',],
    subsets: ['latin'],
    variable: '--font-lato'
})

export default function App({Component, pageProps}: AppProps) {


    const [queryClient] = useState(()=> new QueryClient({
        defaultOptions: {
            queries:{
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry: 0,
                staleTime: 60 * 1000,
            }
        }
    }));
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${quicksand.style.fontFamily}, sans-serif;
                    --font-lato: ${lato.style.fontFamily}, sans-serif;
                }
            `}</style>
            <QueryClientProvider client={queryClient} >
                <HydrationBoundary state={pageProps.dehydratedState}>
                    <div id={"portal"}></div>
                <Layout>
                    <Component {...pageProps} />
                    <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={true} draggable={false} theme={"light"} position={"top-right"}/>
                </Layout>
                </HydrationBoundary>
            </QueryClientProvider>
        </>
    )
}
