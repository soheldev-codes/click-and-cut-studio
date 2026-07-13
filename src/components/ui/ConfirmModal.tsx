"use client";

import Button from "./button";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

type ConfirmModalProps = {
  open: boolean;
  loading?: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({
  open,
  loading = false,
  title,
  description,
  confirmText = "Delete",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-zinc-900">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10">
          <HiOutlineExclamationTriangle className="text-4xl text-red-600" />
        </div>

        <h2 className="mt-5 text-center text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-3 text-center text-zinc-500">
          {description}
        </p>

        <div className="mt-8 flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={onCancel}
            disabled={loading}
          >
            {cancelText}
          </Button>

          <Button
            type="button"
            className="flex-1 bg-red-600 hover:bg-red-700"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}