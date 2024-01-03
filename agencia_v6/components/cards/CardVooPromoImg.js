import React from 'react';
import Link from "next/link";
import {format, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";

function CardVooPromoImg({voo}) {
    return (
        <div className="card ms-2" style={{maxWidth:300, minHeight:640}}>
            <img src="img/img_card_padrao.jpg" className="card-img-top"
                 alt="Imagem do card da promoção"/>
            <div className="card-body d-flex flex-column justify-content-between ">
                <h5 className="fw-bold ">Destino:  {voo.destino} </h5>
                <hr/>
                <p>Saindo de {voo.origem}</p>
                <p>{format(parseISO(voo.dataPartida),'eee d MMM yyyy', {locale:ptBR})}</p>
                <p className="mt-4 mb-4 d-flex flex-row justify-content-between">

                    {voo.desconto !== 0 ? (
                        <>
                            <span className="text-bg-success p-2 rounded-3 "> OFERTA IMBATIVEL
                            </span>
                            <span
                                className="text-bg-danger p-2 rounded-circle">{voo.desconto}%
                            </span>
                        </>

                    ) : (

                        <div className="mb-5"></div>
                    )}
                </p>
                <hr/>
                <p className="fs-3 text-center fw-bold">
                    <sub>R$</sub> {(voo.preco).toFixed(2)}</p>
                <hr/>
                <Link href="#" className="btn btn-warning w-100">Comprar</Link>
            </div>
        </div>
    );
}

export default CardVooPromoImg;
