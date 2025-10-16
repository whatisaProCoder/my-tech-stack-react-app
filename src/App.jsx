import "./App.css";
import { Technology } from "./components/Technology";

let myTechStack = [
  { name: "HTML", type: "Web" },
  { name: "CSS", type: "Web" },
  { name: "JS", type: "Web" },
  { name: "ReactJS", type: "Web" },
  { name: "NodeJS", type: "Web" },
  { name: "NPM", type: "Web" },
  { name: "Eslint", type: "Web" },
  { name: "Prettier", type: "Web" },
  { name: "Vite", type: "Web" },
  { name: "Webpack", type: "Web" },
  { name: "C", type: "Embedded" },
  { name: "C++", type: "Embedded" },
  { name: "Arduino", type: "Embedded" },
  { name: "ESP32", type: "Embedded" },
  { name: "Raspberry Pi", type: "Embedded" },
  { name: "Python", type: "Backend/Core" },
  { name: "Java", type: "Backend/Core" },
  { name: "VS Code", type: "IDE" },
  { name: "PyCharm", type: "IDE" },
  { name: "IntelliJ IDEA", type: "IDE" },
  { name: "TailwindCSS", type: "Web" },
];

function assignKeys(data) {
  return data.map((item) => {
    return { ...item, id: crypto.randomUUID() };
  });
}

myTechStack = assignKeys(myTechStack);

const webTechStack = myTechStack.filter(
  (techstack) => techstack.type === "Web"
);
const embeddedTechStack = myTechStack.filter(
  (techstack) => techstack.type === "Embedded"
);
const backendCoreTechStack = myTechStack.filter(
  (techstack) => techstack.type === "Backend/Core"
);

const IDEs = myTechStack.filter((techstack) => techstack.type === "IDE");

function App() {
  const webTechStackComponents = webTechStack.map((techstack) => (
    <Technology key={techstack.id} name={techstack.name} />
  ));

  const embeddedTechStackComponents = embeddedTechStack.map((techstack) => (
    <Technology key={techstack.id} name={techstack.name} />
  ));

  const backendCoreTechStackComponents = backendCoreTechStack.map(
    (techstack) => <Technology key={techstack.id} name={techstack.name} />
  );

  const IDEComponents = IDEs.map((techstack) => (
    <Technology key={techstack.id} name={techstack.name} />
  ));

  return (
    <>
      <div className="text-4xl font-semibold mb-4 text-center">
        My Tech Stack
      </div>
      <div className="border-1 mb-8"></div>
      <div className="text-[1.125rem] text-left mb-2">Web Technologies</div>
      <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4">
        {webTechStackComponents}
      </div>
      <div className="text-[1.125rem] text-left mb-2 mt-6">
        Embedded Programming
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-2  gap-4">
        {embeddedTechStackComponents}
      </div>
      <div className="text-[1.125rem] text-left mb-2 mt-6">
        Backend / Core Technologies
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-2  gap-4">
        {backendCoreTechStackComponents}
      </div>
      <div className="text-[1.125rem] text-left mb-2 mt-6">IDEs</div>
      <div className="grid grid-cols-3 max-sm:grid-cols-2  gap-4">
        {IDEComponents}
      </div>
    </>
  );
}

export default App;
