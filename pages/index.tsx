import Head from 'next/head'
import Header from '../components/Header/index'
import {Paper} from "@material-ui/core";
import Content from "../components/Content/Content";

export default function Home() {
    // @ts-ignore
    return (
        <div>
            <Head>
                <title>RJournal</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                            rel="stylesheet"/>
            </Head>
            <Header/>
            <div>
                <div className='leftSide'></div>
                <div className='content'>
                    <Content/>
                </div>
                <div className='rightSide'></div>
            </div>
        </div>
    )
}
