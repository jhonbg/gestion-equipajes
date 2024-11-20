"use client";
import React from "react";
import {
    Card
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/organism/Layout/index";
import LuggageAccordion from "@/components/organism/LuggageAccordion";
import Navbar from "@/components/organism/Navbar/index";
import Footer from "@/components/organism/Footer/index";
import { usePrice } from "@/components/atoms/PriceContext";


function EquipajesConfirmado() {
    const { totalPrice } = usePrice();

    const formatPrice = (price: number) => {
        return price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      };

    return (
        <div className=" flex flex-col min-h-screen justify-between bg-[#F1F5F9]">
            <Navbar />
            <Layout>
                <div className="w-1/3">
                    <Card className="p-2">
                        <Card className="bg-[#F1F5F9] text-[#1A4F6E] font-bold text-xl p-2 flex flex-row gap-2 items-center m-2">
                            <Button className="bg-white border-none p-2 flex items-center justify-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24"
                                    className="w-full h-full text-current"
                                >
                                    <path 
                                        fill="black" 
                                        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                                    />
                                </svg>
                            </Button>
                            Resumen del equipaje
                        </Card>
                        <LuggageAccordion/>
                        <Card className="font-bold justify-between flex flex-row m-2 p-2">
                            <div>
                                Total
                            </div>
                            <div>
                                {formatPrice(totalPrice)}
                            </div>
                        </Card>
                    </Card>
                </div>
            </Layout>
            <Footer/>
        </div>
    );
}

export default EquipajesConfirmado;