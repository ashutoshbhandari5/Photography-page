import Accordian from "../components/common/Accordian";
import FAQ from "../utils/accordian.json";
export default function Home() {
  return (
    <div className="mt-32 flex flex-col w-full justify-center items-center">
      {FAQ.items.map((el, i) => (
        <Accordian key={i} header={el.name} body={el.acceptedAnswer.text} />
      ))}
    </div>
  );
}
