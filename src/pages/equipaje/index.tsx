import React from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import Layout from "@/components/organism/Layout/index";

import EquipajeIcon from "../../../public/reservas-icons/equipaje.png";
import BolsoIcon from "../../../public/reservas-icons/bolso.png";
import MaletasIcon from "../../../public/reservas-icons/maletas.png";
import MaletaIcon from "../../../public/reservas-icons/maleta.png";
import MusicIcon from "../../../public/reservas-icons/musica.png";
import GuitarIcon from "../../../public/reservas-icons/guitarra.png";
import SportIcon from "../../../public/reservas-icons/deporte.png";
import MascotIcon from "../../../public/reservas-icons/mascota.png";
import LigthsIcon from "../../../public/reservas-icons/luces.png";
import { Minus, Plus } from "lucide-react";

function Equipajes() {
    return (
        <Layout>
            <Card className="bg-[#F1F5F9] p-3">
                <CardHeader>
                    <CardTitle className="text-3xl text-black font-semibold">
                        Personaliza tu viaje
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between text-xl font-semibold">
                                <div className="flex gap-2">
                                    <Image
                                        src={EquipajeIcon}
                                        alt="logo de equipaje"
                                        width={24}
                                        height={24}
                                    ></Image>
                                    Equipaje
                                </div>
                                <Badge className="bg-[#E2E8F0] text-black hover:bg-[#E2E8F0]">
                                    Pasajero 1 de 1
                                </Badge>
                            </CardTitle>
                            <CardDescription className="text-xl">
                                Compra tu equipaje
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Card>
                                <CardHeader className="bg-[#F1F5F9] py-1 px-2 rounded-lg">
                                    <CardTitle className="flex gap-3">
                                        <span className="bg-white w-fit p-3 rounded-sm cursor-pointer">
                                            Ida
                                        </span>
                                        <span className="bg-transparent w-fit p-3 rounded-sm cursor-pointer">
                                            Vuelta
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="py-5">
                                    <Card>
                                        <CardHeader className="bg-[#F1F5F9] py-1 px-4 rounded-lg ">
                                            <CardTitle className="text-base">
                                                <p>
                                                    Selecciona qué{" "}
                                                    <span className="font-bold">
                                                        llevarás en cabina
                                                    </span>
                                                </p>
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Card className="py-0 my-3">
                                            <CardHeader className="flex gap-3 flex-row">
                                                <Image
                                                    src={BolsoIcon}
                                                    alt="bolso"
                                                    width={46}
                                                    height={46}
                                                ></Image>
                                                <div>
                                                    <CardTitle className="font-bold">
                                                        1 Bolso o mochila
                                                        pequeña
                                                    </CardTitle>
                                                    <CardDescription>
                                                        Bajo el asiento
                                                        delantero
                                                    </CardDescription>
                                                </div>
                                            </CardHeader>
                                            <hr />
                                            <CardContent className="mt-3">
                                                <RadioGroup>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem
                                                            value="option-one"
                                                            id="option-one"
                                                        />
                                                        <Label htmlFor="option-one">
                                                            Bolsa o mochila
                                                            pequeña incluida
                                                        </Label>
                                                    </div>
                                                </RadioGroup>
                                            </CardContent>
                                        </Card>

                                        <Card className="py-0 my-3">
                                            <CardHeader className="flex gap-3 flex-row">
                                                <Image
                                                    src={MaletasIcon}
                                                    alt="bolso"
                                                    width={45}
                                                    height={45}
                                                ></Image>
                                                <div>
                                                    <CardTitle className="font-bold">
                                                        1 Bolso o mochila
                                                        pequeña
                                                    </CardTitle>
                                                    <CardDescription>
                                                        <span className="font-bold text-black">
                                                            + 1 equipaje de mano
                                                        </span>{" "}
                                                        10Kg
                                                    </CardDescription>
                                                </div>
                                            </CardHeader>
                                            <hr />
                                            <CardContent className="mt-3">
                                                <RadioGroup>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem
                                                            value="option-one"
                                                            id="option-one"
                                                        />
                                                        <Label htmlFor="option-one">
                                                            Ambos por COP{" "}
                                                            <span>53.900</span>
                                                        </Label>
                                                    </div>
                                                </RadioGroup>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <Card>
                                        <CardHeader className="bg-[#F1F5F9] py-1 px-4 rounded-lg ">
                                            <CardTitle className="text-base font-">
                                                <p>
                                                    ¿Agregas{" "}
                                                    <span className="font-bold">
                                                        equipaje de bodega?
                                                    </span>
                                                </p>
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Card className="py-0 my-3">
                                            <CardHeader className="flex flex-row justify-between">
                                                <div className="flex flex-row gap-2">
                                                    <Image
                                                        src={MaletaIcon}
                                                        alt="bolso"
                                                        width={51}
                                                        height={51}
                                                    ></Image>
                                                    <div>
                                                        <CardTitle>
                                                            15 kg
                                                        </CardTitle>
                                                        <CardDescription className=" text-black">
                                                            <span className="font-bold">
                                                                COP 49.900
                                                            </span>
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 items-center ">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="rounded-full"
                                                    >
                                                        <Minus className="h-2 w-2" />
                                                    </Button>
                                                    <span>1</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="rounded-full"
                                                    >
                                                        <Plus className="h-2 w-2" />
                                                    </Button>
                                                </div>
                                            </CardHeader>
                                        </Card>

                                        <Card className="py-0 my-3">
                                            <CardHeader className="flex flex-row justify-between gap-3 ">
                                                <div className="flex flex-row gap-2">
                                                    <Image
                                                        src={MaletaIcon}
                                                        alt="bolso"
                                                        width={51}
                                                        height={51}
                                                    ></Image>
                                                    <div>
                                                        <CardTitle>
                                                            23 kg
                                                        </CardTitle>
                                                        <CardDescription className=" text-black">
                                                            Agrega esto por{" "}
                                                            <span className="font-bold">
                                                                COP 49.900
                                                            </span>
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 items-center ">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="rounded-full"
                                                    >
                                                        <Minus className="h-2 w-2" />
                                                    </Button>
                                                    <span>1</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="rounded-full"
                                                    >
                                                        <Plus className="h-2 w-2" />
                                                    </Button>
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    </div>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem
                                            value="item-1"
                                            className="border pr-2 py-0 rounded-md shadow-md"
                                        >
                                            <AccordionTrigger>
                                                <Card className="w-full border-none shadow-none m-0">
                                                    <CardHeader className="flex flex-row justify-between">
                                                        <div className="flex flex-row gap-2">
                                                            <Image
                                                                src={MusicIcon}
                                                                alt="bolso"
                                                                width={44}
                                                                height={44}
                                                            ></Image>
                                                            <div>
                                                                <CardTitle className="font-bold">
                                                                    Equipaje
                                                                    especial
                                                                </CardTitle>
                                                                <CardDescription>
                                                                    Deportivo,
                                                                    musical,
                                                                    audiovisual
                                                                </CardDescription>
                                                            </div>
                                                        </div>
                                                    </CardHeader>
                                                </Card>
                                            </AccordionTrigger>
                                            <AccordionContent className="grid grid-cols-2 grid-rows-2 gap-2 pl-3 pr-3">
                                                <Card className="py-0 my-3">
                                                    <CardHeader className="flex flex-row justify-between gap-3 ">
                                                        <div className="flex flex-row gap-2">
                                                            <Image
                                                                src={GuitarIcon}
                                                                alt="bolso"
                                                                width={46}
                                                                height={46}
                                                            ></Image>
                                                            <div>
                                                                <CardTitle>
                                                                    Instrumento
                                                                    musical 15
                                                                    Kg
                                                                </CardTitle>
                                                                <CardDescription className=" text-black">
                                                                    <span className="font-bold">
                                                                        COP
                                                                        49.900
                                                                    </span>
                                                                </CardDescription>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-1 items-center ">
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="rounded-full"
                                                            >
                                                                <Minus className="h-2 w-2" />
                                                            </Button>
                                                            <span>1</span>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="rounded-full"
                                                            >
                                                                <Plus className="h-2 w-2" />
                                                            </Button>
                                                        </div>
                                                    </CardHeader>
                                                </Card>
                                                <Card className="py-0 my-3">
                                                    <CardHeader className="flex flex-row justify-between gap-3 ">
                                                        <div className="flex flex-row gap-2">
                                                            <Image
                                                                src={SportIcon}
                                                                alt="bolso"
                                                                width={46}
                                                                height={46}
                                                            ></Image>
                                                            <div>
                                                                <CardTitle>
                                                                    Equipo
                                                                    deportivo 15
                                                                    Kg
                                                                </CardTitle>
                                                                <CardDescription className=" text-black">
                                                                    <span className="font-bold">
                                                                        COP
                                                                        49.900
                                                                    </span>
                                                                </CardDescription>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-1 items-center ">
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="rounded-full"
                                                            >
                                                                <Minus className="h-2 w-2" />
                                                            </Button>
                                                            <span>1</span>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="rounded-full"
                                                            >
                                                                <Plus className="h-2 w-2" />
                                                            </Button>
                                                        </div>
                                                    </CardHeader>
                                                </Card>
                                                <Card className="py-0 my-3">
                                                    <CardHeader className="flex flex-row justify-between gap-3 ">
                                                        <div className="flex flex-row gap-2">
                                                            <Image
                                                                src={LigthsIcon}
                                                                alt="bolso"
                                                                width={46}
                                                                height={46}
                                                            ></Image>
                                                            <div>
                                                                <CardTitle>
                                                                    Equipos
                                                                    audiovisuales
                                                                    15 Kg
                                                                </CardTitle>
                                                                <CardDescription className=" text-black">
                                                                    <span className="font-bold">
                                                                        COP
                                                                        49.900
                                                                    </span>
                                                                </CardDescription>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-1 items-center ">
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="rounded-full"
                                                            >
                                                                <Minus className="h-2 w-2" />
                                                            </Button>
                                                            <span>1</span>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="rounded-full"
                                                            >
                                                                <Plus className="h-2 w-2" />
                                                            </Button>
                                                        </div>
                                                    </CardHeader>
                                                </Card>
                                                <Card className="py-0 my-3">
                                                    <CardHeader className="flex flex-row justify-between gap-3 ">
                                                        <div className="flex flex-row gap-2">
                                                            <Image
                                                                src={MascotIcon}
                                                                alt="bolso"
                                                                width={46}
                                                                height={46}
                                                            ></Image>
                                                            <div>
                                                                <CardTitle>
                                                                    Guacal con
                                                                    mascota{" "}
                                                                </CardTitle>
                                                                <CardDescription className=" text-black">
                                                                    <span className="font-bold">
                                                                        COP
                                                                        49.900
                                                                    </span>
                                                                </CardDescription>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-1 items-center ">
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="rounded-full"
                                                            >
                                                                <Minus className="h-2 w-2" />
                                                            </Button>
                                                            <span>1</span>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="rounded-full"
                                                            >
                                                                <Plus className="h-2 w-2" />
                                                            </Button>
                                                        </div>
                                                    </CardHeader>
                                                </Card>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
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
    );
}

export default Equipajes;
