export type Country = {
  capital: string;
  code: string;
  currency: string;
  emoji: string;
  emojiU: string;
  languages: any[];
  name: string;
  native: string;
  __typename: string;
};

export type CountryDetails = {
  name: string;
  capital: string;
  awsRegion: string;
  code: string;
  emoji: string;
  emojiU: string;
  native: string;
  phone: string;
  currency: string;
};
export type CountryInfoProps = {
  code: string;
  sortOrder?: string;
  setSortOrder?: (value: string) => void;
};

export type SearchBarProps = {
  onSearch: (name: string) => void;
};

export type CustomDialogProps = {
  open: boolean;
  handleClose: () => void;
  countryDetails: any;
};
