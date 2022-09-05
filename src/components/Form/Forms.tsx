import { useRouter } from "next/router";
import { Button } from "react-daisyui";

export function Forms() {
  const router = useRouter();

  return (
    <div className="border rounded-md">
      <div className="p-2 border-b flex justify-between items-center bg-base-200 rounded-t-md">
        <span className="text-md font-semibold">Your Forms</span>
        <Button
          size="sm"
          color="success"
          onClick={(e) => router.push("form/new")}
        >
          new form
        </Button>
      </div>
      <div className="p-4"></div>
    </div>
  );
}
