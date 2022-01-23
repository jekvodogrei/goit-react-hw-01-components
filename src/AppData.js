import Statics from "./components/Statics";
import Data from "./data.json";

export default function AppData() {
  return (
    <section>
      <Statics
        key={Data.id}
        docx={Data[0].percentage}
        mp3={Data[1].percentage}
        pdf={Data[2].percentage}
        mp4={Data[3].percentage}
        psd={Data[4].percentage}
      />
    </section>
  );
}
