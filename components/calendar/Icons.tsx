import React from "react";
import { IconButton } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import MicIcon from "@mui/icons-material/Mic";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import MedicationIcon from "@mui/icons-material/Medication";
import HouseIcon from "@mui/icons-material/House";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import DeckIcon from "@mui/icons-material/Deck";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

interface CircleIconButtonProps {
  name: string;
  onClick: (name: string) => void;
}

interface Props {
  setIcon: (newValue: string) => void;
}

const iconList = [
  { name: "food", component: RestaurantIcon },
  { name: "traffic", component: DirectionsSubwayIcon },
  { name: "entertainment", component: MicIcon },
  { name: "shopping", component: StorefrontIcon },
  { name: "personal", component: PersonIcon },
  { name: "health", component: MedicationIcon },
  { name: "home", component: HouseIcon },
  { name: "family", component: FamilyRestroomIcon },
  { name: "life", component: DeckIcon },
  { name: "learning", component: AutoStoriesIcon },
];

const CircleIconButton: React.FC<CircleIconButtonProps> = ({
  name,
  onClick,
}) => {
  const IconComponent = iconList.find((item) => item.name === name)?.component;

  if (!IconComponent) {
    return null; // 处理无效的图标名称
  }

  return (
    <IconButton
      className="w-20 h-20 rounded-full bg-slate-700 text-slate-300 hover:bg-slate-500 hover:text-slate-100 m-3 "
      aria-label="circle-icon-button"
      onClick={() => onClick(name)}
    >
      <IconComponent fontSize="large" />
    </IconButton>
  );
};

function Icons({ setIcon }: Props) {
  // 傳出選中的 iconName
  const iconHandler = (iconName: string) => {
    console.log(iconName);
    setIcon(iconName);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {iconList.map((item) => (
        <CircleIconButton
          name={item.name}
          key={item.name}
          onClick={iconHandler}
        />
      ))}
    </div>
  );
}

export default Icons;
