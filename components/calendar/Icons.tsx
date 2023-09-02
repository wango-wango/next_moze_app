import React, { useEffect, useState } from "react";
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
  iconComponent: () => JSX.Element;
}

interface Props {
  setIcon?: (newValue: string) => void;
  iconName?: string;
}

interface Icon {
  name: string;
  component: () => JSX.Element;
}

const iconData: Icon[] = [
  { name: "food", component: () => <RestaurantIcon fontSize="large" /> },
  {
    name: "traffic",
    component: () => <DirectionsSubwayIcon fontSize="large" />,
  },
  { name: "entertainment", component: () => <MicIcon fontSize="large" /> },
  { name: "shopping", component: () => <StorefrontIcon fontSize="large" /> },
  { name: "personal", component: () => <PersonIcon fontSize="large" /> },
  { name: "health", component: () => <MedicationIcon fontSize="large" /> },
  { name: "home", component: () => <HouseIcon fontSize="large" /> },
  { name: "family", component: () => <FamilyRestroomIcon fontSize="large" /> },
  { name: "life", component: () => <DeckIcon fontSize="large" /> },
  { name: "learning", component: () => <AutoStoriesIcon fontSize="large" /> },
];

// 圓圈按鈕樣式
const CircleIconButton: React.FC<CircleIconButtonProps> = ({
  name,
  onClick,
  iconComponent,
}) => {
  return (
    <IconButton
      className="w-20 h-20 rounded-full bg-slate-700 text-slate-300 hover:bg-slate-500 hover:text-slate-100 m-3 "
      aria-label="circle-icon-button"
      onClick={() => onClick(name)}
    >
      {iconComponent()}
    </IconButton>
  );
};

function Icons({ setIcon, iconName }: Props) {
  const [iconList, setIconList] = useState<Icon[]>([]);

  useEffect(() => {
    // 初始值
    setIconList(iconData);
  }, []);

  useEffect(() => {
    console.log(iconName);
    if (iconName) {
      const filterIconList = iconData.filter((item) => item.name == iconName);
      setIconList(filterIconList);
    }
  }, [iconName]);

  // 傳出選中的 iconName
  const iconHandler = (iconName: string) => {
    console.log(iconName);
    setIcon && setIcon(iconName);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {iconList.map((item) => (
        <CircleIconButton
          name={item.name}
          key={item.name}
          iconComponent={item.component}
          onClick={iconHandler}
        />
      ))}
    </div>
  );
}

export default Icons;
