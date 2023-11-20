
function App() {
  return (
    <div className="App bg-gray-50">
    <div className=" text-center">
      <h1 className="pt-14 text-4xl mb-2 font-thin text-gray-600 ">Reliable, efficient delivery</h1>
      <h1 className="font-semibold text-3xl text-gray-600">Powred by Abderrahmane BIHI</h1>
      <p className="mt-5 mb-10 text-sm  text-gray-400">Our Artificial Intelligence powred by toolsuse millions of project data <br/> point to ensure that your project is successful</p>
    </div>
    <div className=" container ">
      <div className=" card-group grid grid-rows-4 grid-cols-1 lg:grid-cols-3 gap-7 pb-16">


        <div className="bg-white row-span-4 self-center border-t-4 border-t-sky-500 rounded-md shadow-xl ">
          <h2 className="text-2xl font-medium text-slate-600 ml-8 mt-5 mb-3">Supervisor</h2>
          <p className="text-sm text-gray-400 ml-8 mr-10">Monitors activity to identify project roadblocks </p>
          <div className="flex justify-end  p-8">
            <img src="./images/icon-supervisor.svg" alt=""/>
          </div>
        </div>

        <div className="bg-white row-span-2 border-t-4 border-t-red-600 rounded-md shadow-xl">
          <h2 className="text-2xl font-medium text-slate-600 ml-8 mt-5 mb-3">Team Builder</h2>
          <p className="text-sm text-gray-400 ml-8 mr-12">Scans out talents network to create the optimal team for your project</p>
          <div className="flex justify-end p-8">
            <img  src="./images/icon-team-builder.svg" alt=""/>
          </div>
        </div>

        <div className="bg-white row-span-2 border-t-4 border-t-orange-600 rounded-md shadow-xl">
          <h2 className="text-2xl font-medium text-slate-600 ml-8 mt-5 mb-3">Karma</h2>
          <p className="text-sm text-gray-400 ml-8 mr-12">Regulary evaluates aour talent to ensure quality</p>
          <div className="flex justify-end p-8">
            <img  src="./images/icon-karma.svg" alt=""/>
          </div>
        </div>

        <div className="bg-white row-span-4 lg:row-span-full col-span-1 lg:col-start-3 lg:col-end-4 self-center border-t-4 border-t-sky-600 rounded-md shadow-xl ">
          <h2 className="text-2xl font-medium text-slate-600 ml-8 mt-5 mb-3">Calculator</h2>
          <p className="text-sm text-gray-400 ml-8 mr-12">use data from past projects to provide better delivery estimates</p>
          <div className="flex justify-end p-8">
            <img src="./images/icon-calculator.svg" alt=""/>
          </div>
        </div>

        
        
      </div>
      </div>
    </div>
  );
}

export default App;
