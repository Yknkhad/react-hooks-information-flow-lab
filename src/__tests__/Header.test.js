import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  render(<Header />);
  const toggleButton = screen.getByRole("button", { name: /Mode/i });
  expect(toggleButton).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} />);

  fireEvent.click(screen.getByRole("button", { name: /Mode/i }));
  expect(onDarkModeClick).toHaveBeenCalledTimes(1);
});
