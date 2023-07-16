import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { type Upgrade } from "../types/upgrade";

const chakraColor = "gray.200";

export default function UpgradeAccordion({ upgrade }: { upgrade: Upgrade }) {
  // onClick?: any
  return (
    <Accordion allowToggle>
      <AccordionItem rounded={"md"}>
        <h2>
          <AccordionButton>
            <span className="text-gray-200">{upgrade.name}</span>
            <AccordionIcon color={chakraColor} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p className="text-gray-200">{upgrade.desc}</p>
          {FactionLevelReq(upgrade.rep)}
          <UnorderedList>
            {upgrade.items.map((item, index) => {
              return (
                <ListItem key={item} textColor={chakraColor} textAlign={"left"}>
                  {item} : {upgrade.current[index]} / {upgrade.need[index]}
                  <div className="space-x-1">
                    <IconButton
                      aria-label="Add"
                      bgColor={"gray.200"}
                      icon={<AddIcon />}
                      size="xs"
                      onClick={() => {
                        if (upgrade.current[index] < upgrade.need[index]) {
                          upgrade.current[index] += 1;
                        }
                      }}
                    />
                    <IconButton
                      aria-label="Minus"
                      bgColor={"gray.200"}
                      icon={<MinusIcon />}
                      size="xs"
                      onClick={() => {
                        if (upgrade.current[index] > 0) {
                          upgrade.current[index] -= 1;
                        }
                      }}
                    />
                  </div>
                </ListItem>
              );
            })}
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function FactionLevelReq(reps: Record<string, number>) {
  function getFactionName(faction: string) {
    switch (faction) {
      case "wl":
        return "White Lotus";
      case "bm":
        return "Black Mous";
      case "legion":
        return "Legion";
      case "redacted":
        return "Redacted";
      default:
        return faction;
    }
  }
  return (
    <>
      {Object.keys(reps).map((rep, index) => {
        return (
          <Badge key={index} colorScheme="purple" className="text-gray-200">
            Required {getFactionName(rep)} Level {Object.values(reps)[index]}
          </Badge>
        );
      })}
    </>
  );
}
