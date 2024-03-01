import "./App.css";
import RandomGifs from "./components/RandomGifs";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="w-full flex flex-col background pb-[5rem]">
      <h1
        className="bg-white rounded-2xl w-11/12 text-center 
      mt-[40px] mx-auto px-10 py-2 text-4xl uppercase font-bold"
      >
        Random Gifs
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <RandomGifs />
        <Tag />
      </div>
    </div>
  );
};

export default App;
