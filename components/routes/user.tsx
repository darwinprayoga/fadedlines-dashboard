import { Dummy6 } from "../svg/dummy-6";
import { Dummy7 } from "../svg/dummy-7";
import { Stepper } from "../svg/stepper";

export default function User() {
  return (
    <main className="flex flex-col gap-8">
      <Dummy6 className="w-full" />
      <Dummy7 className="w-full" />

      <div className="w-full flex justify-end py-4">
        <Stepper className="w-40" />
      </div>
    </main>
  );
}
