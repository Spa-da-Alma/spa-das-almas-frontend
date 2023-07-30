import lazer from "../../mocks/leisure";

function Lazer() {
  return (
    <>
      <h3 className="title">Conheça nossas opções de lazer</h3>
      <div className="w-full">
        {lazer.map((item, index) => (
          <div key={index}>
            <div className="text-center my-8">
              <h3 className="text-2xl uppercase font-semibold">{item.name}</h3>
            </div>
            <div className="p-4">
              <div className="text-justify">
                <p className="inline">{item.description}</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-slate-200"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Lazer;
