import React from 'react';
import Link from "next/link";
import {format, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";

function CardVoos({voo}) {
    return (
        <div className="w-100 shadow rounded-4  d-sm-flex justify-content-between mb-5">
            <div className="w-100 me-5 p-5">
                <div className="d-sm-flex flex-row">
                    <div className="me-5 w-100">
                        <img width="20" height="20" src="https://img.icons8.com/ios/50/airplane-mode-on--v1.png"
                             alt="airplane-mode-on--v1"/>
                        <span className="ms-2 fw-bold">IDA</span>
                        <p className=" text-body-secondary">{format(parseISO(voo.dataPartida), 'eee d MMM yyyy', {locale: ptBR})}</p>
                    </div>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <div className="me-5 w-100">
                            <p className="text-body-secondary">{voo.origem}</p>
                        </div>
                        <p className="w-100"> - </p>
                        <div className="w-100">
                            <p className="text-body-secondary">{voo.destino}</p>
                        </div>
                    </div>

                </div>

                <div className="d-sm-flex justify-content-between mt-4">
                    <p className="d-flex flex-column text-body-secondary "><span
                        className="fw-bold">
                        <img width="28" height="28" src="https://img.icons8.com/fluency/48/company.png" alt="company"/>
                        Empresa</span> {voo.empresa}</p>
                    <p className="d-flex flex-column text-body-secondary align-items-center"><span
                        className="fw-bold">
                        <img width="28" height="28" src="https://img.icons8.com/emoji/48/airplane-emoji.png"
                             alt="airplane-emoji"/>
                        Voo</span> {voo.numeroVoo}</p>
                    <p className="d-flex flex-column text-body-secondary align-items-center"><span
                        className="fw-bold">
                        <img width="30" height="30" src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                        Partida</span> {format(parseISO(voo.dataPartida), 'HH:mm', {locale: ptBR})}</p>
                    <p className="d-flex flex-column text-body-secondary align-items-center"><span
                        className="fw-bold">
                        <img width="25" height="25" src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                        Duração</span> {voo.duracao}</p>

                </div>
            </div>

            <div className="w-100 border-start p-5" style={{maxWidth: 400}}>
                <div className="w-100  d-sm-flex flex-column align-items-end">
                    <p>Preço por Adulto</p>
                    <p className="fs-5 fw-bold">R$ {(voo.preco - (voo.preco * voo.desconto) / 100).toFixed(2)}</p>
                    <Link href="#" className="btn btn-success w-100">Comprar</Link>
                </div>
            </div>

        </div>
    );
}

export default CardVoos;