import { getCategories } from "@/lib/google-drive";
export const dynamic = 'force-dynamic';
export default async function AdminPage() {
  const categories = await getCategories();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <p className="mb-8 text-green-600">✅ Connected to Google Drive</p>
      
      <div className="grid gap-6">
        {categories.map((cat: any) => (
          <div key={cat.id} className="border p-6 rounded-2xl bg-card">
            <h2 className="text-2xl font-semibold">{cat.title}</h2>
            <p className="text-muted-foreground">{cat.images.length} items</p>
          </div>
        ))}
      </div>
    </div>
  );
}