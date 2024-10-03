import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Layout from "@/components/organism/Layout/index";
import LuggageCardTitle from "@/components/molecules/LuggageCardTitle";
import LuggageTravelInfo from "@/components/atoms/LuggageTravelInfo";
import LuggageSectionTitle from "@/components/atoms/LuggageSectionTitle";
import LuggageCardRadioButton from "@/components/molecules/LuggageCardRadioButton";
import LuggageCardAdd from "@/components/molecules/LuggageCardAdd";
import LuggageSectionLayout from "@/components/organism/LuggageSectionLayout";
import LuggageCardAccordion from "@/components/organism/LuggageCardAccordion";

import MaletaIcon from "../../../public/reservas-icons/maleta.png";
import GuitarIcon from "../../../public/reservas-icons/guitarra.png";
import SportIcon from "../../../public/reservas-icons/deporte.png";
import MascotIcon from "../../../public/reservas-icons/mascota.png";
import LigthsIcon from "../../../public/reservas-icons/luces.png";
import Navbar from "@/components/organism/Navbar/index";
import Footer from "@/components/organism/Footer/index"

function Equipajes() {
    return (
        <div className="bg-[#F1F5F9]">
            <Navbar/>
            <Layout>
                <Card className="bg-[#F1F5F9] p-3 border-none shadow-none">
                    <CardHeader>
                        <CardTitle className="text-3xl text-black font-semibold">
                            Personaliza tu viaje
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Card>
                            <LuggageCardTitle />
                            <CardContent>
                                <Card>
                                    <CardHeader className="bg-[#F1F5F9] py-1 px-2 rounded-lg">
                                        <CardTitle className="flex gap-3">
                                            <LuggageTravelInfo
                                                title="Ida"
                                                active={true}
                                            />
                                            <LuggageTravelInfo
                                                title="Vuelta"
                                                active={false}
                                            />
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="py-5">
                                        <LuggageSectionTitle
                                            text1="Selecciona qué"
                                            text2="llevarás en cabina"
                                        />

                                        <LuggageSectionLayout>
                                            <LuggageCardRadioButton
                                                title="1 Bolso o mochila
                                                            pequeña"
                                                description="Bajo el asiento
                                                            delantero"
                                                radioLabel="Bolsa o mochila
                                                                pequeña incluida"
                                            />

                                            <LuggageCardRadioButton
                                                title="1 Bolso o mochila
                                                            pequeña"
                                                description="+ 1 equipaje de mano"
                                                radioLabel="Ambos por COP 
                                                                "
                                                price="53.900"
                                            />
                                        </LuggageSectionLayout>

                                        <LuggageSectionTitle
                                            text1="¿Agregas"
                                            text2="equipaje de bodega?"
                                        />

                                        <LuggageSectionLayout>
                                            <LuggageCardAdd
                                                title="15kg"
                                                price="49.900"
                                                icon={MaletaIcon}
                                            />

                                            <LuggageCardAdd
                                                title="23kg"
                                                description="Agrega esto por"
                                                price="49.900"
                                                icon={MaletaIcon}
                                            />
                                        </LuggageSectionLayout>
                                        <LuggageCardAccordion>
                                            <LuggageCardAdd
                                                title="Instrumento musical 15kg"
                                                price="49.900"
                                                icon={GuitarIcon}
                                            />

                                            <LuggageCardAdd
                                                title="Equipo deportivo 15kg"
                                                price="49.900"
                                                icon={SportIcon}
                                            />

                                            <LuggageCardAdd
                                                title="Equipos adiovisuales 15kg"
                                                price="49.900"
                                                icon={LigthsIcon}
                                            />

                                            <LuggageCardAdd
                                                title="Guacal con mascota 15kg"
                                                price="49.900"
                                                icon={MascotIcon}
                                            />
                                        </LuggageCardAccordion>
                                    </CardContent>
                                    <CardFooter className="bg-[#F1F5F9] flex justify-between pt-5 rounded-lg">
                                        <span className="font-bold">
                                            Total equipaje
                                        </span>
                                        <span className="font-bold">
                                            COP 106.800
                                        </span>
                                    </CardFooter>
                                </Card>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button>Agregar y Continuar</Button>
                            </CardFooter>
                        </Card>
                    </CardContent>
                </Card>
            </Layout>
            <Footer />
        </div>    
    );
}

export default Equipajes;
