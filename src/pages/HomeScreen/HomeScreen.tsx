import { useState } from "react";
import { CountryInfo as DataTable } from "./components";
import { SearchBar } from "../../components";

const HomeScreen = () => {
  const [countryCode, setCountryCode] = useState<string>("");
  return (
    <>
      <SearchBar onSearch={setCountryCode} />
      <DataTable code={countryCode} />
    </>
  );
};

export default HomeScreen;
