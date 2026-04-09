import OrderDetailsPage from "@/components/pages/dashboard/OrderDetailsPage";
import { getDashboardOrderById } from "@/data/dashboard/orders";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface OrderDetailsRouteProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(
  props: OrderDetailsRouteProps,
): Promise<Metadata> {
  const params = await props.params;
  const order = getDashboardOrderById(params.id);

  if (!order) {
    return {
      title: "Order Not Found | Zeltry",
      description: "The requested order could not be found.",
    };
  }

  return {
    title: `Order ${order.id} | Zeltry`,
    description: `Order details for ${order.id}`,
  };
}

const Page = async (props: OrderDetailsRouteProps) => {
  const params = await props.params;
  const order = getDashboardOrderById(params.id);

  if (!order) {
    notFound();
  }

  return <OrderDetailsPage orderId={params.id} />;
};

export default Page;
