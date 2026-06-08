import { render, screen } from "@testing-library/react";

import Footer from "@/Components/Footer";

describe("Footer", () => {
  it("renders expected section titles", () => {
    render(<Footer />);

    expect(screen.getByText("Actions")).toBeInTheDocument();
    expect(screen.getByText("Useful Links")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Other")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);

    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
