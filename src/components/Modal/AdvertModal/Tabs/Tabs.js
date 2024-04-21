import { Tabs as ModalTabs } from "antd";
import Features from "./Features/Features";
import Reviews from "./Reviews";

export const items = [
  {
    key: 1,
    label: "Features",
    children: <Features key='features' />,
  },
  {
    key: 2,
    label: "Reviews",
    children: <Reviews key='reviews' />,
  },
];

const Tabs = () => <ModalTabs items={items} />;

export default Tabs;
