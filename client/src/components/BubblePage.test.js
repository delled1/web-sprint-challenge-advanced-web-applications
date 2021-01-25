import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {act} from "react-dom/test-utils"

import {getColorsFromApi as mockGetColorsFromApi} from "../utils/GetColorsFromApi"

jest.mock('../utils/GetColorsFromApi')
const mockColors = [
  {
    color: "blue",
    code: {
      hex: "#6093ca"
    },
    id: 10
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
];


test("Fetches data and renders the bubbles", async () => {
  // Finish this test

  mockGetColorsFromApi.mockResolvedValueOnce(mockColors);
  await act(() => {
    render(<BubblePage />);
    return Promise.resolve();
  });
});
