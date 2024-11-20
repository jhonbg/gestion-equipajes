import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import UserAccordion from '@/components/molecules/UserAccordion'
import AccordionContentCard from '@/components/organism/AccordionContentCard'
import React, { useState } from 'react'

function Index() {
  const [id, setId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleUpdateId = () => {
    const parsedId = inputValue ? parseInt(inputValue, 10) : null;
    if (parsedId !== null && !isNaN(parsedId)) {
      setId(parsedId);
    } else {
      setId(null);
    }
  };

  return (
    <Accordion type="single" collapsible>
        <AccordionItem
            value="item-1"
            className="pr-2 py-0 border-solid border-2 rounded-sm m-2"
        >
            <AccordionTrigger className='pt-0 pb-0'>
              <UserAccordion id={id ?? 0}/>
            </AccordionTrigger>
            <AccordionContent className="w-full">
              <AccordionContentCard id={id ?? 0}/>
            </AccordionContent>
        </AccordionItem>
        <div className="flex  justify-center flex-row p-2 items-center content-center">
        <input type='number' placeholder='Ingresa un ID' onChange={handleInputChange} value={inputValue} className='p-1 border border-gray-300 rounded'></input>
            <button
          onClick={handleUpdateId}
          className="p-1 bg-blue-950 text-white rounded"
        >
          Actualizar ID
        </button>
      </div>
    </Accordion>
  )
}

export default Index