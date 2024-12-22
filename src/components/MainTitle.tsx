import "./main-title.css";

// main title
interface MainTitleProps {
  title: string;
}
export default function MainTitle({ title }: MainTitleProps) {
  return (
    <div className="main-title">
      <h2>{title}</h2>
    </div>
  );
}
