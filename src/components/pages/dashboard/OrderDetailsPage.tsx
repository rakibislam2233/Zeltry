import { dashboardOrders } from "@/data/dashboard/orders";
import { ArrowLeft, Package, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface OrderDetailsPageProps {
  orderId: string;
}

const OrderDetailsPage = ({ orderId }: OrderDetailsPageProps) => {
  const order = dashboardOrders.find(
    (item) => item.id.replace("#", "") === orderId,
  );

  if (!order) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold text-text-main">Order Details</h2>
          <p className="text-sm text-text-muted mt-1">
            Review status, shipment, and payment information for your order.
          </p>
        </div>
        <Link
          href="/dashboard/orders"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded text-sm font-medium text-text-main"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Orders
        </Link>
      </div>

      <section className="bg-white rounded border border-gray-200 p-6 space-y-6">
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div>
            <p className="text-sm text-text-muted">Order Number</p>
            <p className="font-bold text-xl text-text-main">{order.id}</p>
          </div>
          <span
            className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${order.statusClass}`}
          >
            {order.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded p-4">
            <p className="text-sm text-text-muted">Order Date</p>
            <p className="font-semibold text-text-main mt-1">{order.date}</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <p className="text-sm text-text-muted">Payment Method</p>
            <p className="font-semibold text-text-main mt-1">{order.paymentMethod}</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <p className="text-sm text-text-muted">Tracking ID</p>
            <p className="font-semibold text-text-main mt-1">{order.trackingId}</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded border border-gray-200 p-6">
        <h3 className="font-bold text-lg text-text-main mb-4">Item Summary</h3>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-24 h-24 shrink-0 bg-gray-50 rounded border border-gray-200 overflow-hidden p-2 flex items-center justify-center">
            <Image
              src={order.image}
              alt={order.product}
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1">
            <p className="font-semibold text-text-main">{order.product}</p>
            <p className="text-sm text-text-muted mt-1">
              Quantity: {order.items} {order.items > 1 ? "items" : "item"}
            </p>
            <p className="text-xl font-bold text-primary mt-3">
              ${order.total.toFixed(2)}
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-text-main">Billing Address</h3>
          </div>
          <p className="text-text-muted leading-7">{order.billingAddress}</p>
        </div>

        <div className="bg-white rounded border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-text-main">Shipping Address</h3>
          </div>
          <p className="text-text-muted leading-7">{order.shippingAddress}</p>
        </div>
      </section>
    </div>
  );
};

export default OrderDetailsPage;
