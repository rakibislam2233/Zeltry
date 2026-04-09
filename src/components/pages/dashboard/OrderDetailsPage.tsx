import { dashboardOrders } from "@/data/dashboard/orders";
import {
  ArrowLeft,
  CheckCircle2,
  CircleDashed,
  Clock3,
  Package,
  Truck,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface OrderDetailsPageProps {
  orderId: string;
}

const statusMeta = {
  Pending: {
    label: "Pending Confirmation",
    desc: "Your order has been received and is waiting for confirmation.",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    icon: Clock3,
    step: 2,
  },
  Processing: {
    label: "Processing",
    desc: "Your items are being prepared in the warehouse.",
    badgeClass: "bg-sky-50 text-sky-700 border-sky-200",
    icon: CircleDashed,
    step: 3,
  },
  Delivered: {
    label: "Delivered",
    desc: "This order has been delivered successfully.",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: CheckCircle2,
    step: 5,
  },
  Cancelled: {
    label: "Cancelled",
    desc: "This order was cancelled before delivery.",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
    icon: XCircle,
    step: 0,
  },
} as const;

const orderSteps = [
  "Order Placed",
  "Confirmed",
  "Packed",
  "Shipped",
  "Delivered",
];

const OrderDetailsPage = ({ orderId }: OrderDetailsPageProps) => {
  const order = dashboardOrders.find(
    (item) => item.id.replace("#", "") === orderId,
  );

  if (!order) {
    notFound();
  }

  const currentStatusMeta = statusMeta[order.status];
  const StatusIcon = currentStatusMeta.icon;
  const isCancelled = order.status === "Cancelled";

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
          <div
            className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 ${currentStatusMeta.badgeClass}`}
          >
            <StatusIcon className="w-4 h-4" />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              {currentStatusMeta.label}
            </span>
          </div>
        </div>

        <div className="rounded-md border border-gray-200 bg-gray-50/60 p-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-text-main">Order Progress</p>
            <p className="text-xs text-text-muted">Status: {order.status}</p>
          </div>

          <div className="pt-3">
            {isCancelled ? (
              <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                This order was cancelled. Delivery workflow has been stopped.
              </div>
            ) : (
              <div className="relative overflow-hidden">
                <div className="absolute left-4 right-4 top-4.5 h-1 rounded-full bg-[#e9edf2]" />
                <div
                  className="absolute left-4 top-4.5 h-1 rounded-full bg-[#d91f26]"
                  style={{
                    width: `${((currentStatusMeta.step - 1) / (orderSteps.length - 1)) * 100}%`,
                  }}
                />

                <div className="relative grid grid-cols-5 gap-2 sm:gap-3">
                  {orderSteps.map((step, index) => {
                    const stepIndex = index + 1;
                    const completed = stepIndex <= currentStatusMeta.step;

                    return (
                      <div key={step} className="flex flex-col items-center text-center min-w-0">
                        <div
                          className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                            completed
                              ? "bg-[#d91f26] border-[#d91f26] text-white"
                              : "bg-white border-[#d91f26] text-[#d91f26]"
                          }`}
                        >
                          {stepIndex}
                        </div>
                        <p className="mt-2 text-[11px] sm:text-xs font-medium text-text-main leading-4">
                          {step}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <p className="text-sm text-text-muted">{currentStatusMeta.desc}</p>
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
