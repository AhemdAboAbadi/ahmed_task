import { useState, useMemo } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import {
  GET_COUNTRY_INFO2,
  GET_COUNTRY_DETAILS,
} from "../../../../services/queries";
import { Spinner, Dialog } from "../../../../components";
import { CountryInfoProps, Country, CountryDetails } from "../../../../types";

import "./style.css";

const DataTable: React.FC<CountryInfoProps> = ({ code }) => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    loading: loadingCountries,
    error: errorCountries,
    data: countries,
  } = useQuery(GET_COUNTRY_INFO2, {
    variables: { filter: { code: { regex: code.toLocaleUpperCase() } } },
  });

  const [
    getCountryDetails,
    {
      loading: loadingCountryDetails,
      error: errorCountryDetails,
      data: dataDetails,
    },
  ] = useLazyQuery<{ country: CountryDetails }>(GET_COUNTRY_DETAILS);

  const onClickRow = (code: string) => {
    setOpen(true);
    getCountryDetails({ variables: { code: code } });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "Country Name", width: 280 },
    { field: "capital", headerName: "Capital", width: 280 },
    { field: "languages", headerName: "Languages", width: 230 },
    { field: "currency", headerName: "Currency", width: 180 },
  ];

  const rows = useMemo(() => {
    return countries?.countries.map((country: Country, index: number) => ({
      id: index + 1,
      name: country.name,
      capital: country.capital,
      languages: country.languages[0]?.name,
      code: country?.code,
      currency: country.currency,
    }));
  }, [countries?.countries]);

  if (loadingCountries || loadingCountryDetails) return <Spinner />;
  if (errorCountries || errorCountryDetails)
    return (
      <p style={{ color: "red" }}>
        {errorCountries?.message || errorCountryDetails?.message}
      </p>
    );

  return (
    <div style={{ height: 750, width: "55%", margin: "50px auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        onRowClick={(data) => {
          onClickRow(data?.row?.code);
        }}
        checkboxSelection
        disableSelectionOnClick
      />
      <Dialog
        open={open}
        handleClose={handleClose}
        countryDetails={dataDetails?.country}
      />
      ;
    </div>
  );
};

export default DataTable;
