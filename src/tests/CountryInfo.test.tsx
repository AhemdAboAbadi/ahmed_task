import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_COUNTRY_INFO2 } from "../services/queries";

const mocks = [
  {
    request: {
      query: GET_COUNTRY_INFO2,
      variables: {
        filter: {
          code: {
            regex: "US",
          },
        },
      },
    },
    result: {
      data: {
        countries: [
          {
            name: "United States",
            code: "US",
            native: "United States",
            capital: "Washington D.C.",
            currency: "USD",
            emoji: "🇺🇸",
            emojiU: "U+1F1FA U+1F1F8",
            languages: [
              {
                code: "EN",
                name: "English",
                __typename: "Language",
              },
            ],
            __typename: "Country",
          },
        ],
      },
    },
  },
];

describe("CountryInfo", () => {
  it("renders without error", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {/* <CountryInfo code="US" /> */}
      </MockedProvider>
    );
  });
});
