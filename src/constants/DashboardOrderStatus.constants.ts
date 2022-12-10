import STRINGS from "../screens/Dashboard/Dashboard.strings";

export const DashboardOrderStatus = [
  {
    id: 1,
    iconName: "stats-chart",
    orderTitle: STRINGS.TOTAL,
    orderCount: 22,
  },
  {
    id: 2,
    iconName: "timer-sharp",
    orderTitle: STRINGS.IN_PROGRESS,
    orderCount: 2,
  },
  {
    id: 3,
    iconName: "ios-checkbox-sharp",
    orderTitle: STRINGS.COMPLETED,
    orderCount: 20,
  },
];

export const myServices = [
  {
    id: 1,
    image: require("../assets/images/createOrder.png"),
    title: STRINGS.CREATE_ORDER,
  },
  {
    id: 2,
    image: require("../assets/images/myOrders.png"),
    title: STRINGS.VIEW_ORDERS,
  },
];
