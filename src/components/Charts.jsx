import React from "react";
import ChartsCard from "./ChartsCard";
import Tag from "./Tag";

const Charts = () => {
  return (
    <div className="w-full space-y-4">
      {/* Tag */}
      <Tag title={"Charts"} link={"/"} />
      {/* chart list */}
      <div className="w-full flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="inline-flex space-x-4">
          {/* charts card */}
          <ChartsCard
            chartImg={
              "https://imgs.search.brave.com/U2kEHdTBalfFiZ_qADrXOiU0tWQ9FAyM9KAg8WK2LMc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGVh/cmwtamFtLXJvY2st/YmFuZC1zcG90aWZ5/LW11c2ljLXltaW9n/NXBjYnIxNG41ZXAu/anBn"
            }
            chartDesc={"Catch the hottest Punjabi tracks. Cover - Gurnazar "}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
