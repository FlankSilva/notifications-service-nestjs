import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private prosps: NotificationProps;

  constructor(
    props: Replace<
      NotificationProps,
      {
        createdAt?: Date;
      }
    >
  ) {
    this.prosps = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set recipientId(recipientId: string) {
    this.prosps.recipientId = recipientId;
  }

  public get recipientId() {
    return this.prosps.recipientId;
  }

  public set content(content: Content) {
    this.prosps.content = content;
  }

  public get content(): Content {
    return this.prosps.content;
  }

  public set category(category: string) {
    this.prosps.category = category;
  }

  public get category(): string {
    return this.prosps.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.prosps.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.prosps.readAt;
  }

  public get createdAt(): Date {
    return this.prosps.createdAt;
  }
}
