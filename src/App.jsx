import { RecoilRoot } from "recoil";
import { Aside, Listings, Preview } from "~/components";

function App() {
  return (
    <RecoilRoot>
      <Aside />
      <Listings />
      <Preview />
    </RecoilRoot>
  );
}

export default App;
