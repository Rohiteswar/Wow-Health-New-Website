import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Terms_and_conditions(props: { date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal  | null | undefined; }) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl sm:leading-none">
              Wow Health Terms of Service
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Last updated: {props.date}
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Introduction To Our Terms & Conditions
              </h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use
                of the Wow Health app ("App"). By accessing or using the App,
                you agree to be bound by these Terms.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Use of the App</h2>
              <p>
                You may only use the App for lawful purposes and in accordance
                with these Terms. You agree not to use the App in any way that
                could damage, disable, overburden, or impair the App or
                interfere with any other user's use of the App.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Intellectual Property</h2>

              <p>
                The App and all content included in the App (including text,
                graphics, logos, images, and software) are the property of Wow
                Health or its licensors. You may not use any content from the
                App without our express written permission.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Disclaimer</h2>
              <p>
                The App is provided "as is" and without warranty of any kind,
                express or implied. Wow Health disclaims all warranties,
                including, but not limited to, the implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              <p>
                Wow Health will not be liable for any damages arising out of or
                in connection with your use of the App, including, but not
                limited to, direct, indirect, incidental, consequential, or
                punitive damages.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Termination</h2>
              <p>
                We may terminate your access to the App for any reason, at any
                time, without notice.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you
                of any changes by posting the new Terms on the Wow Health app.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Entire Agreement</h2>
              <p>
                These Terms constitute the entire agreement between you and Wow
                Health regarding your use of the App.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Governing Law</h2>
              <p>
                These Terms will be governed by and construed in accordance with
                the laws of the State of{" "}
                <span className="font-semibold">Andhra Pradesh</span>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at{" "}
                <span className="font-semibold">
                  {" "}
                  mails.wowhealth@gmail.com
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
