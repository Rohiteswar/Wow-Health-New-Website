import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Refund(props: {
  date:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 mt-40">
          <div className="space-y-2">
            <h1 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl sm:leading-none">
              Wow Health Refund Policy
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Last updated: {props.date}
            </p>
          </div>
          <div className="space-y-4 text-black">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                No cancellations & Refunds are entertained
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
