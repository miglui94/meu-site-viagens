import Link from "next/link";

type Props = {
  title: string;
  description: string;
  duration: string;
  image: string;
};

export default function TourCard({
  title,
  description,
  duration,
  image,
}: Props) {
  const slug = title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-");

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

        <Link href={`/circuitos/${slug}`}>
          <button className="cardBtn">Ver programa</button>
        </Link>
      </div>
    </div>
  );
}