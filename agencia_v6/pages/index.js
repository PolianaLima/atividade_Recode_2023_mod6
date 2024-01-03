import Head from 'next/head'
import BannerBusca from "@/components/BannerBusca";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <Head>
                <title>Agencia de Viagens Home</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <BannerBusca/>

                <div className="container-sm mt-5 mb-5">
                    <h1 className="container text-center text-warning"> VIAJE CONOSCO</h1>
                    <h3 className="container text-center mb-4">
                        Para destinos maravilhosos!!
                    </h3>

                    <div className="row row-sm-cols-3">
                        <Link href="/promocoes"
                              className="col-sm mb-3">
                            <img className="w-100" src="/img/viagem_rio_janeiro.jpg"/>
                        </Link>

                        <Link href="/promocoes"
                              className="col-sm mb-3">
                            <img className="w-100" src="/img/viagem_fernando_noronha.jpg"/>
                        </Link>

                        <Link href="/promocoes" className="col-sm mb-3">
                            <img className="w-100" src="/img/viagens_promo.jpg"/>
                        </Link>
                    </div>
                </div>

                <div className="container mb-5 ">
                    <h1 className="container text-center text-warning">
                        PORQUE NOS ESCOLHER?
                    </h1>
                    <h3 className="container text-center mb-4">
                        Veja as vantagens de viajar conosco
                    </h3>

                    <div className="container d-sm-flex justify-content-between">
                        <div className="card d-sm-flex flex-row p-3 mb-3 shadow w-100 me-3 ">
                            <div className="card-body">
                                <h4 className="card-title w-100  ">Preço Garantido</h4>
                                <p className="card-text w-100 ">
                                    Aqui voce encontra os melhores preços. Promoções imperdiveis
                                    com pacotes personalizados especialmente para voce!!
                                </p>
                            </div>
                        </div>

                        <div className="card d-sm-flex flex-row p-3 mb-3 shadow w-100 me-3">
                            <div className="card-body">
                                <h4 className="card-title w-100">Destinos Variados</h4>
                                <p className="card-text w-100">
                                    Escolha o seu melhor destinos. Aqui temos destinos para todos
                                    os gostos e Historias
                                </p>
                            </div>
                        </div>

                        <div className="card d-sm-flex flex-row p-3 mb-3 shadow w-100 ">
                            <div className="card-body">
                                <h4 className="card-title w-100">Serviço de Qualidade</h4>
                                <p className="card-text w-100">
                                    Oferecemos os melhores serviços para você com segurança e
                                    praticidade. Alem de segurança e comodidade
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container text-center mb-5">
                    <div className="row">
                        <div className="col">
                            <img className="rounded" src="/img/pesquise.webp" alt=""/>
                            <h4 className="text-center text-warning">Pesquise</h4>
                        </div>
                        <div className="col">
                            <img className="rounded" src="/img/compre.webp" alt=""/>
                            <h4 className="text-center text-warning">Compre</h4>
                        </div>
                        <div className="col">
                            <img className="rounded" src="/img/viaje.webp" alt=""/>
                            <h4 className="text-center text-warning">Viaje</h4>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}