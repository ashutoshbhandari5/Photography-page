import Accordian from "../components/common/Accordian";
import Tabs from "../components/common/Tabs";
import FAQ from "../utils/accordian.json";
export default function Home() {
  const tabsItems = FAQ.items.map((el) => {
    return {
      header: el.name,
      body: el.acceptedAnswer.text,
    };
  });
  return (
    <div className="mt-32 flex flex-col w-full justify-center items-center">
      {FAQ.items.map((el, i) => (
        <Accordian key={i} header={el.name} body={el.acceptedAnswer.text} />
      ))}
      <Tabs items={tabsItems} />
    </div>
  );
}
