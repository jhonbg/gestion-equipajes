import React, {useEffect, useState} from 'react'
import {Card} from "@/components/ui/card";
import AccordionLetter from '@/components/molecules/AccordionLetter'
import axios from 'axios';

interface Luggage {
  luggage_id: number;
  politic: {
    id_politic: number;
    type_politic: string;
  };
  weight: number;
  dimentions: string;
  luggage_location: string;
  quantity: number;
  type_luggage: string;
}

interface Booking {
  booking_id: number;
  status: string;
  luggageList: Luggage[];
}

interface Props{
  id: number;
}

const index: React.FC<Props> = ({id}) =>{
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/bookings/${id}`);
        setBooking(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los datos");
        setLoading(false);
      }
    };

    fetchBookingData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Card className='border-none shadow-none'>
        <div className='flex bg-slate-200 m-2 rounded-sm'>
            <span className="text-lg font-bold w-1/4 text-center">Cantidad</span>
            <span className="text-lg font-bold w-1/2 text-center">Item</span>
            <span className="text-lg font-bold w-1/4 text-center">Subtotal</span>
        </div>
        {booking?.luggageList.map((item) => (
        <AccordionLetter
          key={item.luggage_id}
          equipaje={item.type_luggage}
          numeros={item.quantity}
        />
      ))}
    </Card>
  )
}

export default index
