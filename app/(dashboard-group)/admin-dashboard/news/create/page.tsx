import CreateNewsForm from "./create-news-form";


export default function CreateNewsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Create News
      </h1>

      <CreateNewsForm />

    </div>
  );
}