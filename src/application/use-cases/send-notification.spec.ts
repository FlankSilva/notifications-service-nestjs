import { SendNotification } from "./send-notification";

describe("SendNotification", () => {
  it("should be able to send a notification", async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: "Voce recebeu uma notificacao",
      category: "social",
      recipientId: "example-recipient-id",
    });

    expect(notification).toBeTruthy();
  });
});
