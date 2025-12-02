import { Fragment } from "react/jsx-runtime";

function BoxSection(props: {textBox: string}) {
  return (
    <Fragment>
      <div
        id="box"
        className="h-100 max-md:block max-md:text-center max-md:flex-col inline-flex justify-center max-lg:xl max-md:text-2x rounded-3xl
      font-bold m-auto relative top-[67vh]"
      >
        <main className="rounded-3xl px-30 py-20 border-none">
          {props.textBox}
        </main>
      </div>
    </Fragment>
  );
}

export default BoxSection;
