import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Privacy_Policy(props: {
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
              Wow Health Privacy Policy
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Last updated: {props.date}
            </p>
          </div>
          <div className="space-y-4 text-black">
            <div className="space-y-4">
              <h2 className="text-2xl  font-bold">
                Introduction to Our Privacy Policy
              </h2>
              <p>
                Wow Health ("we," "us," or "our") is committed to protecting the
                privacy of our users ("you" or "your"). This Privacy Policy
                explains what information we collect, how we use it, and under
                what circumstances we may disclose it.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Information We Collect</h2>
              <h2 className="text-xl font-bold">Personal Information:</h2>
              <p>
                When you create an account or use certain features of the Wow
                Health app, you may provide us with certain personal
                information, such as your name, email address, phone number, and
                health data (depending on the app's functionality). Usage Data:
                We may also collect information about your use of the app, such
                as the features you access, the pages you visit, and the time
                you spend on the app. This information is collected
                automatically by Firebase, a mobile app development platform by
                Google.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                How We Use Your Information
              </h2>
              <h2 className="text-xl font-bold">
                We use the information we collect to:
              </h2>
              <p>
                Provide and improve the Wow Health app Send you important
                information about the app, such as updates, security alerts, and
                support messages Respond to your questions and requests
                personalize your experience with the app Sharing Your
                Information We may share your information with third-party
                vendors who provide services to support the Wow Health app, such
                as cloud storage providers or data analytics providers. These
                vendors are obligated to use your information only for the
                purpose of providing services to Wow Health. We may also
                disclose your information if we are required to do so by law or
                if we believe it is necessary to protect the rights, property,
                or safety of ourselves or others.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Your Choices</h2>
              <p>
                You can access, update, or delete your personal information by
                contacting us at{" "}
                <span className="font-extrabold">
                  mails.wowhealth@gmail.com
                </span>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Security</h2>
              <p>
                We take reasonable steps to protect your information from
                unauthorized access, disclosure, alteration, or destruction.
                However, no internet or electronic storage system is 100%
                secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Children's Policy</h2>
              <p>
                We do not knowingly collect personal information from children
                under the age of 13. If you are a parent or guardian and you
                believe your child has provided us with personal information,
                please contact us.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                the Wow Health app.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us.
              </p>
              <p>
                Email:{" "}
                <span className="font-bold">mails.wowhealth@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
