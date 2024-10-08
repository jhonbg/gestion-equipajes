/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useCallback, useEffect, useState } from "react";
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
import Footer from "@/components/organism/Footer/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Form, FormField, FormItem } from "@/components/ui/form";
import axios from "axios";

const FormSchema = z.object({
    cabinLuggage1: z.boolean(),
    cabinLuggage2: z.boolean(),
    storeLuggage1: z.number(),
    storeLuggage2: z.number(),
    specialLuggage1: z.number(),
    specialLuggage2: z.number(),
    specialLuggage3: z.number(),
    specialLuggage4: z.number(),
});

function Equipajes() {
    const [passengers, setPassengers] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            cabinLuggage1: true,
            cabinLuggage2: false,
            storeLuggage1: 0,
            storeLuggage2: 0,
            specialLuggage1: 0,
            specialLuggage2: 0,
            specialLuggage3: 0,
            specialLuggage4: 0,
        },
    });

    const calculateTotalPrice = useCallback(() => {
        const {
            cabinLuggage2,
            storeLuggage1,
            storeLuggage2,
            specialLuggage1,
            specialLuggage2,
            specialLuggage3,
            specialLuggage4,
        } = form.getValues();

        const calculatedTotal =
            (cabinLuggage2 ? 53900 : 0) +
            storeLuggage1 * 49900 +
            storeLuggage2 * 49900 +
            specialLuggage1 * 49900 +
            specialLuggage2 * 49900 +
            specialLuggage3 * 49900 +
            specialLuggage4 * 49900;

        return calculatedTotal;
    }, [form.getValues()]);

    function onSubmit(data: any) {
        console.log(data);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    const getReservationData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/reservation"
            );

            setPassengers(response.data.passengers.length);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getReservationData();
    }, []);

    useEffect(() => {
        const newTotal = calculateTotalPrice();
        setTotalPrice(newTotal);
    }, [form.getValues(), calculateTotalPrice]);

    return (
        <>
            <Navbar />
            <Layout>
                <div className="w-3/4 flex justify-start">
                    <h1 className="text-3xl text-[#1A4F6E] font-semibold my-3 text-left">
                        Personaliza tu viaje
                    </h1>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
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
                                            <FormField
                                                control={form.control}
                                                name="cabinLuggage1"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <LuggageCardRadioButton
                                                            title="1 Bolso o mochila pequeña"
                                                            description="Bajo el asiento delantero"
                                                            radioLabel="Bolsa o mochila pequeña incluida"
                                                            onChange={
                                                                field.onChange
                                                            }
                                                            checked={
                                                                field.value
                                                            }
                                                        />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="cabinLuggage2"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <LuggageCardRadioButton
                                                            title="1 Bolso o mochila
                                                        pequeña"
                                                            description="+ 1 equipaje de mano"
                                                            radioLabel="Ambos por COP 
                                                            "
                                                            price={53900}
                                                            onChange={
                                                                field.onChange
                                                            }
                                                            checked={
                                                                field.value
                                                            }
                                                        />
                                                    </FormItem>
                                                )}
                                            />
                                        </LuggageSectionLayout>

                                        <LuggageSectionTitle
                                            text1="¿Agregas"
                                            text2="equipaje de bodega?"
                                        />

                                        <LuggageSectionLayout>
                                            <FormField
                                                control={form.control}
                                                name="storeLuggage1"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <LuggageCardAdd
                                                            title="15kg"
                                                            price={49900}
                                                            icon={MaletaIcon}
                                                            maxAmount={3}
                                                            onChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="storeLuggage2"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <LuggageCardAdd
                                                            title="23kg"
                                                            description="Agrega esto por"
                                                            price={49900}
                                                            icon={MaletaIcon}
                                                            maxAmount={3}
                                                            onChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormItem>
                                                )}
                                            />
                                        </LuggageSectionLayout>

                                        <LuggageCardAccordion>
                                            <FormField
                                                control={form.control}
                                                name="specialLuggage1"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <LuggageCardAdd
                                                            title="Instrumento musical 15kg"
                                                            price={49900}
                                                            icon={GuitarIcon}
                                                            onChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="specialLuggage2"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <LuggageCardAdd
                                                            title="Equipo deportivo 15kg"
                                                            price={49900}
                                                            icon={SportIcon}
                                                            onChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="specialLuggage3"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <LuggageCardAdd
                                                            title="Equipos adiovisuales 15kg"
                                                            price={49900}
                                                            icon={LigthsIcon}
                                                            onChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="specialLuggage4"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <LuggageCardAdd
                                                            title="Guacal con mascota 15kg"
                                                            price={49900}
                                                            icon={MascotIcon}
                                                            onChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormItem>
                                                )}
                                            />
                                        </LuggageCardAccordion>
                                    </CardContent>
                                    <CardFooter className="bg-[#F1F5F9] flex justify-between pt-5 rounded-lg">
                                        <span className="font-bold">
                                            Total equipaje
                                        </span>
                                        <span className="font-bold">
                                            COP {totalPrice}
                                        </span>
                                    </CardFooter>
                                </Card>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                {passengers > 1 ? (
                                    <Button
                                        type="submit"
                                        className="bg-[#1A4F6E] text-white hover:bg-[#133d56]"
                                    >
                                        Agregar y Continuar
                                    </Button>
                                ) : (
                                    <Button
                                        type="submit"
                                        className="bg-[#1A4F6E] text-white hover:bg-[#133d56]"
                                    >
                                        Enviar
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </form>
                </Form>
            </Layout>
            <Footer />
        </>
    );
}

export default Equipajes;
