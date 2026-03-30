"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  description: string;
  duration: string;
  image: string;
  buttonText: string;
};

export default function TourCard({
  title,
  description,
  duration,
  image,
  buttonText
}: Props) {
  const slug = title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-");
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="tourCard">
      <div
        className="tourImage"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="badgeCard">{duration}</span>
      </div>

      <div className="tourContent">
        <h3>{title}</h3>
        <p>{description}</p>

        <Link href={`${isEnglish ? "/en/circuits" : "/pt/circuitos"}/${slug}`}>
          <button className="cardBtn">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
}