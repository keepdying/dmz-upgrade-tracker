import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export default function UpgradeAccordion() {
  return (
    <>
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <h2>
            <AccordionIcon />
            <span className="text-color white">Upgrade 1</span>
          </h2>
        </AccordionButton>
      </AccordionItem>
    </Accordion>
    </>
  )
}