import React, { useEffect, useState } from "react";
import classes from "./contact.module.css";
import Notification from "../ui/notification";

type formData = {
  email: string;
  name: string;
  message: string;
};
enum RequestState {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}
const initForm = {
  email: "",
  name: "",
  message: "",
};
export default function ContactForm() {
  const [RequestStatus, SetRequestStatus] = useState<RequestState | null>(
    RequestState.PENDING
  );
  const [formData, setFormData] = useState<formData>(initForm);
  const [requestError, setRequestError] = useState<any>();
  function handleChangeInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // validate on FE
    SetRequestStatus(RequestState.PENDING);
    try {
      const response: Promise<Response> = fetch("api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      (await response).json();
    } catch (error) {
      setRequestError(error);
      SetRequestStatus(RequestState.ERROR);
    }
    SetRequestStatus(RequestState.SUCCESS);
    setFormData(initForm);
  }

  let notification;
  if (RequestStatus === RequestState.PENDING) {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (RequestStatus === RequestState.SUCCESS) {
    notification = {
      status: "success",
      title: "Success!",
      message: "Meesage sent successfully!",
    };
  }
  if (RequestStatus === RequestState.ERROR) {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError?.message,
    };
  }
  useEffect(() => {
    if (
      RequestStatus === RequestState.SUCCESS ||
      RequestStatus === RequestState.ERROR
    ) {
      const timer = setTimeout(() => {
        setRequestError(null);
        SetRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [RequestStatus]);

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email address..."
              required
              value={formData.email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name..."
              required
              value={formData.name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            required
            id="message"
            placeholder="Your message..."
            rows={5}
            value={formData.message}
            onChange={handleChangeInput}
            name="message"
          />
        </div>
        <div className={classes.control}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
}
