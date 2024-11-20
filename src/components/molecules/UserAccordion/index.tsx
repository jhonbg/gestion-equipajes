import React,{useState, useEffect} from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import axios from 'axios';
import { usePrice } from '@/components/atoms/PriceContext';
import Image from "next/image";
import UserIcon from "../../../../public/reservas-icons/image 14.svg"
import Bolso from "../../../../public/reservas-icons/bolso.png"
import Maletas from "../../../../public/reservas-icons/maletas.png"
import Maleta from "../../../../public/reservas-icons/maleta.png"
import SportIcon from "../../../../public/reservas-icons/deporte.png"
import Music from "../../../../public/reservas-icons/guitarra.png"
import Fragile from "../../../../public/reservas-icons/fragil.png"
import Pet from "../../../../public/reservas-icons/mascota.png"
import Audiovisuales from "../../../../public/reservas-icons/luces.png"

interface Props {
  id: number;
}

interface Luggage {
  type_luggage: string;
  quantity: number;
}

const Index: React.FC<Props> = ({id}) => {
  const [uniqueIcons, setUniqueIcons] = useState<any[]>([]);
  const {totalPrice, setTotalPrice} = usePrice();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const luggageRendering = (equipaje: string) => {
    switch (equipaje) {
      case "Bolso de mano":
      case "Mochila":
        return { icon: Bolso, price: 0 };
      case "Maleta de mano":
        return { icon: Maletas, price: 53900 };
      case "Maleta pequeña":
      case "Maleta mediana":
      case "Maleta grande":
      case "Maleta con ruedas":
        return { icon: Maleta, price: 49900 };
      case "Equipaje deportivo":
      case "Maleta deportiva":
        return { icon: SportIcon, price: 49900 };
      case "Caja de equipo":
        return { icon: Music, price: 49900 };
      case "Guacal con mascota":
        return { icon: Pet, price: 49900 };
      case "Equipos adiovisuales":
        return { icon: Audiovisuales, price: 49900 };
      case "Equipaje frágil":
        return { icon: Fragile, price: 49900 };
      default:
        return { icon: null, price: 0 };
    }
  };

    useEffect(() => {
        const fetchBookingData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8080/api/bookings/${id}`
            );
            const luggageList: Luggage[] = response.data.luggageList;

            let total = 0;
            const icons = new Set();

            luggageList.forEach((item) => {
              const {icon, price} = luggageRendering(item.type_luggage);
              if(icon){
                icons.add(icon);
              }
              total = (item.quantity * price) + total;
            });

            setUniqueIcons(Array.from(icons));
            setTotalPrice(total);
            setLoading(false);
          } catch(err) {
            setError('Error al cargar los datos');
            setLoading(false);
          }
        };
    
        fetchBookingData();
      }, [id, setTotalPrice]);

    const formatPrice = (price: number) => {
        return price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      };

  return (
    <Card className="w-full border-none shadow-none m-0">
            <CardHeader className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-6 items-center">
                    <Image
                        src={UserIcon}
                        alt="usuario"
                        width={44}
                        height={44}
                    ></Image>
                    <div className='mr-2'>
                        <CardTitle className="font-bold">
                            Pasajero
                        </CardTitle>
                        <CardDescription>
                            Bratt pit
                        </CardDescription>
                    </div>
                    <div className='w-6 h-6 flex items-center ml-2'>
                        {uniqueIcons.map((icon, index)=>(
                            <Image key={index} src={icon} alt='icono de equipaje'></Image>
                        ))}
                    </div>
                </div>
                <div>
                    <CardTitle className="font-bold">
                       {formatPrice(totalPrice)}
                    </CardTitle>
                </div>
            </CardHeader>
        </Card>
  )
}

export default Index
