import { PortfolioHeader } from "@/components/portfolio-header";
import { CategoriesGrid } from "@/components/categories-grid";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { getCategories } from "@/lib/google-drive";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <CategoriesGrid categories={categories} />
      <PortfolioFooter />
    </div>
  );
}