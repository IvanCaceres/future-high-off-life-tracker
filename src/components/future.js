import React, { useEffect, useState, useRef } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import moment from "moment";

export default function FutureTracker() {
  const [leakUrl, setLeakUrl] = useState("https://www.highoff.life/");
  const [countdown, setCountdown] = useState("00:00:00");

  const pusherRef = useRef();
  const channelRef = useRef();
  const timerRef = useRef();
  let addZero = (inputNumber) => {
    return inputNumber < 10 ? `0${inputNumber}` : inputNumber;
  };
  // setup countdown timer
  useEffect(() => {
    let end = moment('2020-05-15T00');
    let duration = moment.duration(end.diff(moment()));
    if (duration > 0) {
      setCountdown(
        addZero(duration.hours()) +
        ":" +
        addZero(duration.minutes()) +
        ":" +
        addZero(duration.seconds())
      );
    }

    // Update the count down every 1 second
    timerRef.current = setInterval(function () {
      let duration = moment.duration(end.diff(moment()));

      // Output the result in an element with id="demo"
      setCountdown(
        addZero(duration.hours()) +
        ":" +
        addZero(duration.minutes()) +
        ":" +
        addZero(duration.seconds())
      );

      // If the count down is over, write some text
      if (duration <= 0) {
        clearInterval(timerRef.current);
        setCountdown("the album is out now!");
      }
      return () => {
        clearInterval(timerRef.current);
      };
    }, 1000);
  }, []);
  // fetch url on initial load
  useEffect(() => {
    axios.get("/info").then(function (response) {
      // handle success
      setLeakUrl(response.data);
    });
  }, []);

  //realtime url updates
  useEffect(() => {
    pusherRef.current = new Pusher("bf103ae2e4d0e5a11ed0", {
      cluster: "us2",
    });

    channelRef.current = pusherRef.current.subscribe("my-channel");
    channelRef.current.bind("my-event", (data) => {
      setLeakUrl(data.url);
    });
    return () => {
      channelRef.current.unbind();
      pusherRef.current.unsubscribe("my-channel");
      pusherRef.current.disconnect();
    };
  }, [pusherRef]);
  return (
    <>
      <h1>
        Future - High Off Life
        <br />
        Leak Tracker
      </h1>
      <div className="App-logo" alt="logo" />
      <p>HIGH OFF LIFE leaked song available at:</p>
      <a className="leakurl" href={leakUrl}>
        {leakUrl}
      </a>
      <p className="hol-red">HIGH OFF LIFE {countdown === "the album is out now!" ? " " : "releases in"} {countdown}</p>
    </>
  );
}
