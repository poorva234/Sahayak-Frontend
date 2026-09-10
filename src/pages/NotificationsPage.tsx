import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Check, ChevronRight } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { mockNotifications } from "../lib/mockData";
import { timeAgo } from "../lib/utils";
import type { NotificationCategory } from "../types/notification";

const categories = ["All", "Applications", "Documents", "Schemes", "System"] as const;

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("All");
  const [notifs, setNotifs] = useState(mockNotifications);

  const markRead = (id: string) =>
    setNotifs((n) => n.map((item) => (item.id === id ? { ...item, isRead: true } : item)));

  const markAllRead = () => setNotifs((n) => n.map((item) => ({ ...item, isRead: true })));

  const filtered = filter === "All" ? notifs : notifs.filter((n) => n.category === filter);
  const unread = notifs.filter((n) => !n.isRead).length;

  return (
    <DashboardLayout>
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl text-[#1A1826]">Notifications</h1>
            {unread > 0 && <p className="text-sm text-[#71697E] mt-1">{unread} unread notification{unread > 1 ? "s" : ""}</p>}
          </div>
          {unread > 0 && (
            <button
              onClick={markAllRead}
              className="flex items-center gap-1.5 text-sm text-[#6D3FC8] hover:underline"
            >
              <Check className="w-4 h-4" /> Mark all read
            </button>
          )}
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === c ? "bg-[#6D3FC8] text-white" : "bg-white border border-[#E4DFFA] text-[#71697E] hover:border-[#C4B5FD]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-[#E4DFFA] overflow-hidden divide-y divide-[#F2EFFB]">
          {filtered.length === 0 ? (
            <div className="p-10 text-center text-[#71697E]">
              <Bell className="w-8 h-8 mx-auto mb-3 text-[#C4B5FD]" />
              <p className="text-sm">No notifications in this category.</p>
            </div>
          ) : (
            filtered.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 hover:bg-[#F6F5FF] transition-colors ${!notif.isRead ? "bg-[#F6F5FF]" : ""}`}
                onClick={() => markRead(notif.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0 mt-0.5">
                    <Bell className="w-4 h-4 text-[#6D3FC8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <p className={`text-sm ${!notif.isRead ? "font-semibold text-[#1A1826]" : "font-medium text-[#1A1826]"}`}>
                        {notif.title}
                        {!notif.isRead && <span className="inline-block w-2 h-2 bg-[#6D3FC8] rounded-full ml-2 align-middle" />}
                      </p>
                      <span className="text-xs font-mono text-[#71697E] shrink-0">{timeAgo(notif.timestamp)}</span>
                    </div>
                    <p className="text-sm text-[#71697E] mt-1 leading-relaxed">{notif.message}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs bg-[#EDE9FE] text-[#6D3FC8] px-2 py-0.5 rounded-full">{notif.category}</span>
                      {notif.actionLabel && (
                        <button
                          onClick={(e) => { e.stopPropagation(); if (notif.actionPath) navigate(notif.actionPath); }}
                          className="text-xs text-[#6D3FC8] font-medium flex items-center gap-1 hover:underline"
                        >
                          {notif.actionLabel} <ChevronRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
