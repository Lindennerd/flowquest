import { useRouter } from "next/router";
import { FormForm } from "../../components/Form/FormForm";

export default function FormNewPage() {
  const router = useRouter();

  function redirectToFormsList() {
    router.push("/");
  }

  return (
    <div className="mt-4">
      <div className="flex justify-center w-full">
        <div className="border rounded-md shadow-lg p-4 w-full sm:w-[80%]">
          <FormForm onMutate={() => redirectToFormsList()} />
        </div>
      </div>
    </div>
  );
}
