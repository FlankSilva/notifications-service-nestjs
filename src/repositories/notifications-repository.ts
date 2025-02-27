export abstract class NotificationsRepository {
  abstract create(notificationData: any): Promise<void>;
}
