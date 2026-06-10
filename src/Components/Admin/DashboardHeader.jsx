import React, { useState } from "react";

const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const notifications = [
  { id: 1, icon: "bi-person-plus",       color: "text-green-600",  bg: "bg-green-50",  title: "New Customer Registered",       desc: "Priya Sharma just created an account.",           time: "2 min ago",   unread: true },
  { id: 2, icon: "bi-bag-check",         color: "text-blue-600",   bg: "bg-blue-50",   title: "New Order Placed",               desc: "Order #1042 placed for ₹540 by Ravi Kumar.",      time: "10 min ago",  unread: true },
  { id: 3, icon: "bi-exclamation-circle",color: "text-orange-500", bg: "bg-orange-50", title: "Low Stock Alert",                desc: "Alphonso Mango is almost out of stock (2 left).", time: "30 min ago",  unread: true },
  { id: 4, icon: "bi-star",              color: "text-yellow-500", bg: "bg-yellow-50", title: "New Review Received",            desc: "Ananya gave 5 stars on Fresh Paneer.",            time: "1 hr ago",    unread: true },
  { id: 5, icon: "bi-truck",             color: "text-purple-600", bg: "bg-purple-50", title: "Order Delivered",                desc: "Order #1038 delivered to Karthik Selvan.",        time: "2 hrs ago",   unread: false },
  { id: 6, icon: "bi-arrow-counterclockwise", color: "text-red-500", bg: "bg-red-50", title: "Return Request",                desc: "Meena requested a return for Order #1035.",       time: "3 hrs ago",   unread: false },
];

function DashboardHeader() {
  const [showNotif, setShowNotif] = useState(false);
  const [notifs, setNotifs]       = useState(notifications);
  const unreadCount               = notifs.filter(n => n.unread).length;
  const adminName                 = localStorage.getItem("userName") || "Admin";

  const markAllRead = () => setNotifs(notifs.map(n => ({ ...n, unread: false })));
  const dismiss     = (id) => setNotifs(notifs.filter(n => n.id !== id));

  return (
    <div className="mt-6 ml-3 flex justify-between items-start">

      {/* Welcome Section */}
      <div>
        <h1 className="text-[28px] font-bold text-[#14532D]">Hello, {adminName}! 👋</h1>
        <p className="text-sm text-gray-500 mt-1">Here's what's happening with your store today.</p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-[260px] h-10 bg-white border border-gray-200 rounded-xl pl-5 pr-10 outline-none text-sm focus:ring-2 focus:ring-green-200"
          />
          <i className="bi bi-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>

        {/* Notification */}
        <div className="relative">
          <button
            onClick={() => setShowNotif(!showNotif)}
            className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center relative hover:bg-gray-50 transition"
          >
            <i className="bi bi-bell text-gray-600"></i>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotif && (
            <div className="absolute right-0 top-12 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div>
                  <p className="font-bold text-gray-800 text-sm">Notifications</p>
                  <p className="text-[11px] text-gray-400">{unreadCount} unread</p>
                </div>
                <button onClick={markAllRead} className="text-[11px] text-green-600 font-semibold hover:underline">
                  Mark all read
                </button>
              </div>

              {/* List */}
              <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                {notifs.length === 0 ? (
                  <div className="py-10 text-center">
                    <i className="bi bi-bell-slash text-3xl text-gray-300"></i>
                    <p className="text-gray-400 text-sm mt-2">No notifications</p>
                  </div>
                ) : notifs.map(n => (
                  <div key={n.id} className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition ${n.unread ? "bg-green-50/40" : ""}`}>
                    <div className={`w-9 h-9 rounded-xl ${n.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                      <i className={`bi ${n.icon} ${n.color} text-base`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                        {n.title}
                        {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{n.desc}</p>
                      <p className="text-[10px] text-gray-400 mt-1">{n.time}</p>
                    </div>
                    <button onClick={() => dismiss(n.id)} className="text-gray-300 hover:text-red-400 transition shrink-0 mt-1">
                      <i className="bi bi-x text-lg"></i>
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 px-4 py-2.5 text-center">
                <button className="text-xs text-green-700 font-semibold hover:underline">View all activity</button>
              </div>
            </div>
          )}
        </div>

        {/* Date */}
        <div className="h-10 px-4 bg-white border border-gray-200 rounded-xl text-sm flex items-center gap-2 whitespace-nowrap">
          <i className="bi bi-calendar3"></i>
          <span>{today}</span>
        </div>

      </div>
    </div>
  );
}

export default DashboardHeader;