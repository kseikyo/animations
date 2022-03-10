import ReactFullpage from "@fullpage/react-fullpage";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import "../styles/Home.module.css";

export default function Home() {
  if (typeof window === "undefined") {
    return null;
  }
  const pluginWrapper = () => {
    require("fullpage.js/vendors/scrolloverflow");
  };
  return (
    <div>
      <ReactFullpage
        licenseKey="YOUR_LICENSE_KEY"
        navigation
        scrollOverflow={true}
        pluginWrapper={pluginWrapper}
        navigationPosition="left"
        dragAndMove
        sectionsColor={["#e63946", "#f1faee", "#a8dadc"]}
        render={({ _, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <h3 className="text-6xl text-center font-bold text-black">
                  Section 1
                </h3>
              </div>
              <div className="section">
                <h3 className="text-6xl text-center font-bold text-black">
                  Section 2
                </h3>
              </div>
              <div className="section">
                <h3 className="text-6xl text-center font-bold text-black">
                  Section 3
                </h3>
                <div className="absolute bottom-10 right-10">
                  <button
                    onClick={() => fullpageApi.moveTo(1, 0)}
                    type="button"
                    className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Scroll to top</span>
                    <ArrowCircleUpIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
