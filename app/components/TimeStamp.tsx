import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

interface TimeStampProps {
  date: Timestamp;
}

<p className="text-[rgba(254,254,255,0.25)] font-inter text-xs">3hr. ago</p>;

const MINUTES = 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;

function TimeStamp({ date }: TimeStampProps) {
  const [stamp, setStamp] = useState("");

  useEffect(() => {
    const getStampString = (): string => {
      // Duration in seconds and truncated using ~~
      const currentTime = Timestamp.now();
      const duration: number = ~~(currentTime.seconds - date.seconds);

      if (duration >= WEEKS) {
        return `${~~(duration / WEEKS)} w. ago`;
      } else if (duration >= DAYS) {
        return `${~~(duration / DAYS)} d. ago`;
      } else if (duration >= HOURS) {
        return `${~~(duration / HOURS)} hr. ago`;
      } else if (duration >= MINUTES) {
        return `${~~(duration / MINUTES)} min. ago`;
      }

      return `${duration} sec. ago`;
    };

    setStamp(getStampString());
  }, [date]);

  return (
    <p className="text-[rgba(254,254,255,0.25)] font-inter text-xs">{stamp}</p>
  );
}

export default TimeStamp;
