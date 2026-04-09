export type DashboardOrderStatus =
  | "Pending"
  | "Processing"
  | "Delivered"
  | "Cancelled";

export interface DashboardOrder {
  id: string;
  date: string;
  status: DashboardOrderStatus;
  statusClass: string;
  total: number;
  items: number;
  product: string;
  image: string;
  billingAddress: string;
  shippingAddress: string;
  paymentMethod: string;
  trackingId: string;
}

export const dashboardOrders: DashboardOrder[] = [
  {
    id: "#49281",
    date: "Oct 24, 2023",
    status: "Delivered",
    statusClass: "bg-green-100 text-green-700",
    total: 124.5,
    items: 2,
    product: "Sony WH-1000XM4 Noise Canceling Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=150&auto=format&fit=crop",
    billingAddress: "House 12, Road 8, Dhanmondi, Dhaka",
    shippingAddress: "House 12, Road 8, Dhanmondi, Dhaka",
    paymentMethod: "Visa •••• 2921",
    trackingId: "TRK-84920122",
  },
  {
    id: "#49302",
    date: "Nov 02, 2023",
    status: "Processing",
    statusClass: "bg-blue-100 text-blue-700",
    total: 49.0,
    items: 1,
    product: "Nike Air Max 270 React - Red/Black",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=150&auto=format&fit=crop",
    billingAddress: "Flat 7B, Uttara Sector 11, Dhaka",
    shippingAddress: "Flat 7B, Uttara Sector 11, Dhaka",
    paymentMethod: "Bkash",
    trackingId: "TRK-22019387",
  },
  {
    id: "#49305",
    date: "Nov 03, 2023",
    status: "Pending",
    statusClass: "bg-yellow-100 text-yellow-700",
    total: 210.0,
    items: 1,
    product: "Apple Watch Series 8 - Midnight",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30e?q=80&w=150&auto=format&fit=crop",
    billingAddress: "Plot 21, Block C, Bashundhara, Dhaka",
    shippingAddress: "Plot 21, Block C, Bashundhara, Dhaka",
    paymentMethod: "Mastercard •••• 4410",
    trackingId: "TRK-77531092",
  },
  {
    id: "#48992",
    date: "Sep 12, 2023",
    status: "Cancelled",
    statusClass: "bg-red-100 text-red-700",
    total: 35.0,
    items: 3,
    product: "Basic Cotton T-Shirt Pack (3)",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=150&auto=format&fit=crop",
    billingAddress: "House 3, Avenue 2, Mirpur DOHS, Dhaka",
    shippingAddress: "House 3, Avenue 2, Mirpur DOHS, Dhaka",
    paymentMethod: "Cash on Delivery",
    trackingId: "TRK-50273145",
  },
];

export const getDashboardOrderById = (id: string) =>
  dashboardOrders.find((order) => order.id.replace("#", "") === id);
