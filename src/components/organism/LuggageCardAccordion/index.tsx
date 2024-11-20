import LuggageAccordionTrigger from '@/components/molecules/LuggageAccordionTrigger'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

interface Props{
    children: React.ReactNode;
}

function Index({children}: Props) {
  return (
    <Accordion type="single" collapsible>
                                        <AccordionItem
                                            value="item-1"
                                            className="border pr-2 py-0 rounded-md shadow-md"
                                        >
                                            <AccordionTrigger>
                                                <LuggageAccordionTrigger />
                                            </AccordionTrigger>
                                            <AccordionContent className="grid grid-cols-2 grid-rows-2 gap-2 pl-3 pr-3">
                                                {children} 
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
  )
}

export default Index