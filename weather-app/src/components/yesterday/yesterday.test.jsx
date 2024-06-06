import { render, screen } from "@testing-library/react";
import Yesterday from "./yesterday";

test("yesterday renders correctly", () => {
  const yesterdayTemp = 7.5;
  const yesterdayHex = "#901035";
  const yesterdayThread = 826;
  const yesterdayYarn = "K667";
  render(
    <Yesterday
      yesterdayTemp={yesterdayTemp}
      yesterdayHex={yesterdayHex}
      yesterdayThread={yesterdayThread}
      yesterdayYarn={yesterdayYarn}
    />
  );

  const colourBox = screen.getByLabelText("yesterday-colour");
  expect(colourBox).toBeInTheDocument();
});
