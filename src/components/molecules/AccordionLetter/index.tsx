import React, { useEffect, useState, useCallback } from 'react'
import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { StaticImageData } from 'next/image';
import Bolso from "../../../../public/reservas-icons/bolso.png"
import Maletas from "../../../../public/reservas-icons/maletas.png"
import Maleta from "../../../../public/reservas-icons/maleta.png"
import SportIcon from "../../../../public/reservas-icons/deporte.png"
import Musical from "../../../../public/reservas-icons/musica.png"
import Pet from "../../../../public/reservas-icons/mascota.png"
import Audiovisuales from "../../../../public/reservas-icons/luces.png"
import Fragil from "../../../../public/reservas-icons/fragil.png"

interface Props {
  equipaje: string;
  numeros: number;
}

const Index: React.FC<Props> = ({equipaje, numeros}) => {
  const [icon, setIcon] = useState<StaticImageData | null>(null);
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState<number | null>(null);

  const luggageRendering = useCallback(() => {
    switch (equipaje) {
      case "Bolso de mano":
      case "Mochila":
        setIcon(Bolso);
        setTitle("Bolso o mochila pequeña");
        setDescripcion("Bajo el asiento delantero");
        setPrecio(0);
        break;
      case "Maleta de mano":
        setIcon(Maletas);
        setTitle("1 Bolso o mochila pequeña");
        setDescripcion("+ 1 equipaje de mano");
        setPrecio(53900);
        break;
      case "Maleta pequeña":
        setIcon(Maleta);
        setTitle("Maleta pequeña");
        setDescripcion("15kg");
        setPrecio(49900);
        break;
      case "Maleta mediana":
        setIcon(Maleta);
        setTitle("Maleta mediana");
        setDescripcion("18kg");
        setPrecio(49900);
        break;
      case "Maleta grande":
        setIcon(Maleta);
        setTitle("Maleta grande");
        setDescripcion("23kg");
        setPrecio(49900);
        break;
      case "Maleta con ruedas":
        setIcon(Maleta);
        setTitle("Maleta con ruedas");
        setDescripcion("23kg");
        setPrecio(49900);
        break;
      case "Equipaje deportivo":
      case "Maleta deportiva":
        setIcon(SportIcon);
        setTitle("Equipaje deportivo");
        setDescripcion("15kg");
        setPrecio(49900);
        break;
      case "Caja de equipo":
        setIcon(Musical);
        setTitle("Instrumento musical");
        setDescripcion("15kg");
        setPrecio(49900);
        break;
      case "Guacal con mascota":
        setIcon(Pet);
        setTitle("Guacal con mascota");
        setDescripcion("15kg");
        setPrecio(49900);
        break;
      case "Equipos adiovisuales":
        setIcon(Audiovisuales);
        setTitle("Equipos audiovisuales");
        setDescripcion("15kg");
        setPrecio(49900);
        break;
      case "Equipaje frágil":
        setIcon(Fragil);
        setTitle("Equipaje frágil");
        setDescripcion("Cuidado");
        setPrecio(49900);
        break;
    }
  }, [equipaje]);

  const formatPrice = (price: number) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    luggageRendering();
  }, [luggageRendering]);

  return (
    <Card className="border-none flex flex-row items-center mt-9 ml-14 mr-10 shadow-none">
      <span className="text-lg font-semibold">{numeros}</span>
      <div className="flex items-center justify-center flex-1">
        {icon && (
          <Image
            src={icon}
            alt="usuario"
            width={44}
            height={44}
          />
        )}
        <div className="flex flex-col">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{descripcion}</CardDescription>
        </div>
      </div>
      <span className="font-semibold">
        {precio !== null ? formatPrice(precio) : ""}
      </span>
    </Card>
  );
};

export default Index;
