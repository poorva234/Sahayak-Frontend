export type NotificationCategory = "Applications" | "Documents" | "System" | "Schemes";

export interface Notification {
  id: string;
  title: string;
  message: string;
  category: NotificationCategory;
  isRead: boolean;
  timestamp: string;
  icon?: string;
  actionLabel?: string;
  actionPath?: string;
}
