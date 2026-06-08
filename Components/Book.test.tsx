import { render, screen } from "@testing-library/react";
import Book from "@/Components/Book";

describe("Book", () => {
    it("renders key book details", () => {
        render(
            <Book
                title="Book Title"
                author="Book Author"
                subtitle="Book Subtitle"
                duration="10 min"
                averageRating={4.8}
                imageLink="https://example.com/cover.png"
                subscriptionRequired={false}
            />
        );

        expect(screen.getByText("Book Title")).toBeInTheDocument();
        expect(screen.getByText("by Book Author")).toBeInTheDocument();
        expect(screen.getByText("Book Subtitle")).toBeInTheDocument();
        expect(screen.getByText("10 min")).toBeInTheDocument();
        expect(screen.getByText("4.8")).toBeInTheDocument();
        expect(screen.getByAltText("Cover of Book Title")).toBeInTheDocument();
        expect(screen.queryByText("Premium")).not.toBeInTheDocument();
    });

    it("shows premium pill when subscription is required", () => {
        render(
            <Book
                title="Premium Book"
                author="Book Author"
                subtitle="Book Subtitle"
                duration="10 min"
                averageRating={4.8}
                imageLink="https://example.com/premium-cover.png"
                subscriptionRequired
            />
        );

        expect(screen.getByText("Premium")).toBeInTheDocument();
    });
});