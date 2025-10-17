

export default function Input() {
  return (
    <div className="input-container w-10/12  sm:w-3/5 md:w-2/5 lg:w-1/3 2xl:w-1/3 mt-4 flex flex-row">
      <input
        type="text"
        pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$"
        placeholder="Search for any IP address or domain"
        className="ip-input rounded-r-none border-none focus:outline-none hover:cursor-pointer rounded-l-2xl h-14 px-6 bg-white flex-11"
      />
      <button className="input-button flex justify-center items-center rounded-l-none rounded-r-2xl min-w-fit bg-black hover:bg-gray-800 hover:cursor-pointer h-14 px-2 flex-1" >
        <img src="../../images/icon-arrow.svg" alt="" />
      </button>
    </div>
  );
}
