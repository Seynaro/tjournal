import Head from 'next/head'
import Header from '../components/Header/index'

export default function Home() {
    return (
        <div>
            <Head>
                <title>RJournal</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
        </div>
    )
}
