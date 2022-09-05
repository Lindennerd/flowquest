import { Alert, Button, Input, Textarea, Tooltip } from "react-daisyui";
import { useForm } from "react-hook-form";
import { BiInfoCircle } from "react-icons/bi";
import { useTeams } from "../../hooks/useTeams";
import {
  FormInput,
  formInputSchema,
  FormUpdate,
} from "../../schemas/forms.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForms } from "../../hooks/useForms";

interface IFormFormProps {
  form?: FormUpdate;
  onMutate?: () => void;
}

export function FormForm(props: IFormFormProps) {
  const { getUsersTeams } = useTeams();
  const { create } = useForms();
  const { data: teams, isLoading } = getUsersTeams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: props.form ?? {},
    resolver: zodResolver(formInputSchema),
  });

  async function onSubmit(form: FormInput) {
    await create(form);
    props.onMutate && props.onMutate();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <Input
        {...register("name", { required: true })}
        placeholder="Give the form a cool name"
        className="w-full"
      />
      {errors.name && (
        <span className="text-red-600 font-semibold">
          {errors.name.message}
        </span>
      )}
      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <Textarea
        {...register("description", { required: true })}
        className="w-full"
        placeholder="Give this form a cool description, in such a way that the user easily know what it is about"
      />
      {errors.description && (
        <span className="text-red-600 font-semibold">
          {errors.description.message}
        </span>
      )}

      <div className="flex flex-row gap-2">
        <div>
          <label className="label">
            <span className="label-text">Minimal Rate</span>
            <span className="label-text-alt cursor-pointer ml-2">
              <Tooltip message="The minimal rate that the response to this form should achieve">
                <BiInfoCircle className="text-xl" />
              </Tooltip>
            </span>
          </label>
          <Input
            {...register("minimalRate", {
              required: true,
              valueAsNumber: true,
            })}
            className="w-full"
            type="number"
            min={0}
            max={10}
          />
          {errors.minimalRate && (
            <span className="text-red-600 font-semibold">
              {errors.minimalRate.message}
            </span>
          )}
        </div>
        <div className="flex-1">
          <label className="label">
            <span className="label-text">Team</span>
          </label>
          <select
            {...register("teamId", {
              required: true,
              valueAsNumber: true,
            })}
            name="teamId"
            id="teamId"
            className="select select-bordered w-full"
          >
            <option value="">Select your team</option>
            {teams &&
              teams?.map((team) => (
                <option value={team.id} key={team.id}>
                  {team.name}
                </option>
              ))}
          </select>
          {errors.teamId && (
            <span className="text-red-600 font-semibold">
              {errors.teamId.message}
            </span>
          )}
        </div>
      </div>

      <Button color="success" type="submit" className="mt-4">
        Save
      </Button>
    </form>
  );
}
