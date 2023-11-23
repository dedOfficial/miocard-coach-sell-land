import React, { Fragment, FC, useState, memo } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import ky from "ky";

interface Props {
  open: boolean;
  onClose: () => void;
}

const RequestDialog: FC<Props> = ({ open, onClose }) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-center text-2xl font-medium leading-6 text-gray-900"
                >
                  Request demo
                </Dialog.Title>
                <form
                  action="submit"
                  onSubmit={handleSubmit(async (data) => {
                    setData(data);
                    await ky.post("https://api.bobbinet.com/waitlist", {
                      json: {
                        name: data.name,
                        email: data.email,
                      },
                    });
                    onClose();
                  })}
                  className="mt-4 flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold" htmlFor="request-name">
                      Name
                    </label>
                    <input
                      className={`rounded-xl border px-4 py-2`}
                      {...register("name")}
                      type="text"
                      placeholder="Enter your name..."
                      id="request-name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold" htmlFor="request-email">
                      E-mail
                    </label>
                    <input
                      className={`rounded-xl border px-4 py-2`}
                      type="email"
                      {...register("email")}
                      placeholder="Enter your e-mail..."
                      id="request-email"
                      required
                    />
                  </div>
                  <div className="mt-4 flex justify-around">
                    <button
                      type="submit"
                      className="btn-gradient inline-flex justify-center rounded-2xl py-2 px-4 font-semibold text-white"
                    >
                      Request
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-2xl px-4 py-2 font-semibold text-[#1F1F29]"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default memo(RequestDialog);
