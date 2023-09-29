import React, { useState } from "react";
import ImagesDiv from "./ImagesDiv";
function App() {
  const [page, setPage] = useState(1);
  function handlePageUpdate() {
    setPage((state) => state + 1);
  }
  function handlePreviousPage() {
    setPage((state) => {
      if (state === 1) return 1;
      return state - 1;
    });
  }
  return (
    <div>
      <nav className=" flex bg-slate-300">
        <h2 className=" m-10 p-4 border-2">Logo</h2>{" "}
        <h3 className=" w-10 m-auto bottom-2">Title</h3>{" "}
      </nav>
      <header className="flex items-center justify-center h-36 w-full">
        Header Image
      </header>
      <div>
        <ImagesDiv page={page} />
      </div>

      <div className="flex justify-center gap-4 md:gap-8 mt-8 mb-16 text-lg font-bold font-mono items-center">
        <button
          className=" p-2 md:p-4 rounded-[20px] bg-slate-300"
          onClick={handlePreviousPage}
        >
          &larr; previous page
        </button>
        <p>{page}</p>
        <button
          className="p-2 md:p-4 rounded-[20px] bg-slate-300"
          onClick={handlePageUpdate}
        >
          next page &rarr;
        </button>
      </div>
    </div>
  );
}

export default App;
