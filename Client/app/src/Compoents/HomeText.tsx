import { Fragment } from "react/jsx-runtime";

function HomeText(props: any) {
  return (
    <Fragment>
      <div
        className="mt-10 flex  justify-center
      "
      >
        <span className="text-center text-2xl relative top-[200px] font-bold text-blue-700 uppercase">
          <span className="tracking-wide text2 text-white w-200 p-2 uppercase">
            {props.textOne}
          </span>
          {props.heading}
        </span>
      </div>
    </Fragment>
  );
}

export default HomeText;
