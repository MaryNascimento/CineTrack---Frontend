import SearchIcon from "../assets/search-icon.svg";

export const SearchBar = () =>{
  return (
    <span className=" bg-white rounded-full w-96 flex items-center">
    <input
      type="text"
      placeholder="Busque por títulos, diretores, categoria..."
      className=" text-azulfundo placeholder:text-azulsecundario text-sm font-normal outline-none bg-transparent w-96 pl-4"
    />
    <button className="p-2">
      <img
        src={SearchIcon}
        alt="Buscar"
        className="w-6 h-6"
      />
    </button>
  </span>
  
  );
}



