// import { Policy } from "@mui/icons-material";
import { Advertisement } from "../../content/advertisement/Advertisement";
import { Collection } from "../../content/collection/Collection";
import { Endow } from "../../content/Endow";
import { ImageComponent } from "../../content/ImageComponent/ImageComponent";
import { News } from "../../content/news/News";
import { Policy } from "../../content/policy/Policy";
import { ScentGroup } from "../../content/scentgroup/ScentGroup";
import { UniqueMark } from "../../content/uniquemark/UniqueMark";

const HomePage = () => {

  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 23, 59, 59).toISOString();

  return <>
    <Endow />
    <Advertisement targetDate={targetDate} />
    <ScentGroup />
    <UniqueMark />
    <Collection />
    <News />
    {/* <Policy /> */}
    <Policy/>
    <ImageComponent/>
  </>
}

export default HomePage;